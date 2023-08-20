import React, { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
   const userType = localStorage.getItem('userType')
    return (
        <div className="sticky top-0 z-50 bg-slate-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-2">
                <div className="text-black text-2xl font-semibold px-4">
                    <a href="/">JOB ERA</a>
                </div>
                <div className="hidden lg:flex space-x-6 justify-center items-center">
                {
                        userType == 'employer' ? '' :  <a className="text-black hover:text-gray-300" href="/joblists">
                      Jobs
                      </a>
                }
                   
                    <a className="text-black hover:text-gray-300" href="/applicants">
                        Applicants
                    </a>
                    {
                        userType == 'employer' ? '' : <a className="text-black hover:text-gray-300" href="/apply">
                      Apply
                      </a>
                       }
                   
                    <a className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded" href={route('register')}>
                    Sign up as Applicant
                    </a>
                    <a className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded" href={route('register.employer')}>Sign up as Employer</a>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
                    >
                        <svg
                            className="h-6 w-6 fill-current"
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
                <div className="lg:hidden bg-gray-800 py-2">
                    <a className="block px-4 py-2 text-white" href="/joblists">
                        Jobs
                    </a>
                    <a className="block px-4 py-2 text-white" href="/applicants">
                        Applicants
                    </a>
                    <a className="block px-4 py-2 text-white" href="/apply">
                        Apply
                    </a>
                    <a className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded" href={route('register')}>
                    Sign up as Applicant
                    </a>
                    <a className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded" href={route('register.employer')}>Sign up as Employer</a>
                </div>
            )}
        </div>
    );
}

export default Header;
