// SplashScreen.tsx
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // slight delay before hiding
          return 100;
        }
        return prev + 1;
      });
    }, 30); // speed of loading

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center gap-4">
      <img
        src="/capsule_splash.jpg"
        alt="Loading..."
        className="w-60 animate-pulse"
      />
      <p className="text-2xl font-semibold text-blue-300">{percent}%</p>
    </div>
  );
};

export default SplashScreen;
