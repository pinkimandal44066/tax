
import React from 'react'

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Enquiry = () => {
 
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message submitted: ${message}`);
    setMessage("");
  };



















  return (
    <>
      <div>
        <div>
          <div className="lg:p-0 p-4 md:p-5 space-y-4">
            <div className="bg-[#FEF3E2] ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-[#E79F30]">
                <h3 className="--text-center text-2xl block w-[100%] text-center font-semibold text-white ">
                  Add Your Information
                </h3>
                <button
                  type="button"
                  className="text-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                ></button>
              </div>

              <h1 className="lg:text-5xl text-3xl font-semibold text-[#E79F30] text-center mt-2 ">
                Reach out to us
              </h1>
              <div className="flex flex-col justify-evenly items-center lg:mx-40 mx-5 mt-10 ">
                <div>
                  <div className="lg:w-80 w-60 md:w-96 sm:w-72">
                    <div className="relative w-full min-w-[200px] h-12">
                      <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </div>
                      <input
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
                        placeholder=" "
                      />
                      <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
                        Full Name
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-10 mb-4 ">
                    <div className="relative w-full min-w-[200px] h-12">
                      <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </div>
                      <input
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
                        placeholder=" "
                      />
                      <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
                        Mobile Number
                      </label>
                    </div>
                  </div>
                
                </div>

                <div className="">
                  <div className="lg:w-80 w-60 md:w-96 sm:w-72 ml-3 mt-5 ">
                    <div className="relative w-full min-w-[200px] h-12">
                      <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </div>
                      <input
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
                        placeholder=" "
                      />
                      <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
                        E-mail ID
                      </label>
                    </div>
                  </div>

                  <div
                    className="flex justify-center items-center h-screen
          lg:-mt-44 md:-mt-52 sm:-mt-52 -mt-56"
                  >
                    <div className="bg-[#E79F30]   rounded-md shadow-md max-w-md w-full">
                      <h1 className="text-lg font-semibold mb-4 px-3">
                        Your Message{" "}
                      </h1>
                      <form onSubmit={onSubmit}>
                               <textarea
                                 className="w-full px-3 py-2 -mt-3 border rounded-md focus:outline-none focus:border-blue-500"
                                 rows="5"
                                 placeholder="Enter your message..."
                                 value={message}
                                 onChange={handleMessageChange}
                               ></textarea>
                               <div className="mt-4 flex justify-end"></div>
                             </form>

                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center -mt-60 lg:-mt-44 md:-mt-44 sm:-mt-52">
                <button className="mb-10 py-3 px-28 rounded-sm bg-[#E79F30] text-white font-semibold text-2xl">
                  SUBMIT
                </button>
              </div>
            </div>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;


















































