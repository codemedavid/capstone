import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import JobCard from "./JobCard";

function JobCards() {
    return (
        <div className="py-24 max-w-[1440px] mx-auto grid grid-cols-3 gap-4">
            {/* <-- LEFT --> */}
            <div className="flex col-span-1 gap-4 bg-gray-100 rounded-xl max-h-[520px]">
                <div className="w-full p-4 border rounded-xl">
                    <div className="">
                        <h2>Filter By:</h2>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Full-Time</h1>
                    </div>
                    <div className="flex gap-4 pb-4 border-b-4 border-emerald-400">
                        <Checkbox color="green" /> <h1>Part-Time</h1>
                    </div>
                    <div className="mt-4">
                        <h2>Category:</h2>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Admin Support</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Customer Service</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Admin Support</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Customer Service</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" /> <h1>Design & Creative</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" />
                        <h1>Engineering & Architecture</h1>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Checkbox color="green" />
                        <h1>Web, Mobile & Software Dev</h1>
                    </div>
                </div>
            </div>
            {/* <-- RIGHT --> */}
            <div className="flex w-full col-span-2 p-4 bg-gray-100 rounded-xl">
                <div className="w-full">
                    <form className="">
                        <label
                            for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Jobs"
                                required
                            />
                            <button
                                type="submit"
                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="flex-col mt-8">
                        <JobCard title="Admin Support" company="TeleTech" />
                        <JobCard title="Customer Service" company="TeleTech" />
                        <JobCard title="Customer Service" company="TeleTech" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCards;
