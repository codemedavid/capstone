import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import EmployerProfile from "@/Pages/EmployerProfile";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                            <EmployerProfile />
                        </div>
                        {/* profile  */}

                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-4/12 border-r-2 border-t-2">
                                    <div className="flex justify-end mr-3 mt-3">
                                        <button
                                            type="button"
                                            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
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

                                    <h1 className="card-title mt-3  justify-center flex">
                                        Royce Wuffy
                                    </h1>

                                    <p className=" justify-center flex mb-5">
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
                                            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 mt-3"
                                        >
                                            Edit
                                        </button>
                                    </div>

                                    <div className="flex justify-evenly mt-2 border-t-2 py-2">
                                        <b>Phone Number</b>
                                        <b>Lives in</b>
                                        <b>Gender</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
