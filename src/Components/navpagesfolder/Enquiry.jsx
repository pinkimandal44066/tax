// import React from 'react'
import SideFrom from "../Homefolder/SideFrom";

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border   shadow-2xl rounded-md border-[#E79F30]">
      <button
        className="w-full p-2 text-gray-700 text-left rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold ml-2">{title}</span>
        <span
          className={`ml-auto transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        >
          <MdOutlineKeyboardArrowDown size={32} style={{ color: "E79F30" }} />
        </span>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex justify-center"></div>
        <p className="text-gray-500 text-left mx-4">{content}</p>
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
            <img
              src="https://media.istockphoto.com/id/1125807394/photo/tax.jpg?s=1024x1024&w=is&k=20&c=lQhn_NIyPTOWER_xE6HWYDGMoidyQDI6Eu_TUwrGEHo="
              alt=""
              className="     w-96 -mt-4 "
            />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRheHxlbnwwfHwwfHx8Mg%3D%3D"
              alt=""
              className="     w-96 -mt-4 "
            />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64    shadow-2xl rounded-2xl border ">
            <img
              src="https://media.istockphoto.com/id/1363583016/photo/businessman-holding-graph.jpg?s=1024x1024&w=is&k=20&c=7QEslPYy-erlh4K-D2bnYMthaGjyWYeQYI8vG0aDlLQ="
              alt=""
              className="     w-96 -mt-4 "
            />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
              <img
                src="https://media.istockphoto.com/id/1125807394/photo/tax.webp?b=1&s=170667a&w=0&k=20&c=NUCCxFCse4IdogEU2tuq0jqVQWVh80eKvXP_Zp5U4yI="
                alt=""
                className="    rounded-t-2xl  -mt-4  "
              />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRheHxlbnwwfHwwfHx8Mg%3D%3D"
                alt=""
                className="    rounded-t-2xl  -mt-4  "
              />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img
                src="https://media.istockphoto.com/id/1363583016/photo/businessman-holding-graph.jpg?s=1024x1024&w=is&k=20&c=7QEslPYy-erlh4K-D2bnYMthaGjyWYeQYI8vG0aDlLQ="
                alt=""
                className="    rounded-t-2xl  -mt-4  "
              />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="lg:mt-24 mt-8 ">
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
    </div>
  );
};

export default Enquiry;
