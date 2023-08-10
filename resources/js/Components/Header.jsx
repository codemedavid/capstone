import React from 'react'

function Header() {
  return (
    <div className="navbar bg-gray-50 sticky top-0 z-50">
    <div className="navbar-start z-50">
     
      <a className="btn btn-ghost normal-case text-xl z-50" href='/'>JOB ERA</a>
    </div>
    <div className="navbar-center hidden lg:flex z-50 justify-between">
      <ul className="menu menu-horizontal px-1">
        <li><a href='/jobs'>Jobs</a></li>
        <li >
          <a href="/applicants">Applicants</a>
        </li>
        <li><a href='/apply'>Apply</a></li>
      </ul>
      <a className="btn mx-2 bg-blue-700 text-white" href='/login'>Post Jobs</a>
      <a className="btn bg-green-500 text-white">Find Jobs</a>
    </div>
 
    
  </div>
  )
}

export default Header
