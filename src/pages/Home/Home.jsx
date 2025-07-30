import React from "react";
import video from "./assets/218955_medium.mp4";

const Home = () => {
  return (
    <div className="w-full h-dvh overflow-hidden">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover block"
      />
    </div>
  );
};

export default Home;
