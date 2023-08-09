import React from 'react'

function Header() {
  return (
    <div className="navbar bg-base-100 sticky top-1 ">
    <div className="navbar-start z-50">
     
      <a className="btn btn-ghost normal-case text-xl z-50" href='/posts'>JOB ERA</a>
    </div>
    <div className="navbar-center hidden lg:flex z-50">
      <ul className="menu menu-horizontal px-1">
        <li><a href='/jobs'>Jobs</a></li>
        <li >
          <a href="/applicants">Applicants</a>
        </li>
        <li><a href='/apply'>Apply</a></li>
      </ul>
    </div>
    <div className="navbar-end z-50">
    
      <a className="btn mx-2 bg-blue-700 text-white" href='/login'>Post Jobs</a>
      <a className="btn bg-green-500 text-white">Find Jobs</a>
    </div>
  <div className='w-[200px]'></div>
    
  </div>
  )
}

export default Header
