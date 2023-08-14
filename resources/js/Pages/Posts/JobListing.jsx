import React from "react";
import Header from "@/Components/Header";
import JobCards from "@/Components/JobCards";

function JobListing({ jobs }) {
    return (
        <div>
            <Header></Header>
            <JobCards jobs={jobs} />
        </div>
    );
}

export default JobListing;
