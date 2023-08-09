import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

function CardApplicants() {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-1">
                <div className="row">
                    <div className="col">
                        <div className="avatar">
                            <div className="w-24 rounded-full mt-5 ml-5 my-3">
                                <img src="https://i.pinimg.com/1200x/b3/8c/b4/b38cb443bff8ba204fd6c2c075135d3e.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col ml-5 my-3">
                        <h3 className="mx-5">Royce Wuffy</h3>
                    </div>
                </div>

                <div className="card-body py-0">
                    <br />
                    <h3 className="card-title">Job Title</h3>
                    <p >Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.</p>
                    <p >Click the button to listen on Spotiwhy app.</p>
                    <p >Click the button to listen on Spotiwhy app.</p>
                    <p >Click the button to listen on Spotiwhy app.</p>
                    

                    <div className="row card-actions justify-end mb-3">
                        <button className="btn-sm rounded-lg ring-2 ring-sky-700 hover:bg-sky-500 hover:text-white"> <EyeIcon className="w-5 inline mr-1"/>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardApplicants;
