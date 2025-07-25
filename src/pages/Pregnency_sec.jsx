import React, { useState } from 'react';
import { useDarkMode } from '../hooks/UseDarkMode/useDarkMode';
import { useTranslation } from "react-i18next";


const videoData = [
  { label: 'Week 1', url: '/videos/week1.mp4' },
  { label: 'Week 2', url: '/videos/week2.mp4' },
  { label: 'Week 3', url: '/videos/week3.mp4' },
  { label: 'Week 4', url: '/videos/week4.mp4' },
  { label: '2 Months', url: '/videos/2months.mp4' },
  { label: '3 Months', url: '/videos/3months.mp4' },
  { label: '4 Months', url: '/videos/4months.mp4' },
  { label: '5 Months', url: '/videos/5months.mp4' },
  { label: '6 Months', url: '/videos/6months.mp4' },
  { label: '7 Months', url: '/videos/7months.mp4' },
  { label: '8 Months', url: '/videos/8months.mp4' },
  { label: '9 Months', url: '/videos/9months.mp4' },
];

const Pregnency_sec = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnded = () => {
    if (currentIndex < videoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className='dark:bg-[#57564F] dark:text-white'>
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Banner */}
      <div style={{backgroundImage:"url('/images/baby.jpg')"}} className="bg-cover text-gray-800 dark:text-[#57564F] bg-center bg-gray-200 p-8 md:p-20 rounded-xl text-center">
        <h1 className="text-4xl font-bold">{t("pregnency_j")}</h1>
        <p className="mt-2 text-lg font-semibold">{t("preg_explore")}</p>
      </div>

      {/* About */}
      <div className="bg-white dark:bg-[#7A7A73] dark:text-white text-gray-700  p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-3">{t("preg_about")}</h2>
        <p className="font-semibold">{t("preg_h")}</p>
      </div>

      {/* Video Playlist */}
      <div className="bg-gray-100 dark:bg-[#7A7A73] p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white ">{t("preg_watch")}</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {videoData.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1 rounded-full text-sm border ${
                currentIndex === idx ? 'bg-gray-700 dark:bg-[#57564F] text-white':'bg-white dark:bg-[#DDDAD0] dark:hover:bg-[#7A7A73] dark:hover:text-white hover:bg-gray-100 text-[#57564F]'}`}
            >
              {video.label}
            </button>
          ))}
        </div>

        <video
          key={videoData[currentIndex].url}
          controls
          autoPlay
          onEnded={handleVideoEnded}
          className="w-full rounded-lg max-h-[500px]"
        >
          <source src={videoData[currentIndex].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </main>
  );
};

export default Pregnency_sec;

