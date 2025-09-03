import { useState } from "react";

// App Router
import { BrowserRouter } from "react-router-dom";

/* ---------- Context Provider ---------- */
import ToastContextProvider from "./contexts/ToastContext/ToastContextProvider";

/* ---------- Components ---------- */
import AppRouter from "./app/AppRouter";
// import SplashScreen from "./components/SplashScreen/SplashScreen";

const App = () => {
  // const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* {showSplash ? ( */}
        {/* <SplashScreen onFinish={() => setShowSplash(false)} /> */}
      {/* ) : ( */}
        {/* <BrowserRouter> */}
          {/* ToastContextProvider */}
          {/* <ToastContextProvider> */}
            {/* AppRouter */}
            {/* <AppRouter /> */}
          {/* </ToastContextProvider> */}
        {/* </BrowserRouter> */}
      {/* )} */}

    <BrowserRouter>
          {/* ToastContextProvider */}
          <ToastContextProvider>
            {/* AppRouter */}
            <AppRouter />
          </ToastContextProvider>
        </BrowserRouter>
    </>
  );
};

export default App;
