import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import CardApplicants from '@/Components/CardApplicants'


function ApplicantList() {
  return (
    <div>
    <Header></Header>
      
        <br />
        <br />
        <br />
        <br />
         
          <div className="md:container md:mx-auto my-2">

          <CardApplicants/>
          <CardApplicants/>
          <CardApplicants/>
          <CardApplicants/>

      <br />
      <Footer></Footer>
          </div>
    </div>
  )
}

export default ApplicantList

