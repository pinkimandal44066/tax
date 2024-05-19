import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink, Link, useLocation } from "react-router-dom";
// import taxlogoo from "../../public/taxlogoo.jpg";
import logo from "../../public/logo.jpeg"
const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <div style={{ fontFamily: "Century Gothic" }} className="w-full">
      <div style={{ position: "relative" }}>
        <NavLink to="/">
          <img
            src={logo}
            alt=""
            className="w-16 rounded-xl"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              cursor: "pointer",
              zIndex: 1,
            }}
          />
        </NavLink>
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          style={{ position: "relative" }}
        >
          <source
            // src="https://media.istockphoto.com/id/1849196332/video/close-up-hand-of-woman-using-calculator-for-calculate-checking-bills-taxes-bank-account.mp4?s=mp4-640x640-is&k=20&c=kjvK7YLFmJtCoPBfcvNyix9hqHlkWEOORTR26OlJZiQ="
            type="video/mp4"
          />
        </video>
      </div>

      {/* navbar */}
      <nav>
        <div className="container mx-auto flex justify-between items-center cursor-pointer">
          <div className="left flex items-center">
            <div className="absolute lg:top-5 top-0 right-0 md:top-5 md:right-20 lg:right-32 p-2 bg-[#E79F30]  text-white rounded-full">
              <FiMenu
                onClick={() => setMenu(true)}
                className="lg:text-4xl md:text-4xl text-2xl cursor-pointer"
              />
            </div>
          </div>

          {isSideMenuOpen && (
            <div className="fixed h-screen w-full z-[999] font-Poppins  cursor-pointer  bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
              <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-0 mb-8 text-5xl text-white rounded-full p-2 cursor-pointer bg-[#E79F30] absolute  md:top-5 md:right-20  right-0 top-0  lg:top-5 lg:right-32"
                />

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  HOME
                </NavLink>

                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  ABOUT US
                </NavLink>

                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Services
                </NavLink>

                <NavLink
                  to="/enquiry"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Enquiry
                </NavLink>

                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Contact US
                </NavLink>

                {/* icons  */}

                <div className="flex justify-center items-center lg:text-4xl text-3xl gap-10">
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
              </section>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
