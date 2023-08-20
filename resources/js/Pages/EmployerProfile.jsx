import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

const EmployerProfile = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        employer: "",
        vacancy: "",
        worksched: "",
        typeofwork: "",
        hrsperweek: "",
        salary: "",
        qualification1: "",
        qualification2: "",
        qualification3: "",
        qualification4: "",
        qualification5: "",
        skills1: "",
        skills2: "",
        skills3: "",
        skills4: "",
        skills5: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("employerProfile.store"), { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={submit}>
            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.employer}
                    type="text"
                    name="floating_introduction"
                    id="floating_introduction"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("employer", e.target.value)}
                />
                <label
                    for="floating_introduction"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Employer
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.vacancy}
                    type="text"
                    name="floating_first_job"
                    id="floating_first_job"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("vacancy", e.target.value)}
                />
                <label
                    for="floating_first_job"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Vacancy
                </label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.worksched}
                    type="text"
                    name="floating_second_job"
                    id="floating_second_job"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("worksched", e.target.value)}
                />
                <label
                    for="floating_second_job"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Work Schedule
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.typeofwork}
                    type="text"
                    name="floating_third_job"
                    id="floating_third_job"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("typeofwork", e.target.value)}
                />
                <label
                    for="floating_third_job"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Type of Work
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.hrsperweek}
                    type="text"
                    name="floating_fourth_job"
                    id="floating_fourth_job"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("hrsperweek", e.target.value)}
                />
                <label
                    for="floating_fourth_job"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Hours per Week
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input
                    value={data.salary}
                    type="text"
                    name="floating_fifth_job"
                    id="floating_fifth_job"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setData("salary", e.target.value)}
                />
                <label
                    for="floating_fifth_job"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Salary
                </label>
            </div>
            <div class="block max-w-screen p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow ">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.qualification1}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("qualification1", e.target.value)
                            }
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Qualification1
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.qualification2}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("qualification2", e.target.value)
                            }
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Qualification2
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.qualification3}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("qualification3", e.target.value)
                            }
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Qualification3
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.qualification4}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("qualification4", e.target.value)
                            }
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Qualification4
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.qualification5}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("qualification5", e.target.value)
                            }
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Qualification5
                        </label>
                    </div>
                </div>
            </div>

            <div class="block max-w-screen p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.skills1}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("skills1", e.target.value)}
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills1
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.skills2}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("skills2", e.target.value)}
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills2
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.skills3}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("skills3", e.target.value)}
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills3
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.skills4}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("skills4", e.target.value)}
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills4
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            value={data.skills5}
                            type="text"
                            name="floating_contact_info"
                            id="floating_contact_info"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("skills5", e.target.value)}
                        />
                        <label
                            for="floating_contact_info"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Skills5
                        </label>
                    </div>
                </div>
            </div>
            <PrimaryButton className="mt-4" disabled={processing}>
                Submit
            </PrimaryButton>
        </form>
    );
};

export default EmployerProfile;
