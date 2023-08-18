'use client';

import { Tabs } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Img from './img/Pacquiao_and_Didal_(cropped).jpg'

export default function FullWidthTabs() {
  return (
    <Tabs.Group
      aria-label="Full width tabs"
      style="fullWidth"
    >
      <Tabs.Item
        active
        title="Profile"
      >
       <div className="flex flex-col lg:flex-row w-full">
  <div className="lg:w-[70%] card bg-base-300 rounded-box p-4">
    content
  </div>
  <div className="lg:w-[30%] card bg-base-300 rounded-box place-items-center p-4">
    <Card horizontal imgSrc={Img} className='w-[100%] h-[100%]'>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>Company Name here</p>
        <span>Button here</span>
      </h5>
      <div className="mt-auto">
        <p className="font-normal text-gray-700 dark:text-gray-400">Soc med Here</p>
        <span>Soc med links here</span>
      </div>
    </Card>
  </div>
</div>
<div className="flex justify-end mt-2">
  <div className="w-[30%] card bg-sky-200 rounded-box p-4">
  <h1 className='mb-5 text-2xl'> <strong>Related Jobs</strong></h1>
  <div className="w-[90%] card bg-white rounded-box place-items-center p-4 ml-5">
    content here
  </div>
  <div className="w-[90%] card bg-white rounded-box place-items-center p-4 mt-5 ml-5">
    content here
  </div>
  </div>
</div>






{/* Next Tab */}


      </Tabs.Item>
      <Tabs.Item
        active
        title="Profile"
      >
        <div className="flex w-full">
          <div className="grid  w-[70%] card bg-base-300 rounded-box place-items-center">content</div>
          <div className="grid  w-[30%] card bg-base-300 rounded-box place-items-center"><Card
            horizontal
            imgSrc="/images/blog/image-4.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Company Name here
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </p>
          </Card></div>
        </div>
      </Tabs.Item>




      {/* Next Tab */}





      <Tabs.Item
        active
        title="Profile"
      >
        <div className="flex w-full">
          <div className="grid  w-[70%] card bg-base-300 rounded-box place-items-center">content</div>
          <div className="grid  w-[30%] card bg-base-300 rounded-box place-items-center"><Card
            horizontal
            imgSrc="/images/blog/image-4.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Noteworthy technology acquisitions 2021
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </p>
          </Card></div>
        </div>
      </Tabs.Item>



      {/* Next Tab */}




      <Tabs.Item
        active
        title="Profile"
      >
        <div className="flex w-full">
          <div className="grid  w-[70%] card bg-base-300 rounded-box place-items-center">content</div>
          <div className="grid  w-[30%] card bg-base-300 rounded-box place-items-center"><Card
            horizontal
            imgSrc="/images/blog/image-4.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Noteworthy technology acquisitions 2021
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </p>
          </Card></div>
        </div>
      </Tabs.Item>
    </Tabs.Group>
  )
}


