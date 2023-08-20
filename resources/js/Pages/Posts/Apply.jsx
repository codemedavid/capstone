
import React from 'react';
import Header from '@/Components/Header';
import "../../../css/app.css";
import Tabs from '../../Components/Tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';



function Apply({auth}) {
  const [key, setKey] = useState('home');
  const userType = auth.user.user_type
  localStorage.setItem('userType', userType)
  return (
    <>
     <Authenticated 
     user={auth.user}
    > 
      <div
        className="text-center border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundColor: "#004AAD" }}
      >
        <p className='text-white text-9xl pt-10'>Job Title</p>
        <button
          type="button"
          className="py-2.5 px-5 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200 hover:bg-yellow-400 hover:text-white focus:z-10 focus:ring-4 dark:hover:text-black mt-5"
        >
          <p className='text-white text-3xl'>Apply Now</p>
        </button>

   
      <div className=" text-center border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: "#004AAD" }}>
        <p className='text-white text-9xl pt-10' >Job Title</p>
        <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200 hover:bg-yellow-400 hover:text-white focus:z-10 focus:ring-4  dark:hover:text-black mt-5"><p className='text-white text-3xl'>Apply Now</p></button>

        <div className="text-left">
          <div className='row'>
            <div className="col">
            <p class="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white ">
                <svg style={{ color: "#FF3131" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className='text-white text-3xl'>Remote</p>
              </p>
              <p class="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path style={{ color: "yellow" }} stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className='text-white text-3xl'> Full Time</p>
              </p>
              <p class="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white ">
                <svg style={{ color: 'green' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>

                <p className='text-white text-3xl'>TBD</p>
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <Tabs/>
      <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Profile</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
    </li>
</ul>

</Authenticated>
    </>
  );
}

export default Apply;
