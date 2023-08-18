import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

function ProfilePage({ auth }) {
  return (

    <AuthenticatedLayout
    user={auth.user}
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
           {`${auth.user.user_type}'s Profile`}
        </h2>
    }
>
    </AuthenticatedLayout>


 
  )
}

export default ProfilePage