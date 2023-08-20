import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
function EmployerProfile({auth}) {
  return (
    <div>
      <Authenticated
       user={auth.user}>
       
      </Authenticated>
    </div>
  )
}

export default EmployerProfile
