import React from "react";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";

function CardApplicants() {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-1">
                <div className="row w-1/2">
                    <div className="col">
                        <div className="avatar">
                            <div className="w-2/3 rounded-full mx-auto my-3">
                                <img src="https://i.pinimg.com/1200x/b3/8c/b4/b38cb443bff8ba204fd6c2c075135d3e.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col flex justify-center mb-3">
                        <h3 className="card-title">Royce Wuffy</h3>
                    </div>
                </div>

                <div className="card-body py-0">
                    <br />
                    <h2 className="card-title">Job Title</h2>
                    <p >Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.</p>
                    <h3 className="card-title mb-0">Skills</h3>
                    <div className="row mt-0">

                    <span className="hover:bg-orange-500 hover:text-white bg-orange-400 border-spacing-x-28 px-1 py-1 rounded-lg mr-1 text-sm">JavaScript</span> 
                    <span className="hover:bg-blue-500 hover:text-white bg-blue-400 border-spacing-x-28 px-1 py-1 rounded-lg text-sm mr-1">React</span> 
                    <span className="hover:bg-green-500 hover:text-white bg-green-400 border-spacing-x-28 px-1 py-1 rounded-lg text-sm">PHP</span> 
                    
                    
                    </div>
                    

                    <div className="row card-actions justify-end mb-3">
                        <HeartIcon className="w-7 mr-2 hover:text-red-900 hover:fill-red-600"/><button className="btn-sm rounded-lg ring-2 ring-sky-700 hover:bg-sky-500 hover:text-white"> <EyeIcon className="w-5 inline mr-1"/>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardApplicants;
