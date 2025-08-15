import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const TestimonialModal = ({ videos, startIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // Auto play active video, pause others
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getSlideIndex = (offset) => {
    return (activeIndex + offset + videos.length) % videos.length;
  };

  // Animation variants
  const centerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60, // softer spring
        damping: 15, // less bounce
        duration: 0.7, // smoother overall
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.92,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      },
    }),
  };

  const sideVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 10, // slight vertical offset for smoothness
    },
    visible: {
      opacity: 0.5,
      scale: 0.9,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const modalContent = (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      style={{ zIndex: 99999999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-[95%] 2xl:max-w-7xl h-[90%] 2xl:max-h-[600px] flex flex-col items-center gap-5 overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
          onClick={onClose}
        >
          <IoMdClose size={20} />
        </button>

        {/* Carousel container */}
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
          >
            <IoIosArrowBack size={20} />
          </button>

          {/* Slides */}
          <div className="flex items-center justify-center w-full h-full transition-all duration-500">
            {/* Left small video */}
            <motion.div
              className="hidden lg:block w-[20%] h-[60%] rounded-lg shadow-lg overflow-hidden"
              variants={sideVariants}
              initial="hidden"
              animate="visible"
            >
              <video
                ref={(el) => (videoRefs.current[getSlideIndex(-1)] = el)}
                src={videos[getSlideIndex(-1)].src}
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center large video + info */}
            <div className="flex w-[85%] lg:w-[45%] h-2/3 md:h-full mx-4 rounded-lg overflow-hidden shadow-lg bg-white/5">
              <AnimatePresence custom={direction}>
                <motion.div
                  key={activeIndex}
                  className="flex w-full h-full cursor-pointer"
                  variants={centerVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <video
                    ref={(el) => (videoRefs.current[activeIndex] = el)}
                    src={videos[activeIndex].src}
                    autoPlay
                    className="w-1/2 h-full object-cover"
                  />
                  <div className="w-1/2 h-full p-5 flex flex-col items-center justify-start bg-white text-black overflow-auto">
                    {/* Thumbnail */}
                    <img
                      src={videos[activeIndex].thumbnail}
                      alt={videos[activeIndex].title}
                      className="w-full h-48 object-cover rounded shadow-md mb-4"
                      draggable="false"
                    />

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 text-center self-start">
                      {videos[activeIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-700 text-start">
                      {videos[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right small video */}
            <motion.div
              className="hidden lg:block w-[20%] h-[60%] rounded-lg shadow-lg overflow-hidden"
              variants={sideVariants}
              initial="hidden"
              animate="visible"
            >
              <video
                ref={(el) => (videoRefs.current[getSlideIndex(1)] = el)}
                src={videos[getSlideIndex(1)].src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default TestimonialModal;
