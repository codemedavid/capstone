import React from "react";

function Header() {
    return (
        <div className="sticky top-0 z-50 navbar bg-gray-50">
            <div className="z-50 navbar-start">
                <a className="z-50 text-xl normal-case btn btn-ghost" href="/">
                    JOB ERA
                </a>
            </div>
            <div className="z-50 justify-between hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li>
                        <a href="/joblists">Jobs</a>
                    </li>
                    <li>
                        <a href="/applicants">Applicants</a>
                    </li>
                    <li>
                        <a href="/apply">Apply</a>
                    </li>
                </ul>
                <a className="mx-2 text-white bg-blue-700 btn" href="/login">
                    Post Jobs
                </a>
                <a className="text-white bg-green-500 btn">Find Jobs</a>
            </div>
        </div>
    );
}

export default Header;
