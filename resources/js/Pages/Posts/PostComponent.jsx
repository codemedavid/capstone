import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from '@/Components/Header'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Footer from '@/Components/Footer'
import JobCards from '@/Components/JobCards'
import Hero from '@/Components/HomeComponents/Hero'
import Content from '@/Components/HomeComponents/Content'
function PostComponent() {
 
  return (
    <>
    <Header
           button1={'Sign in'}
            button2={'Sign up as Applicant'}
            link1={'login'}
            link2={'register'}
    ></Header>
<Hero />
<Content></Content>

<Footer></Footer>
  
  </>
  )
}

export default PostComponent
