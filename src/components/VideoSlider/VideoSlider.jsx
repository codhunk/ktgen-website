import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import video5 from "./videos/video5.mp4";
import { useLocation } from "react-router-dom";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// A structured array to hold video data for better scalability
const videoContent = [
  {
    src: video3,
    title: "Urban Rhythms",
    description: "Experience the pulse of the city.",
  },
  {
    src: video4,
    title: "Mountain Serenity",
    description: "A breathtaking view from the peaks.",
  },
  {
    src: video1,
    title: "Coastal Breeze",
    description: "Waves crashing on a golden shore.",
  },
  {
    src: video2,
    title: "Coastal Breeze",
    description: "Waves crashing on a golden shore.",
  },
  {
    src: video5,
    title: "Coastal Breeze",
    description: "Waves crashing on a golden shore.",
  },
];

const VideoSlider = () => {
  const containerRef = useRef(null);
  const location = useLocation(); // Detect route change

  // Inside VideoSlider.jsx useEffect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a GSAP context
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");
      if (sections.length < 2) return;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          anticipatePin: 1,
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, container); // Pass the container as the scope

    return () => {
      // Revert the entire context on cleanup
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative"
    >
      <div
        className="flex h-screen"
        style={{ width: `${videoContent.length * 100}vw` }}
      >
        {videoContent.map((content, index) => (
          <div
            key={index}
            className="panel w-screen h-screen flex-shrink-0 relative"
          >
            <video
              src={content.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white bg-black bg-opacity-40">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold drop-shadow-lg mb-4">
                {content.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl drop-shadow-md">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
