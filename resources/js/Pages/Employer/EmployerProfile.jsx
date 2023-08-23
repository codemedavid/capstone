import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import EmployerCard from "@/Pages/Employer/EmployerCard/EmployerCard";

function EmployerProfile({ auth }) {
    return (
        <div>
            <AuthenticatedLayout user={auth.user}>
                <Head title="EmployerProfile" />
                <div>
                    <EmployerCard />
                    {/* <EmployerInfo /> */}
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

export default EmployerProfile;