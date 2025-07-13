/* ------ React Router Dom ------ */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ------ Pages ------ */
// Home
import Home from "../pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Launching Page */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
