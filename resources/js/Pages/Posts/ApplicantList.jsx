import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CardApplicants from "@/Components/CardApplicants";

function ApplicantList() {
    return (
        <div>
            <Header></Header>

            <div className="md:container md:mx-auto  mt-5">
                <button
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span class="sr-only">Open sidebar</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>

{/* this is for the sidenav */}
                <aside
                    id="default-sidebar"
                    class="fixed top-20 left-0 z-100 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul class="space-y-2 font-medium">
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span class="ml-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <div class="mb-3">
                                    <div class=" mb-4 flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            class=" m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="button-addon3"
                                        />

                                        
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </aside>

{/* this is for the card */}
                <div class="p-4 sm:ml-64 ">
                    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
                        <div class="col gap-5 mb-4 ">
                            <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 ">
                                <CardApplicants />
                            </div>
                        </div>
                        <div class="col gap-5 mb-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                                <CardApplicants />
                            </div>
                        </div>
                        <div class="col gap-5 mb-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                                <CardApplicants />
                            </div>
                        </div>
                        <div class="col gap-5 mb-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                                <CardApplicants />
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ApplicantList;
