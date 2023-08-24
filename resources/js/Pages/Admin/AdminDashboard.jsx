import React from "react";
import AdminTabs from "./AdminTabs";
import { BiSolidUser } from "react-icons/bi";

function AdminDashboard() {
    return (
        <>
            <div className="flex max-w-[1440px] mx-auto mt-4 lg:justify-between">
                <div className="lg:flex items-center w-full mx-auto justify-between ">
                    <h1 className="text-5xl">Job Era</h1>
                    <form className="lg:w-[440px]">
                        <div className="relative w-full">
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
                            />
                        </div>
                    </form>
                    <div className="flex items-center space-x-2 text-3xl">
                        <BiSolidUser />
                        <h2>Admin Name</h2>
                    </div>
                </div>
            </div>
            <AdminTabs />
        </>
    );
}

export default AdminDashboard;
