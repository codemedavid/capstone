import React from "react";
import { TbCurrencyPeso } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { CgCalendarDates } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

function JobOverview({ joverview }) {
    return (
        <>
            {JSON.stringify(joverview)}
            <div className="max-w-[1440px] mx-auto  lg:flex  lg:justify-center">
                <div className="gap-4 p-4 mx-2 mt-4 bg-blue-400 lg:flex rounded-xl lg:mx-0">
                    <div className="mb-2 lg:border-r-2 lg:mb-0 lg:pr-4">
                        <div className="flex items-center gap-4">
                            <div className="p-2 text-4xl bg-gray-200 border rounded-xl text-emerald-400">
                                <FaSuitcase />
                            </div>
                            <div>
                                <p>Work Schedule</p>
                                <h2>Full-Time</h2>
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
                                <h2>Hybrid</h2>
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
                                <h2>TBD</h2>
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
                                <h2>27,000</h2>
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
                                <h2>August 10, 2023</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] lg:mx-auto mt-4 bg-blue-400 border mx-2 rounded-md">
                <div className="flex items-center justify-center gap-2">
                    <BiDetail className="pt-4 text-6xl text-emerald-600" />

                    <h2 className="pt-4 text-4xl ">Job Overview</h2>
                </div>

                <div className="p-4 mt-4">
                    <h2 className="text-3xl ">Customer Service</h2>
                    <h2 className="mt-4 text-2xl underline">
                        Job Description:
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere repellendus nesciunt, ipsum laborum eius neque
                        ullam optio eos qui, pariatur cupiditate sit assumenda
                        asperiores iste architecto aliquid commodi unde culpa
                        ab? Temporibus excepturi, ipsam modi quisquam deleniti
                        doloribus eveniet incidunt. Adipisci quae voluptas ea.
                        Natus aliquid amet tempore nihil alias?
                    </p>
                    <h2 className="mt-4 text-2xl underline">Qualifications:</h2>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore aperiam laboriosam qui natus.
                        </li>
                    </ul>
                    <h2 className="mt-4 text-2xl underline">
                        Skill Requirments:
                    </h2>
                    <div className="flex gap-4 mt-2 text-lg">
                        <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                            MS Office
                        </h2>
                        <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                            Notepad
                        </h2>
                        <h2 className="px-8 bg-gray-100 rounded-2xl text-emerald-500">
                            Calculator
                        </h2>
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
        </>
    );
}

export default JobOverview;
