/* ------ React Router Dom ------ */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";

import Gallery from "../pages/Gallery";
import Preg from "../pages/Pregnency_sec";
import Comp from "../pages/Compaign_sec";
import Navbar from "../components/Navbar/Navbar";
import CareerPage from "../pages/Career";
import Footer from "../components/Footer/Footer";
import RippleEffect from "../pages/ripple";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* Launching Page */}
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerPage />} />
          {/* Gallery Page */}
          <Route path="/gallery" element={<RippleEffect />} />
          <Route path="/pregnency-sec" element={<Preg />} />
          <Route path="/campaign" element={<Comp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
