"use client";

import React, { useState } from "react";

import { useDarkMode } from "../hooks/UseDarkMode/useDarkMode";
import { useTranslation } from "react-i18next";
import Carousal from "../components/Carousal.jsx";
import YouTube from "react-youtube";
import pregnancy from "./assets/leaders/pregnancy.jpg"

// Video data
const videoData = [
  { label: "Week 1", url: "https://www.youtube.com/watch?v=iCXfyPSt-Ro" },
  { label: "Week 2", url: "https://www.youtube.com/watch?v=S96T7YhtcNY" },
  { label: "Week 3", url: "https://www.youtube.com/watch?v=swRzGWXkaKc" },
  { label: "Week 4", url: "https://www.youtube.com/watch?v=nEo06vTGgWE" },
  { label: "2 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "3 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "4 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "5 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "6 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "7 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "8 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
  { label: "9 Months", url: "https://www.youtube.com/watch?v=izOa3-AX8zQ" },
];

// Helper to extract YouTube ID
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Pregnency_sec = () => {
  const { isDark } = useDarkMode();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnded = () => {
    if (currentIndex < videoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="pt-[88px] dark:bg-[#0a0a0a] dark:text-white">
   
      {/* <Carousal /> */}

      {/* Hero Section */}
{/* Hero Section */}
<div className="flex justify-center mt-12">
  <section
    className="relative w-[90%] h-[350px] md:h-[400px] bg-center bg-cover flex items-center justify-center rounded-xl overflow-hidden"
    style={{ backgroundImage: `url(${pregnancy})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>
    <div className="z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("pregnency_j")}</h1>
      <p className="text-lg md:text-xl font-medium">{t("preg_explore")}</p>
    </div>
  </section>
</div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* About Section */}
        <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md shadow-gray-300 dark:shadow-none">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{t("preg_about")}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{t("preg_h")}</p>
        </section>

        {/* Video Playlist Section */}
        <section className="bg-gray-100 dark:bg-[#1d1d1d] p-6 sm:p-8 rounded-xl shadow-md shadow-gray-300 dark:shadow-none">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{t("preg_watch")}</h3>

          {/* Playlist Buttons */}
          <div className="flex overflow-x-auto gap-3 mb-6 pb-2">
            {videoData.map((video, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  currentIndex === idx
                    ? "bg-blue-700 text-white border-blue-700 shadow-lg"
                    : "bg-white dark:bg-[#DDDAD0] dark:text-[#1d1d1d] text-gray-700 hover:bg-gray-200 dark:hover:bg-[#7A7A73]"
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="overflow-hidden rounded-lg shadow-lg relative pt-[56.25%]">
            <YouTube
              videoId={getYouTubeId(videoData[currentIndex].url)}
              className="absolute top-0 left-0 w-full h-full rounded-md"
              opts={{

                width: "100%",
                height: "100%",
                playerVars: { autoplay: 1, muted: 1 },
              }}
              onEnd={handleVideoEnded}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pregnency_sec;



// import React from 'react'
// import Carousel from '../components/Carousal'


// function Pregnency_sec() {

//   const { isDark, toggleDarkMode } = useDarkMode();
//   const { t } = useTranslation();

//   return (

//     <main className=' pt-[88px] dark:bg-gradient-to-t from-[#0a0a0a] to-[#111] dark:text-white'>
//     <div className="pt-10 pb-3 px-3 sm:px-6 max-w-5xl mx-auto space-y-10">
//       {/* Banner */}
//       <div style={{backgroundImage:"url('/images/baby.jpg')"}} className="bg-cover shadow-lg shadow-gray-500 dark:shadow-none text-gray-800 dark:text-white bg-center bg-gray-200 p-8 md:p-20 rounded-xl text-center">
//         <h1 className="text-4xl font-bold">{t("pregnency_j")}</h1>
//         <p className="mt-2 text-lg font-semibold">{t("preg_explore")}</p>
//       </div>

//       {/* About */}
//       <div className="bg-white shadow-lg dark:bg-gray-800 dark:shadow-none dark:bg-opacity-[50%] shadow-gray-500 dark:text-white text-gray-700  p-6 rounded-xl">
//         <h2 className="text-2xl font-semibold mb-3">{t("preg_about")}</h2>
//          <p className="font-semibold">{t("preg_h")}</p>
//       </div>

      
//     </div>
//       <Carousel/>
//     </main>
    
//   )
// }

// export default Pregnency_sec
