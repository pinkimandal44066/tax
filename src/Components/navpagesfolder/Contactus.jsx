import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Contactus = () => {
  const [date, setDate] = useState(null);

  const [position, setPosition] = useState("");
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div className="font-Poppins mt-10">
        {/* location part */}

        <div>
          <div
            id="contactUs"
            className="flex flex-col lg:flex-row font-Poppins justify-evenly text-gray-700 bg-[#FEF3E2] items-center "
          >
            <div className="lg:w-1/2 lg:pr-10 ">
              <h1 className="lg:text-6xl md:text-4xl text-center mt-5 lg:text-start text-3xl font-medium text-[#E79F30]">
                Contact Us
              </h1>
              <div className="lg:mt-12 mt-8 text-center  lg:text-start">
                <h2 className="lg:text-4xl md:text-2xl  text-xl font-medium">
                  Contact Us
                </h2>
                <p className="lg:text-2xl text-sm md:text-xl mt-2 font-medium">
                  ShareTax.com
                </p>
                <div className="lg:mt-10 mt-8 text-gray-700 font- lg:text-2xl sm:text-xl md:text-2xl text-sm">
                  <h3>Second floor, City Centre, 0413,</h3>
                  <h3> Kasturba Nagar,Dhanbad,</h3>
                  <h3> Jharkhand 826001</h3>
                </div>

                <div className="flex mt-7 lg:text-5xl text-2xl text-[#E79F30] cursor-pointer gap-8 justify-center lg:justify-start">
                  <Link
                    to="https://www.facebook.com/YourFacebookPage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>

                  <Link
                    to="https://www.instagram.com/YourInstagramUsername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </Link>

                  <Link
                    to="https://www.youtube.com/channel/YourChannelID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoYoutube />
                  </Link>
                </div>

                <div className="mt-10">
                  <NavLink
                    to="/enquiry"
                    className="bg-[#E79F30] text-white lg:text-xl text-sm mb-20 font-medium rounded lg:p-4 cursor-pointer md:p-4 p-2"
                  >
                    REQUEST CALL BACK
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="">
              <img
                src="https://ttlwebassets.tatatechnologies.com/app/uploads/2022/11/28154215/Contact-us-scaled.jpg"
                className="sm:w-80 md:w-96 lg:w-96 w-60 mt-10 mb-5 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-20 mx-5 ">
            <div className="">
              <h1 className="lg:text-5xl text-3xl font-semibold text-[#E79F30] lg:mt-0 md:mt-10 mt-8">
                Reach out to us
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-700 mt-7">
                Contact Us
              </h1>
              <h1 className="lg:text-2xl text-lg font-medium text-gray-700">
                Share Tax.com
              </h1>
              <p className="lg:text-2xl text-justify text-lg font-light lg:w-[420px] w-full text-gray-800 mt-4">
                Second floor, City Centre, 0413, Kasturba Nagar,Dhanbad,
                Jharkhand 826001
              </p>

              <div className="text-3xl lg:text-5xl mt-4 text-[#E79F30] flex gap-10">
                <Link
                  to="https://www.facebook.com/YourFacebookPage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>

                <Link
                  to="https://www.instagram.com/YourInstagramUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </Link>

                <Link
                  to="https://www.youtube.com/channel/YourChannelID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube />
                </Link>
              </div>

              <div className="text-3xl lg:text-5xl mt-4 text-[#E79F30] flex  gap-10">
                <link
                  href="https://www.facebook.com/YourFacebookPage"
                  rel="noopener noreferrer"
                />

                <link
                  href="https://www.instagram.com/YourInstagramUsername"
                  rel="noopener noreferrer"
                />

                <link
                  href="https://www.youtube.com/channel/YourChannelID"
                  rel="noopener noreferrer"
                />
              </div>
            </div>

            <div className="mt-20 ">
              <div className="border-2 border-[#E79F30] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4378796926185!2d86.4313797740286!3d23.803023386756603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd41386c516d%3A0xbcd7d938eaed2bdd!2sSystAIO%20Technologies%20%2C%20Website%20Development%20Company%20in%20Dhanbad!5e0!3m2!1sen!2sin!4v1715950634051!5m2!1sen!2sin"
                  className="lg:w-[615px] lg:h-[477px] md:w-[515px] md:h-[277px] w-full h-full rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* talk to us */}
        <div>
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-20 mx-5 lg:mt-20 mt-10 ">
            <div className="border-2 border-[#E79F30] overflow-hidden rounded-lg">
              <img
                className="lg:w-[615px] lg:h-[477px] md:w-[515px] md:h-[277px] w-auto h-auto rounded"
                src="https://st4.depositphotos.com/2903611/29109/i/450/depositphotos_291091084-stock-photo-businessman-showing-contact-icons-virtual.jpgdata:image/jpeg;base64,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"
              />
            </div>
            <div>
              <h1 className="lg:text-5xl text-3xl lg:mt-0 mt-5 font-semibold text-[#E79F30] ">
                Reach out to us
              </h1>
              <h1 className="lg:text-3xl text-2xl font-semibold text-gray-700 mt-7">
                Project Enquiry
              </h1>

              <div className="flex mt-5">
                <BiPhoneCall className="lg:text-3xl mt-1 text-2xl  text-gray-700" />
                <Link
                  to="tel:+918918304906"
                  className="lg:text-2xl text-xl font-light ml-5"
                >
                  +91000000000
                </Link>
              </div>

              <h1 className="lg:text-3xl text-2xl font-semibold text-gray-700 mt-10">
                Media
              </h1>

              <div className="flex mt-5">
                <CiMail className="lg:text-3xl text-2xl mt-1" />
                <Link
                  to="mailto:abccdefpvtltd@gmail.com"
                  className="lg:text-2xl text-xl font-light ml-5"
                >
                  abc@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
