import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

function PreviousJobsSection() {
    return (
        <div>
            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between p-6 text-blue-900 text-2xl">
                            <b>Previous Work Experience</b>
                            <button
                                type="button"
                                class="btn-sm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <PencilIcon className="w-4 inline mr-2" />
                                Edit
                            </button>
                        </div>
                        <div className="container">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-4/12 border-r-2 border-t-2">
                                    <div className="flex mr-3 mt-3 mb-5">
                                        <b className="ml-5 text-lg">Date of work:</b>
                                        <b className="ml-10 text-lg">Name of job:</b>
                                    </div>
                                    <div className="mb-5">
                                        <b className="ml-5">    
                                        Job Description
                                        </b>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviousJobsSection;
