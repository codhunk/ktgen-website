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
import Ourmission from "../pages/Ourmission";
import AboutUs from "../pages/About/AboutUs";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MouseGlow from "../components/MouseGlow/MouseGlow";
import WhatsAppButton from "../components/Home/WhatsappButton";
import TherapyArea from "../pages/Therapy_Area";
import CSRPage from "../pages/Csr";
import OurStoryPage from "../pages/ourStroy";
import Careers from "../pages/Careers";
import DoctorsPharmaciesPage from "../pages/doctors";
import Career from "../pages/Careers";
import ProductsPage from "../pages/product";
import ScrollToTop from "../components/ScrollToTop/scrolltotop";
import TermsAndConditions from "../pages/TermandCondition";
import PrivacyPolicy from "../pages/PrivacyAndPolicy";
import CookieConsent from "../components/CookieConsent";

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
      <ScrollToTop />
      <MouseGlow />
      <div id="smooth-wrapper" >
        <div id="smooth-content" className="mt-16">
          <Routes>
            {/* Launching Page */}
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/doctors-pharmacies" element={<DoctorsPharmaciesPage />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/pregnency-sec" element={<Preg />} /> */}
            <Route path="/campaign-sec" element={<Comp />} />
            <Route path="/therapy" element={<TherapyArea />} />
            <Route path="/csr" element={<CSRPage />} />
            <Route path="/story" element={<OurStoryPage />} />
            <Route path="/ourmission" element={<Ourmission />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
      {/* WhatsApp Button Part */}
      <CookieConsent />
      <WhatsAppButton />
    </>
  );
};

export default App;
