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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pregnency-sec" element={<Preg />} />
          <Route path="/campaign-sec" element={<Comp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
