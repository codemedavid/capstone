import React from 'react'
import { PencilIcon } from "@heroicons/react/24/outline";
function EducationSection() {
  return (
    <div>
       <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between p-6 text-blue-900 text-2xl">
                            <b>Education</b><button
                                            type="button"
                                            class="btn-sm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            <PencilIcon className="w-4 inline mr-2" />
                                            Edit
                                        </button>
                        </div>
                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-4/12 border-r-2 border-t-2">
                                    <div className="flex items-center justify-between mt-3 mb-5">
                                    <img class="w-20 h-20 rounded-full ml-10 mt-2 mb-2" src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo-Meaning-history.jpg" alt="Large avatar"/>
                                    <b className='text-2xl  text-blue-900'>Harvard School of Developers</b>
                                    <b className='text-2xl mr-10  text-blue-900'>2023-2024</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default EducationSection
