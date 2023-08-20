import React from 'react'
import { PencilIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
function ProfileSection() {
  return (
    <div>
      
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-blue-900 text-2xl">
                            <b>Personal Information</b>
                        </div>
                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-4/12 border-r-2 border-t-2">
                                    <div className="flex justify-end mr-3 mt-3">
                                        <button
                                            type="button"
                                            class="btn-sm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            <PencilIcon className="w-4 inline mr-2" />
                                            Edit
                                        </button>
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            className="rounded-full w-36 h-36 hover:cursor-pointer"
                                            src="https://i.pinimg.com/1200x/b3/8c/b4/b38cb443bff8ba204fd6c2c075135d3e.jpg"
                                            alt="Extra large avatar"
                                        />
                                    </div>

                                    <h1 className="card-title mt-3  justify-center flex text-blue-500">
                                        Royce Wuffy
                                    </h1>

                                    <p className=" justify-center flex mb-5 ">
                                        email address
                                    </p>
                                </div>
                                <div className="flex-1 basis-8/12">
                                    <div className="flex justify-between border-t-2">
                                        <h1 className="card-title ml-3 mt-3">
                                            About
                                        </h1>
                                        <button
                                            type="button"
                                            class="btn-sm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 mt-3"
                                        >
                                            <PencilIcon className="w-4 inline mr-2" />
                                            Edit
                                        </button>
                                    </div>
                                    <div className="border-t-2 mt-2" />
                                    <div className="flex justify-around py-2">
                                        <b>Phone Number</b>
                                        <b>Lives in</b>
                                        <b>Gender</b>
                                    </div>
                                    <div className="flex justify-around text-blue-500">
                                        <b>0949 985 5179</b>
                                        <b>Makati</b>
                                        <b>Male</b>
                                    </div>
                                    <div className="border-t-2 mt-2" />
                                    <div className="flex justify-around ml-auto mt-5 py-2">
                                        <b>Jobs Applied</b>
                                        <b>Jobs Saved</b>
                                        <b>Profile Views</b>
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

export default ProfileSection
