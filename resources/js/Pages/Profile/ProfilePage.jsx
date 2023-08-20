import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PreviousJobsSection from "@/Components/PreviousJobsSection";
import Footer from "@/Components/Footer";
import ProfileSection from "@/Components/ProfileSection";
import ResumeSection from "@/Components/ResumeSection";
import EducationSection from "@/Components/EducationSection";

function ProfilePage({ auth }) {
    const userType = auth.user.user_type
    localStorage.setItem('userType', userType)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            {/* PROFILE SECTION  */}
        <ProfileSection />
        
            {/* RESUME SECTION */}
            
            <ResumeSection />
            {/* EDUCATION SECTION */}
           <EducationSection />

           {/* PREVIOUS JOBS SECTION */}
           <PreviousJobsSection/>
            <Footer/>
        </AuthenticatedLayout>
        
    );
}

export default ProfilePage;
