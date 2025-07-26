/* ------ React Router Dom ------ */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";
import Preg from "../pages/Pregnency_sec";
import Comp from "../pages/Compaign_sec";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Launching Page */}
          <Route path="/" element={<Home/>} />
          <Route path="/pregnency-sec" element={<Preg/>} />
          <Route path="/campaign-sec" element={<Comp/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
