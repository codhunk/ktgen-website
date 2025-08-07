/* ------ React Router Dom ------ */
import { Routes, Route, useLocation } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";
import Careers from "../pages/Careers";
import Gallery from "../pages/Gallery";
import Preg from "../pages/Pregnency_sec";
import Comp from "../pages/Compaign_sec";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MouseGlow from "../components/MouseGlow/MouseGlow";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <MouseGlow />
      <Routes>
        {/* Launching Page */}
        <Route path="/" element={<Home key={location.pathname} />} />
        <Route path="/career" element={<Careers />} />
        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pregnency-sec" element={<Preg />} />
        <Route path="/campaign" element={<Comp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
