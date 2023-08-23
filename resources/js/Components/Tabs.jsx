'use client';
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Img from './img/Pacquiao_and_Didal_(cropped).jpg'
import Ig from "./img/instagram.png";
import Fb from "./img/fb.png"
import Web from "./img/website.png";
import Icon from "./img/icons8-view-48.png";

export default function FullWidthTabs(description) {
  return (
    <Tabs.Group
      aria-label="Full width tabs"
      style="fullWidth"
      className=' bg-base-300'
    >
      <Tabs.Item
        active
        title="Profile"
      >
        <div className="flex flex-col lg:flex-row w-full  bg-base-300">
          <div className="lg:w-[70%] card bg-base-300 rounded-box p-4">
            {description.description}
          </div>
          <div className="lg:w-[32%] card bg-base-300 rounded-box place-items-center p-4">
            <Card horizontal imgSrc={Img} className='w-[100%] h-[100%]'>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Company Name</p>
                <span>
                  <Button
                  gradientDuoTone="cyanToBlue"
                  outline
                  className = "w-[80%] mt-2 ml-5 "
                >
                  <img className="w-[15%] mr-2" src={Icon}/>
                  <p>
                     View Profile
                  </p>
                </Button>
                </span>
              </h5>
              <div className="mt-auto">
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">Social Medias</p>
                <div className="flex justify-start">
                  <a href="https://www.instagram.com/mannypacquiao/" className="link">
                    <img className="w-[60%]" src={Ig} alt="Button Image" />
                  </a>
                  <a href="https://www.facebook.com/MannyPacquiao" className="link">
                    <img className="w-[60%]" src={Fb} alt="Button Image" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Manny_Pacquiao" className="link">
                    <img className="w-[60%]" src={Web} alt="Button Image" />
                  </a>
                </div>
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
      </Tabs.Item>




      {/* Next Tab */}




      <Tabs.Item
        active
        title="Requirments"
        
      >
        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:w-[70%] card bg-base-300 rounded-box p-4">
            content
          </div>
          <div className="lg:w-[30%] card bg-base-300 rounded-box place-items-center p-4">
            <Card horizontal imgSrc={Img} className='w-[100%] h-[100%]'>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Company Name</p>
                <span>
                  <Button
                  gradientDuoTone="cyanToBlue"
                  outline
                  className = "w-[80%] mt-2 ml-5 "
                >
                  <img className="w-[15%] mr-2" src={Icon}/>
                  <p>
                     View Profile
                  </p>
                </Button>
                </span>
              </h5>
              <div className="mt-auto">
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">Social Medias</p>
                <div className="flex justify-start">
                  <a href="https://www.instagram.com/mannypacquiao/" className="link">
                    <img className="w-[60%]" src={Ig} alt="Button Image" />
                  </a>
                  <a href="https://www.facebook.com/MannyPacquiao" className="link">
                    <img className="w-[60%]" src={Fb} alt="Button Image" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Manny_Pacquiao" className="link">
                    <img className="w-[60%]" src={Web} alt="Button Image" />
                  </a>
                </div>
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
      </Tabs.Item>




      {/* Next Tab */}





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
                <p>Company Name</p>
                <span>
                  <Button
                  gradientDuoTone="cyanToBlue"
                  outline
                  className = "w-[80%] mt-2 ml-5 "
                >
                  <img className="w-[15%] mr-2" src={Icon}/>
                  <p>
                     View Profile
                  </p>
                </Button>
                </span>
              </h5>
              <div className="mt-auto">
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">Social Medias</p>
                <div className="flex justify-start">
                  <a href="https://www.instagram.com/mannypacquiao/" className="link">
                    <img className="w-[60%]" src={Ig} alt="Button Image" />
                  </a>
                  <a href="https://www.facebook.com/MannyPacquiao" className="link">
                    <img className="w-[60%]" src={Fb} alt="Button Image" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Manny_Pacquiao" className="link">
                    <img className="w-[60%]" src={Web} alt="Button Image" />
                  </a>
                </div>
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
      </Tabs.Item>

      {/* Next Tab */}




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
                <p>Company Name</p>
                <span>
                  <Button
                  gradientDuoTone="cyanToBlue"
                  outline
                  className = "w-[80%] mt-2 ml-5 "
                >
                  <img className="w-[15%] mr-2" src={Icon}/>
                  <p>
                     View Profile
                  </p>
                </Button>
                </span>
              </h5>
              <div className="mt-auto">
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">Social Medias</p>
                <div className="flex justify-start">
                  <a href="https://www.instagram.com/mannypacquiao/" className="link">
                    <img className="w-[60%]" src={Ig} alt="Button Image" />
                  </a>
                  <a href="https://www.facebook.com/MannyPacquiao" className="link">
                    <img className="w-[60%]" src={Fb} alt="Button Image" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Manny_Pacquiao" className="link">
                    <img className="w-[60%]" src={Web} alt="Button Image" />
                  </a>
                </div>
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
      </Tabs.Item>
    </Tabs.Group>
  )
}


