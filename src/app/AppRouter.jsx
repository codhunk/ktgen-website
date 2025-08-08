/* ------ React Router Dom ------ */
import { Routes, Route } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";
import Careers from "../pages/Careers";
import Gallery from "../pages/Gallery";
import Preg from "../pages/Pregnency_sec";
import Comp from "../pages/Compaign_sec";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useGSAP } from '@gsap/react'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MouseGlow from "../components/MouseGlow/MouseGlow";



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
        <MouseGlow/>

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              {/* Launching Page */}
              <Route path="/" element={<Home />} />
              <Route path="/career" element={<Careers />} />
              {/* Gallery Page */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pregnency-sec" element={<Preg />} />
              <Route path="/campaign" element={<Comp />} />
            </Routes>
          </div>
        </div>
        <Footer />
    </>
  );
};

export default App;
