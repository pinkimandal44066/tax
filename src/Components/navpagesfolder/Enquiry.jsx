import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Enquiry = () => {
  const [position, setPosition] = useState("");
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div id="enquiry" className="bg-[#FEF3E2] mt-10">
      <h1 className="lg:text-5xl text-3xl font-semibold text-[#E79F30] text-center p-8 ">
        Reach out to us
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-20 mx-5 mt-10 ">
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
          <div className="flex items-center lg:flex-row md:flex-row sm:flex-row flex-col">
            <h1 className="lg:text-3xl text-xl font-light text-gray-700 mt-9">
              Book Site Visit
            </h1>
            <div className="mt-10 text-3xl text-gray-700 lg:ml-6 md:ml-10 ml-0 ">
              <input type="radio" className="w-10 h-6" />
              <label>Yes</label>
              <input type="radio" className="w-10 h-6 " />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="">
          <div className="lg:w-80 w-60 md:w-96 sm:w-72 ml-3 mt-5 lg:mt-0">
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

          <div className="relative mt-10 mb-4  ">
            <select
              value={position}
              onChange={handlePosition}
              className="appearance-none lg:w-full md:w-full sm:w-full    w-60 bg-transparent border-b-2 border-gray-600 text-xl py-2 pl-2 pr-10 focus:outline-none focus:border-gray-600 rounded-md "
            >
              <option value="">Select the Type</option>
              <option value="option1">A</option>
              <option value="option1">B</option>
              <option value="option1">C</option>
              <option value="option1">D</option>
            </select>
            <IoIosArrowDown className="absolute top-3.5 lg:left-72 left-52 md:left-80  text-xl text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-14 ">
        <button className="mb-10 py-3 px-28 rounded-sm bg-[#E79F30] text-white font-semibold text-2xl">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Enquiry;
