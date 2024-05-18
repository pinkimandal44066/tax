import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { Events, scrollSpy } from "react-scroll";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSetActive = (to, element) => {
      setActiveSection(to);
    };

    Events.scrollEvent.register("begin", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    scrollSpy.update();
  });

  const menuItems = [
    // { id: 5, title: "Home", path: "/" },
    { id: 1, title: "About Us", path: "/about-us" },
    { id: 2, title: "Service", path: "/service" },
    { id: 3, title: "Enquiry", path: "/enquiry" },
    { id: 4, title: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path) => {
    return activeSection === path;
  };

  return (
    <div
      style={{ fontFamily: "Century Gothic" }}
      className="flex flex-col  font-Poppins w-full overflow-x-hidden"
    >
      <header
        className={`z-50 lg:text-2xl text-lg w-full bg-white font-medium py-6 px-10 capitalize ${
          isScrolled ? "fixed top-0" : ""
        }`}
      >
        <Swiper
          slidesPerView={menuItems.length <= 2 ? "auto" : 2}
          spaceBetween={0}
          centeredSlides={true}
          grabCursor={true}
          className="w-full"
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 8,
            },
          }}
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <NavLink
                to={item.path}
                className={`cursor-pointer block text-center px-4 py-2  mr-4 hover:text-orange-600 ${
                  isActive(item.path) ? "text-gray-700" : ""
                }`}
              >
                {item.title}
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </div>
  );
}

export default App;
