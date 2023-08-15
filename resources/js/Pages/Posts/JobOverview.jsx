import React from "react";
import { TbCurrencyPeso } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { CgCalendarDates } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

function JobOverview({ joverview }) {
    console.log(joverview);

    return (
        <>
            {/* {JSON.stringify(joverview)} */}

            {joverview.map(
                ({
                    id,
                    salary,
                    worksched,
                    typeofwork,
                    hrsperweek,
                    created_at,
                }) => (
                    <div
                        key={id}
                        className="max-w-[1440px] mx-auto  lg:flex  lg:justify-center"
                    >
                        <div className="gap-4 p-4 mx-2 mt-4 bg-blue-400 lg:flex rounded-xl lg:mx-0">
                            <div className="mb-2 lg:border-r-2 lg:mb-0 lg:pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                        <FaSuitcase />
                                    </div>
                                    <div>
                                        <p>Work Schedule</p>
                                        <h2>{worksched}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 lg:border-r-2 lg:mb-0 lg:pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                        <BsPersonWorkspace />
                                    </div>
                                    <div>
                                        <p>Type Work</p>
                                        <h2>{typeofwork}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 lg:border-r-2 lg:mb-0 lg:pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                        <GiClockwork />
                                    </div>
                                    <div>
                                        <p>Hours per week</p>
                                        <h2>{hrsperweek}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 lg:border-r-2 lg:mb-0 lg:pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                        <TbCurrencyPeso />
                                    </div>
                                    <div>
                                        <p>Salary</p>
                                        <h2>{salary}</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 ">
                                    <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                        <CgCalendarDates />
                                    </div>
                                    <div>
                                        <p>Date Posted</p>
                                        <h2>{formatDate(created_at)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}

            {/* Rest of your JSX for rendering job overview */}
            {joverview.map(
                ({
                    id,
                    jtitle,
                    jdescription,
                    qualification1,
                    qualification2,
                    qualification3,
                    qualification4,
                    qualification5,
                    qualification6,
                    skills1,
                    skills2,
                    skills3,
                    skills4,
                    skills5,
                    skills6,
                }) => (
                    <div
                        key={id}
                        className="max-w-[1440px] lg:mx-auto mt-4 bg-blue-400 border mx-2 rounded-md"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <BiDetail className="pt-4 text-6xl text-emerald-600" />

                            <h2 className="pt-4 text-4xl ">Job Overview</h2>
                        </div>

                        <div className="p-4 mt-4">
                            <h2 className="text-3xl ">{jtitle}</h2>
                            <h2 className="mt-4 text-2xl underline">
                                Job Description:
                            </h2>
                            <p>{jdescription}</p>
                            <h2 className="mt-4 text-2xl underline">
                                Qualifications:
                            </h2>
                            <ul>
                                <li>{qualification1}</li>
                                <li>{qualification2}</li>
                                <li>{qualification3}</li>
                                <li>{qualification4}</li>
                                <li>{qualification5}</li>
                                <li>{qualification6}</li>
                            </ul>
                            <h2 className="mt-4 text-2xl underline">
                                Job Specializations:
                            </h2>
                            <div className="flex gap-4 mt-2 text-lg">
                                {skills1 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills1}
                                    </h2>
                                )}
                                {skills2 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills2}
                                    </h2>
                                )}
                                {skills3 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills3}
                                    </h2>
                                )}
                                {skills4 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills4}
                                    </h2>
                                )}
                                {skills5 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills5}
                                    </h2>
                                )}
                                {skills6 && (
                                    <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                                        {skills6}
                                    </h2>
                                )}
                            </div>
                            <div className="mt-4 text-center">
                                <Button
                                    color="green"
                                    className="duration-500 text-md hover:scale-125"
                                >
                                    Apply
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
}

export default JobOverview;
