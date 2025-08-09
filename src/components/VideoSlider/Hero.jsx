import React from "react";
import { motion } from "framer-motion";
import videoHero from "./videos/video1.mp4";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between child animations
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        src={videoHero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Content aligned left */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full px-8 sm:px-16 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full 2xl:max-w-7xl">
          <div className="w-full md:w-[60%]">
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={fadeUp}
            >
              Branded Generics. Unbranded Trust.
            </motion.h1>

            {/* Subheadline */}
            <motion.p className="text-lg md:text-2xl mb-8" variants={fadeUp}>
              Making high-quality medicines accessible, affordable, and
              unforgettable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
              <button className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Explore Products
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
