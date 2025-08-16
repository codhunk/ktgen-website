import React from "react";
import VideoCounting from "./VideoCounting";
import { motion } from "framer-motion";

const Counting = () => {
  return (
    <section className="w-[90%] 2xl:max-w-7xl flex flex-col justify-center items-center py-10">
      {/* Top Part */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, threshold: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-12"
      >
        {/* Heading Part */}
        <h2 className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 pb-2">
          Trust Through Numbers
        </h2>
        {/* Description Part */}
        <p className="text-md lg:text-xl font-semibold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent">
          Our commitment to excellence reflected in the numbers that matter most
        </p>
      </motion.div>

      {/* Video Counting Part */}
      <div>
        <VideoCounting />
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-teal-600 dark:from-emerald-400 dark:to-green-400 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Counting;
