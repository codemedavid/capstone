import React from 'react';
import { Card, Button } from 'flowbite-react';
import Img from './img/Pacquiao_and_Didal_(cropped).jpg';
import Ig from "./img/instagram.png";
import Fb from "./img/fb.png";
import Web from "./img/website.png";
import Icon from "./img/icons8-view-48.png";

function TabSideBar() {
  return (
    <>
      <div className="lg:w-[32%] card bg-base-300 rounded-box place-items-center p-4">
        <Card horizontal imgSrc={Img} className='w-[100%] h-[100%]'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Company Name
            <span>
              <Button
                gradientDuoTone="cyanToBlue"
                outline
                className="w-[80%] mt-2 ml-5"
              >
                <img className="w-[15%] mr-2" src={Icon} alt="View Profile Icon" />
                View Profile
              </Button>
            </span>
          </h5>
          <div className="mt-auto">
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">Social Medias</p>
            <div className="flex justify-start">
              <a href="https://www.instagram.com/mannypacquiao/" className="link">
                <img className="w-[60%]" src={Ig} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/MannyPacquiao" className="link">
                <img className="w-[60%]" src={Fb} alt="Facebook" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Manny_Pacquiao" className="link">
                <img className="w-[60%]" src={Web} alt="Website" />
              </a>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-end mt-2">
        <div className="w-[30%] card bg-sky-200 rounded-box p-4">
          <h1 className='mb-5 text-2xl'> <strong>Related Jobs</strong></h1>
          <div className="w-[90%] card bg-white rounded-box place-items-center p-4 ml-5">
            {/* Content for related jobs */}
          </div>
          <div className="w-[90%] card bg-white rounded-box place-items-center p-4 mt-5 ml-5">
            {/* More content for related jobs */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TabSideBar;
