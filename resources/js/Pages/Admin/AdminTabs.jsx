import React, { useState } from "react";
import UsersTab from "./UsersTab";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import JobsTab from "./JobsTab";
import UsersTable from "./UsersTable";

function AdminTabs() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className=" mt-8">
            <div className="flex space-x-4 justify-center">
                <div
                    className={`px-4 py-2 rounded-md lg:text-3xl md:flex items-center md:space-x-4 cursor-pointer ${
                        activeTab === "tab1"
                            ? "text-black  border-blue-400 border-2"
                            : "bg-gray-200"
                    }`}
                    onClick={() => handleTabClick("tab1")}
                >
                    <FaUsers
                        className={`text-6xl hover:scale-125 duration-500  ${
                            activeTab === "tab1"
                                ? "text-orange-400"
                                : "bg-gray-200 "
                        }`}
                    />

                    <h2>
                        User <br /> Registered
                    </h2>
                </div>
                <div
                    className={`px-4 py-2 rounded-md md:flex items-center md:space-x-4 lg:text-3xl cursor-pointer ${
                        activeTab === "tab2"
                            ? " text-black border-blue-400 border-2"
                            : "bg-gray-200"
                    }`}
                    onClick={() => handleTabClick("tab2")}
                >
                    <ImBriefcase
                        className={`text-6xl hover:scale-125 duration-500  ${
                            activeTab === "tab2"
                                ? "text-green-400"
                                : "bg-gray-200"
                        }`}
                    />
                    <h2>
                        Jobs <br />
                        Listed
                    </h2>
                </div>

                <div
                    className={`px-4 py-2 rounded-md md:flex items-center md:space-x-4 lg:text-3xl cursor-pointer ${
                        activeTab === "tab3"
                            ? " text-black border-blue-400 border-2"
                            : "bg-gray-200"
                    }`}
                    onClick={() => handleTabClick("tab3")}
                >
                    <FaClipboardList
                        className={`text-6xl hover:scale-125 duration-500  ${
                            activeTab === "tab3"
                                ? "text-purple-500"
                                : "bg-gray-200"
                        }`}
                    />
                    <h2>
                        Application <br />
                        Sent
                    </h2>
                </div>
            </div>
            <div className="mt-4">
                {activeTab === "tab1" && (
                    <div>
                        <UsersTable />
                    </div>
                )}
                {activeTab === "tab2" && (
                    <div>
                        <JobsTab />
                    </div>
                )}
                {activeTab === "tab3" && (
                    <div>This is the content of Tab 3.</div>
                )}
            </div>
        </div>
    );
}

export default AdminTabs;
