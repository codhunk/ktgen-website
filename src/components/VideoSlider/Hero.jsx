import React from "react";
import { motion } from "framer-motion";
import videoHero from "./videos/video1.mp4";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
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
          <div className="w-full md:w-[50%]">
            {/* Company Name */}
            {/* <motion.span
              className="block text-sm md:text-base font-medium tracking-widest text-blue-200 uppercase mb-2"
              variants={fadeUp}
            >
              Welcome to Manmed Health
            </motion.span> */}

            {/* Headline */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
              variants={fadeUp}
            >
              {/* Your Health, <br /> Our Mission */}
              {t("home_heading")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              {t("home_para")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <button className="px-4 py-2 text-sm md:text-base bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                {t("home_btn1")}
              </button>
              <button className="px-4 py-2 text-sm md:text-base bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                {t("home_btn2")}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
