// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";

const Home = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
      <div
        className=" 
           flex justify-evenly lg:flex-row md:flex-row flex-col mt-10 mb-10 bg-white items-center font-Poppins"
      >
        <div>
          <h1 className="lg:text-6xl text-3xl font-medium text-[#E79F30]">
            About Us
          </h1>
        </div>
        <div className="lg:w-[916px] md:w-96 w-80 text-justify sm:w-96 mt-2 font-light text-lg">
          <p>
            ShareTax is a leading accounting firm dedicated to providing
            exceptional tax, audit, and advisory services. Our team of
            experienced professionals is committed to delivering personalized
            solutions to meet the unique financial needs of individuals and
            businesses, ensuring compliance and optimizing financial
            performance.
          </p>
        </div>
      </div>

      <div className="flex bg-white items-center font-Poppins justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={170}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="about-swiper"
          breakpoints={{
            1800: { spaceBetween: 140 },
            1600: { spaceBetween: 120 },
            1400: { spaceBetween: 100 },
            1200: { spaceBetween: 80 },
            1020: { spaceBetween: 60 },
            992: { spaceBetween: 60 },
            768: { spaceBetween: 40 },
            576: { spaceBetween: 40 },
            575: { spaceBetween: 40 },
            320: { spaceBetween: 20 },
            0: { spaceBetween: 10 },
          }}
        >
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlintyIfLy3N8aI0LqUAfRW5_Msft1E4389noG0XOSMg&s"
              alt="Nature 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrkUSIuR2aphIU9yTDLTL6BvdhCfu2yUC8Q5pMCPFxg&s"
              alt="Nature 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m8nRquJdm6egP4mT_cw2YVIhirdBOYyhitFpqBwXBWcjejzwl2FPhRi2qBoRbjTtji4&usqp=CAU"
              alt="Nature 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yUurIQwnkWX2zMopXVDAoB_BnJAG5rS5AAk_PTdcoA&s"
              alt="Nature 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn_uOgKrPNfGYQApoajPLzVenMDvnTYI52MtGSPC-bw&s"
              alt="Nature 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWauK6MII9Ke1pMWQdrv0A3qi59lPJ_mv--PHmzrWpHQ&s"
              alt="Nature 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-evenly lg:flex-row md:flex-row flex-col bg-white items-center font-Poppins">
        <div>
          <h1 className="lg:text-5xl text-3xl font-medium text-[#E79F30]">
            Company Info
          </h1>
        </div>
        <div className="lg:w-[816px] mb-8 text-justify md:w-96 sm:w-96 w-80 mt-2 font-light text-lg">
          <p>
            ShareTax is a premier accounting firm offering expert tax planning,
            compliance, and advisory services. With a focus on personalized
            client solutions, we ensure optimal tax strategies and financial
            efficiency. Our dedicated team of professionals is committed to
            excellence, integrity, and client satisfaction, making ShareTax a
            trusted partner for all your accounting needs.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl  text-center  justify-center  mx-7 lg:mx-64 md:mx-28 sm:mx-12 ">
        <h1 className="lg:text-3xl text-xl font-semibold text-[#E79F30]">
          Services
        </h1>
      </div>

      <div className="max-w-screen-xl lg:mx-auto  ">
        <div
          className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
      
      lg:mx-52  md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-6 mx-6 mb-8"
        >
          {/* LINE PART1 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30]   font-semibold lg:mt-10 md:mt-4 lg:mx-16 md:mx-7">
              Tax Planning:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          {/* PART2 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30]  font-semibold lg:mt-10 md:mt-4 lg:mx-12 md:mx-7">
              Tax Preparation:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-5 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          {/* PART3 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-10 md:mt-4 lg:mx-10 md:mx-7">
              Tax Compliance:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-10 md:mx-7">
              Tax Consultation:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
              Tax Assessment:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
              Tax Advocacy:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>
        </div>
      </div>

      <NavLink to="/service">
        <button
          className="text-[#E79F30] flex  border-2 
  border-gray-100 shadow-2xl bg-white 
  font-semibold py-2.5 px-9 mt- rounded-lg mx-auto 
    "
        >
          View All
        </button>
      </NavLink>

      <Accordion />
    </>
  );
};

export default Home;
