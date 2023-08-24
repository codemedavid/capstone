import React from "react";
import Header from "@/Components/Header";
import JobCards from "@/Components/JobCards";

function JobListing({ jobs }) {
    return (
        <div>
            <Header
                button1={"Sign up as Applicant"}
                button2={"Sign up as Employer"}
                link1={"register"}
                link2={"register.employer"}
            ></Header>
            <JobCards jobs={jobs} />
        </div>
    );
}

export default JobListing;
