import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import ApplicantDashboard from "@/Components/ApplicantDashboard";
function ApplicantList({auth}) {
  console.log(auth)

  const user = auth.user;
    return (
        <div>  
        {
            user == null ? <><Header /><ApplicantDashboard/></> : <Authenticated user={user}> <ApplicantDashboard/></Authenticated>
        }          
            
            
            <Footer></Footer>
            
        </div>
    );
}

export default ApplicantList;















        






