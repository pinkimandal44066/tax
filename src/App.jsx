import Homepage from "./Components/Homefolder/Homepage";
import Aboutus from "./Components/navpagesfolder/Aboutus";
import Contactus from "./Components/navpagesfolder/Contactus";
import Enquiry from "./Components/navpagesfolder/Enquiry";
import LayOut from "./Components/navpagesfolder/LayOut";
import Services from "./Components/navpagesfolder/Services";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/service" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
