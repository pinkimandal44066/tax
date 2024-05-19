// import React, { useState } from "react";

// const Enquiry = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const openModal = () => setIsOpen(true);
//   const closeModal = () => {
//     setIsOpen(false);
//     setFormSubmitted(false);
//   };

//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   const [message, setMessage] = useState("");

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Message submitted: ${message}`);
//     setMessage("");
//   };
//   return (
//     <div style={{ fontFamily: "Century Gothic" }} className="text-black">

// <button
//         onClick={openModal}
//         className="top-80 right-0 h-36 w-10 z-[999] fixed transform -translate-x-1/2 -translate-y-1/2 bg-[#E79F30] md:text-xl lg:text-2xl text-xl rounded-md shadow-md text-white"
//         type="button"
//         style={{
//           writingMode: "vertical-rl",
//           textOrientation: "mixed",
//           transform: "rotate(180deg)",
//         }}
//       >
//         ENQUIRE
//       </button>
//       {/* {isOpen && ( */}
//       <div className="fixed z-[999] inset-0 overflow-y-auto overflow-x-hidden flex justify-center items-center">
//         <div className="relative p-4 w-full max-w-2xl max-h-full">
//           <form onSubmit={onSubmit}>
//             <div className="relative bg-[#FEF3E2] rounded-lg shadow">
//               <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-[#E79F30]">
//                 <h3 className="--text-center text-2xl block w-[100%] text-center font-semibold text-white">
//                   Add Your Information
//                 </h3>

//                 <button
//                   onClick={closeModal}
//                   type="button"
//                   className="text-white hover:bg-gray-200 hover:text-gray-900
//                      rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center 
//                      items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="p-4 md:p-5 space-y-4">
//                 <div className="bg-[#FEF3E2] ">
//                   <h1 className="lg:text-5xl text-3xl font-semibold text-[#E79F30] text-center mt-2 ">
//                     Reach out to us
//                   </h1>
//                   <div className="flex flex-col justify-evenly items-center lg:mx-40 mx-5 mt-10 ">
//                     <div>
//                       <div className="lg:w-80 w-60 md:w-96 sm:w-72">
//                         <div className="relative w-full min-w-[200px] h-12">
//                           <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                             <i className="fas fa-heart" aria-hidden="true"></i>
//                           </div>
//                           <input
//                             className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                             placeholder=" "
//                           />
//                           <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
//                             Full Name
//                           </label>
//                         </div>
//                       </div>
//                       <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-10 mb-4 ">
//                         <div className="relative w-full min-w-[200px] h-12">
//                           <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                             <i className="fas fa-heart" aria-hidden="true"></i>
//                           </div>
//                           <input
//                             className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                             placeholder=" "
//                           />
//                           <label
//                             className="flex  w-full h-full select-none 
//                             pointer-events-none absolute left-0 font-normal
//                              !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500
//                               leading-tight peer-focus:leading-tight peer-disabled:text-transparent
//                                peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all 
//                                -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px]
//                                 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5
//                                  before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent
//                                   before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
//                                   peer-focus:before:border-l-2 before:pointer-events-none before:transition-all
//                                    peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black"
//                           >
//                             Mobile Number
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="">
//                       <div className="lg:w-80 w-60 md:w-96 sm:w-72 ml-3 mt-5 ">
//                         <div className="relative w-full min-w-[200px] h-12">
//                           <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                             <i className="fas fa-heart" aria-hidden="true"></i>
//                           </div>
//                           <input
//                             className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                             placeholder=" "
//                           />
//                           <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
//                             E-mail ID
//                           </label>
//                         </div>
//                       </div>

//                       <div
//                         className="flex justify-center items-center h-screen
//          lg:-mt-40 md:-mt-52 sm:-mt-52 -mt-56 xl:-mt-40"
//                       >
//                         <div className="bg-[#E79F30]  rounded-md shadow-md max-w-md w-full">
//                           <h1 className="text-lg font-semibold mb-4 px-3">
//                             Your Message{" "}
//                           </h1>
//                           <form onSubmit={handleSubmit}>
//                             <textarea
//                               className="w-full px-3 py-2 -mt-3 border rounded-md focus:outline-none focus:border-blue-500"
//                               rows="5"
//                               placeholder="Enter your message..."
//                               value={message}
//                               onChange={handleMessageChange}
//                             ></textarea>
//                             <div className="mt-4 flex justify-end"></div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-center -mt-60 lg:-mt-44  md:-mt-52 sm:-mt-52 xl:-mt-44">
//                     <button className="mb-10 py-3 px-28 rounded-sm bg-[#E79F30] text-white font-semibold text-2xl">
//                       SUBMIT
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <span className="block text-center mt-4">{result}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* // )} */}
//     </div>
//   );
// };

// export default Enquiry;





























// import React from 'react'
import SideFrom from '../Homefolder/SideFrom'








import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";





const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border   shadow-2xl rounded-md border-[#E79F30]">
      <button
        className="w-full p-2 text-[#E79F30] text-left rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold ml-2">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}><MdOutlineKeyboardArrowDown size={32} style={{ color: 'E79F30' }} /></span>
      </button>
      <div className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className='flex justify-center'>
        
        </div>
        <p className="text-[#E79F30] text-left mx-4">{content}</p>
      </div>
    </div>
  );
};



const Enquiry = () => {
  return (
    <div>
      <SideFrom />
 


      <div className=" max-w-screen-xl mx-auto mt-11 ">
        <div className="hidden justify-center items-center lg:flex md:flex lg:flex-row md:flex-row lg:gap-14 gap-10">
          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src="https://media.istockphoto.com/id/1125807394/photo/tax.jpg?s=1024x1024&w=is&k=20&c=lQhn_NIyPTOWER_xE6HWYDGMoidyQDI6Eu_TUwrGEHo="
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRheHxlbnwwfHwwfHx8Mg%3D%3D"
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64    shadow-2xl rounded-2xl border ">
            <img src="https://media.istockphoto.com/id/1363583016/photo/businessman-holding-graph.jpg?s=1024x1024&w=is&k=20&c=7QEslPYy-erlh4K-D2bnYMthaGjyWYeQYI8vG0aDlLQ="
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              
            </p>
          </div>
        </div>
      </div>




                 {/* MObile Screen */}

      <div className="flex mt-4 lg:hidden md:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          navigation={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://media.istockphoto.com/id/1125807394/photo/tax.webp?b=1&s=170667a&w=0&k=20&c=NUCCxFCse4IdogEU2tuq0jqVQWVh80eKvXP_Zp5U4yI=" 
              alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRheHxlbnwwfHwwfHx8Mg%3D%3D"
               alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://media.istockphoto.com/id/1363583016/photo/businessman-holding-graph.jpg?s=1024x1024&w=is&k=20&c=7QEslPYy-erlh4K-D2bnYMthaGjyWYeQYI8vG0aDlLQ="
              alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className='mt-32 '>
  
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
        <AccordionItem
          title="Compliance with Tax Laws"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Review Income Sources"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Maintain Detailed Records"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Verify Form Accuracy"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Utilize Tax Credits"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Stay Informed on Tax Laws"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Consult Tax Professionals"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
      </div>
    </div>















{/* 
    <div className=" max-w-screen-xl mx-auto mt-11 ">
        <div className="hidden justify-center items-center lg:flex md:flex lg:flex-row md:flex-row lg:gap-14 gap-10">
          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src="https://media.istockphoto.com/id/1125807394/photo/tax.jpg?s=1024x1024&w=is&k=20&c=lQhn_NIyPTOWER_xE6HWYDGMoidyQDI6Eu_TUwrGEHo="
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              At Guru, experts from across disciplines and specialities come
              together to comprehensively assess patients and offer the best
              possible treatment plan using the most advanced medical
              technology, techniques and protocols
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src="https://media.istockphoto.com/id/1125807394/photo/tax.jpg?s=1024x1024&w=is&k=20&c=lQhn_NIyPTOWER_xE6HWYDGMoidyQDI6Eu_TUwrGEHo="
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Our doctors — among the pioneers of bilateral procedure and
              minimally invasive total knee replacement surgery in India — have
              designed and developed patented instruments for MIS total knee
              replacement surgeries, now used by surgeons worldwide
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64    shadow-2xl rounded-2xl border ">
            <img src="https://media.istockphoto.com/id/1125807394/photo/tax.jpg?s=1024x1024&w=is&k=20&c=lQhn_NIyPTOWER_xE6HWYDGMoidyQDI6Eu_TUwrGEHo="
             alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Dedicated experts for each joint of the body are backed by
              specially trained nurses and occupational therapists work together
              to ensure complete patient well-being pre and post surgery for
              optimal outcome
            </p>
          </div>
        </div>
      </div> */}
















      {/* <div className="flex mt-4 lg:hidden md:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          navigation={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://media.istockphoto.com/id/1125807394/photo/tax.webp?b=1&s=170667a&w=0&k=20&c=NUCCxFCse4IdogEU2tuq0jqVQWVh80eKvXP_Zp5U4yI=" 
              alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://media.istockphoto.com/id/1125807394/photo/tax.webp?b=1&s=170667a&w=0&k=20&c=NUCCxFCse4IdogEU2tuq0jqVQWVh80eKvXP_Zp5U4yI="
               alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src="https://media.istockphoto.com/id/1125807394/photo/tax.webp?b=1&s=170667a&w=0&k=20&c=NUCCxFCse4IdogEU2tuq0jqVQWVh80eKvXP_Zp5U4yI=" 
              alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}

          </div>
  )
}

export default Enquiry


















