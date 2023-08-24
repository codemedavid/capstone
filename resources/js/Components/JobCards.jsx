import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

import JobCard from "./JobCard";

function JobCards({ jobs }) {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        fullTime: false,
        partTime: false,
        hybrid: false,
        workFromHome: false,
    });

    console.log(jobs);
    console.log(search);

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        const searchValue = e.target.elements["default-search"].value;
        setSearch(searchValue.toLowerCase());
    };

    const handleCheckboxChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const filteredJobs = jobs.filter((item) => {
        const lowerSearch = search.toLowerCase();
        return (
            (lowerSearch === "" ||
                item.jtitle.toLowerCase().includes(lowerSearch) ||
                item.employer.toLowerCase().includes(lowerSearch)) &&
            (!filters.fullTime || item.worksched === "Full-Time") &&
            (!filters.partTime || item.worksched === "Part-Time") &&
            (!filters.hybrid || item.typeofwork === "Hybrid") &&
            (!filters.workFromHome || item.typeofwork === "Work from Home")
        );
    });
    console.log("Filtered Jobs:", filteredJobs);
    return (
        <div className="max-w-[1440px] mx-4 lg:mx-auto grid lg:grid-cols-3 gap-4 pt-8">
            {/* LEFT */}
            <div className="flex w-full p-4 bg-gray-100 lg:col-span-2 rounded-xl">
                <div className="w-full">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Jobs"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="flex-col mt-8">
                        {filteredJobs.map((job) => (
                            <JobCard
                                key={job.id}
                                id={job.id}
                                image_upload={job.image_upload}
                                title={job.jtitle}
                                jdescription={job.jdescription}
                                employer={job.employer}
                                salary={job.salary}
                                vacancy={job.vacancy}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="flex col-span-1 gap-4 bg-gray-100 rounded-xl max-h-[290px] justify-center">
                <div className="w-full p-4">
                    <div className="">
                        <h2>Filter By:</h2>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                        <Checkbox
                            color="green"
                            checked={filters.fullTime}
                            onChange={() => handleCheckboxChange("fullTime")}
                        />
                        <h1 className="text-center">Full-Time</h1>
                    </div>
                    <div className="flex items-center gap-2 pb-4 ">
                        <Checkbox
                            color="green"
                            checked={filters.partTime}
                            onChange={() => handleCheckboxChange("partTime")}
                        />
                        <h1>Part-Time</h1>
                    </div>
                    <div className="flex items-center gap-2 pb-4 ">
                        <Checkbox
                            color="green"
                            checked={filters.hybrid}
                            onChange={() => handleCheckboxChange("hybrid")}
                        />
                        <h1>Hybrid</h1>
                    </div>
                    <div className="flex items-center gap-2 pb-4 ">
                        <Checkbox
                            color="green"
                            checked={filters.workFromHome}
                            onChange={() =>
                                handleCheckboxChange("workFromHome")
                            }
                        />
                        <h1>Work From Home</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCards;
