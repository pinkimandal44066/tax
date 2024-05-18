import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "././../../Components/Navbar";
import Footer from "../Homefolder/Footer";
const LayOut = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading === true ? (
        <div className=" w-full h-full absolute  flex justify-center items-center">
          <div className="loader  "></div>
        </div>
      ) : (
        <>
          <Navbar />

          <ScrollToTop />
          <Outlet />

          <Footer />
        </>
      )}
    </div>
  );
};

export default LayOut;
