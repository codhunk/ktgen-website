import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from '../hooks/UseDarkMode/useDarkMode';

const slides = [
  {
    id: 1,
    title: "Beautiful Flowers",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat ullamcorper diam et amet volutpat sed.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Greek Islands",
    desc: "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Rivers",
    desc: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Carousel() {
    const { isDark, toggleDarkMode } = useDarkMode();
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-screen h-[70vh]  dark:bg-gradient-to-b from-[#0a0a0a] to-[#111] flex items-center justify-center overflow-hidden relative">
      {/* Carousel wrapper */}
      <div className="relative w-full max-w-7xl flex items-center justify-center">
        {slides.map((slide, i) => {
          // calculate relative position (-1 = left, 0 = center, 1 = right)
          let position = (i - index + slides.length) % slides.length;
          if (position === slides.length - 1) position = -1; // left slide

          const isCenter = position === 0;
          const isLeft = position === -1;
          const isRight = position === 1;

          return (
            <motion.div
              key={slide.id}
              className="absolute flex justify-center items-center"
              animate={{
                scale: isCenter ? 1 : 0.8,
                opacity: isCenter ? 1 : 0.6,
                x: isCenter ? "0%" : isLeft ? "-60%" : "60%",
                zIndex: isCenter ? 20 : 10,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-[80vw] md:w-[700px] h-[50vh] md:h-[400px] rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <h3 className="text-white text-lg font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{slide.desc}</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-400" : "bg-gray-600"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute z-20 left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black"
      >
        ❯
      </button>
    </div>
  );
}
