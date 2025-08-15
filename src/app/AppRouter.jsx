/* ------ React Router Dom ------ */
import { Routes, Route } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery";
import Preg from "../pages/Pregnency_sec";
import Comp from "../pages/Compaign_sec";
import Navbar from "../components/Navbar/Navbar";
import CareerPage from "../pages/Career";
import Footer from "../components/Footer/Footer";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MouseGlow from "../components/MouseGlow/MouseGlow";
import WhatsAppButton from "../components/Home/WhatsappButton";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <>
      <Navbar />

      <MouseGlow />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            {/* Launching Page */}
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pregnency-sec" element={<Preg />} />
            <Route path="/campaign" element={<Comp />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {/* WhatsApp Button Part */}
      <WhatsAppButton />
    </>
  );
};

export default App;
