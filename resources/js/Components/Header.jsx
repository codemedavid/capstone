import React, { useState } from "react";

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const link1 = props.link1
    const link2 = props.link2
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const userType = localStorage.getItem("userType");

    return (
        <div className="sticky top-0 z-50 bg-slate-50">
            <div className="container flex items-center justify-between px-2 py-4 mx-auto">
                <div className="px-4 text-2xl font-semibold text-black">
                    <a href="/">JOB ERA</a>
                </div>
                <div className="items-center justify-center hidden space-x-6 lg:flex">
                    {userType == "employer" ? (
                        ""
                    ) : (
                        <a
                            className="text-black hover:text-gray-300"
                            href="/joblists"
                        >
                            Jobs
                        </a>
                    )}

                    <a
                        className="text-black hover:text-gray-300"
                        href="/applicants"
                    >
                        Applicants
                    </a>
                    {userType == "employer" ? (
                        ""
                    ) : (
                        <a
                            className="text-black hover:text-gray-300"
                            href="/apply"
                        >
                            Apply
                        </a>
                    )}

                    <a
                        className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600"
                        href="/login"
                    >
                        Post Jobs
                    </a>
                    <a className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-400">
                        Find Jobs
                    </a>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 13H5v-2h14v2zm0-7H5V4h14v2zm0 14H5v-2h14v2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="py-2 bg-gray-800 lg:hidden">
                    <a className="block px-4 py-2 text-white" href="/joblists">
                        Jobs
                    </a>
                    <a
                        className="block px-4 py-2 text-white"
                        href="/applicants"
                    >
                        Applicants
                    </a>
                    <a className="block px-4 py-2 text-white" href="/apply">
                        Apply
                    </a>
                    <a
                        className="inline px-4 py-2 mx-2 mt-4 text-white bg-blue-700 rounded"
                        href="/login"
                    >
                        Post Jobs
                    </a>
                    <a className="inline px-4 py-2 text-white bg-green-500 rounded">
                        Find Jobs
                    </a>
                </div>
            )}
        </div>
    );
}

export default Header;