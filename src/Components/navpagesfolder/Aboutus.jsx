import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Aboutus = () => {
  return (
    <div className="bg-whiteh">
      <div className="flex justify-evenly lg:flex-row md:flex-row flex-col mt-10 mb-10 bg-white items-center font-Poppins">
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

      <div
        style={{ fontFamily: "Century Gothic" }}
        className="font-Poppins mt-10"
      >
        <div id="PASSION AT WORK" className="">
          <div className="flex justify-evenly flex-col lg:flex-row md:flex-row items-center lg:mt-28 mt-0">
            <div className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzopYDgRFkbjJWkfMu5DFb7LdJoKA3CrOokdQj2ef5YCITK-DEErPwloYCRDBbfRMb28&usqp=CAU"
                className=""
              />
            </div>
            <div>
              <h1 className="lg:text-5xl text-3xl font-medium lg:text-start text-center lg:mt-0 md:mt-0 mt-6 text-[#E79F30]">
                Passion at work
              </h1>
              <div className="max-h-48 overflow-y-auto mt-8">
                <p className="lg:w-[628px] w-80 text-justify sm:w-96 text-xl mt-5 lg:mt-8 font-light">
                  Passion in accounting fuels precision, diligence, and
                  innovation, transcending numbers into narratives of success.
                  It's the relentless pursuit of accuracy, ensuring each digit
                  aligns with integrity and transparency. Beyond balance sheets,
                  passion ignites curiosity, prompting accountants to unravel
                  financial puzzles and offer strategic insights. It's the drive
                  to not just meet standards but exceed them, turning mundane
                  tasks into opportunities for excellence. Passion in accounting
                  fosters collaboration, as professionals unite to tackle
                  challenges and achieve common goals. It's the commitment to
                  lifelong learning, adapting to evolving regulations and
                  technologies with enthusiasm. This fervor for the craft
                  transforms routine tasks into fulfilling endeavors, where each
                  calculation tells a story of dedication and expertise.
                  Ultimately, passion in accounting isn't just about
                  numbers—it's about making a meaningful impact, empowering
                  businesses to thrive and flourish in an ever-changing
                  financial landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second part */}
        <div>
          <div className="flex justify-evenly flex-col lg:flex-row md:flex-row items-center lg:mt-28 mt-16">
            <div>
              <h1 className="lg:text-5xl text-3xl font-medium lg:text-start text-center text-[#E79F30]">
                The ShareTax
              </h1>
              <p className="lg:w-[628px] text-justify w-80 sm:w-96 text-xl mt-5 font-light">
                Taxation, a cornerstone of fiscal policy, funds public services,
                infrastructure, and social welfare. It serves as a mechanism for
                wealth redistribution, economic regulation, and incentivizing
                behavior. Understanding tax codes, deductions, and credits is
                crucial for individuals and businesses to optimize financial
                planning and compliance. Taxation impacts investment decisions,
                consumer behavior, and overall economic activity, influencing
                market dynamics and wealth distribution. Effective tax
                management involves strategic planning, risk assessment, and
                compliance to minimize liabilities and maximize benefits. Tax
                policies evolve in response to socio-economic trends,
                technological advancements, and political priorities, shaping
                the fiscal landscape and influencing economic growth and
                societal well-being.
              </p>
            </div>

            <div className="lg:mt-0 md:mt-0 mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoiOPr8zNCNG_-n5XdMron9rhDbolkb1KnKesk4frEengxFNjjWelcGFnkJFgYUhqznU&usqp=CAU"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
