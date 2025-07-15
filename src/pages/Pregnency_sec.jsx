import React, { useState } from 'react';
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
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnded = () => {
    if (currentIndex < videoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Banner */}
      <div style={{backgroundImage:"url('/baby.jpg')", backgroundSize: 'cover'}} className="bg-cover bg-center bg-gray-200 p-8 md:p-20 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-gray-700">{t("pregnency_j")}</h1>
        <p className="mt-2 text-gray-700 text-lg">{t("preg_explore")}</p>
      </div>

      {/* About */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-3">{t("preg_about")}</h2>
        <p className="text-gray-700">{t("preg_h")}</p>
      </div>

      {/* Video Playlist */}
      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">{t("preg_watch")}</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {videoData.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                currentIndex === idx
                  ? 'bg-gray-600 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
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
  );
};

export default Pregnency_sec;

