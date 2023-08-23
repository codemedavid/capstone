import React from 'react'
import AdminSidebar from '@/Components/AdminComponents/AdminSidebar'
function AdminDashboard() {
  return (
    <div className='flex justify-between'>
      <AdminSidebar></AdminSidebar>
      <div className='w-[86%]'>new</div>
    </div>
  )
}

export default AdminDashboard
