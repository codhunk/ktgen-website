// App Router
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/AppRouter";

/* ---------- Context Provider ---------- */
import ToastContextProvider from "./contexts/ToastContext/ToastContextProvider";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <BrowserRouter>
          {/* ToastContextProvider */}
          <ToastContextProvider>
            {/* AppRouter */}
            <AppRouter />
          </ToastContextProvider>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
