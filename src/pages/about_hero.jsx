import React from "react";
import { motion } from "framer-motion";

const HeroAboutUs = () => {
  return (
    
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-[#e0f7fa] to-[#f1f8e9] flex items-center justify-center px-6 ">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            About <span className="text-blue-600">KT Gen Vitality Core</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We are a team dedicated to empowering lives through innovative health solutions. 
            With years of experience, we focus on redefining wellness and building trust in care.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/images/about_hero.jpg" // Replace with your actual image path
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
