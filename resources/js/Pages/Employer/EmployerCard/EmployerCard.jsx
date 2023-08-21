import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";

const EmployerCard = () => {
    return (
        <div>
            <div class="p-2">
                <div class="p-8 bg-white shadow mt-24">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p class="font-bold text-gray-700 text-xl">
                                    22
                                </p>
                                <p class="text-gray-400">Friends</p>
                            </div>
                            <div>
                                <p class="font-bold text-gray-700 text-xl">
                                    10
                                </p>
                                <p class="text-gray-400">Photos</p>
                            </div>
                            <div>
                                <p class="font-bold text-gray-700 text-xl">
                                    89
                                </p>
                                <p class="text-gray-400">Comments</p>
                            </div>
                        </div>
                        <div class="relative">
                            <div>
                                <img
                                    class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                                    src="https://i.pinimg.com/736x/56/2a/60/562a6088dd36f221a7493850fa4b76b8.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <PrimaryButton>Add Project</PrimaryButton>

                            <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Message
                            </button>
                        </div>
                    </div>
                    <div class="mt-20 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium text-gray-700">
                            Jessica Jones,
                            <span class="ml-3 font-light text-gray-500">
                                27
                            </span>
                        </h1>
                        <p class="font-light text-gray-600 mt-3">
                            Bucharest, Romania
                        </p>
                        <p class="mt-8 text-gray-500">
                            Solution Manager - Creative Tim Officer
                        </p>
                        <p class="mt-2 text-gray-500">
                            University of Computer Science
                        </p>
                        <p class="mt-2 text-gray-500">+18143008861</p>
                    </div>
                    <div class="mt-12 flex flex-col justify-center">
                        <p class="text-gray-600 text-center font-light lg:px-16">
                            An artist of considerable range, Ryan — the name
                            taken by Melbourne-raised, Brooklyn-based Nick
                            Murphy — writes, performs and records all of his own
                            music, giving it a warm, intimate feel with a solid
                            groove structure. An artist of considerable range.
                        </p>
                        <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerCard;
