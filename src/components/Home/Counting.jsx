import React from "react";
import { Building2, MapPin, Clock, Shield, Pill } from "lucide-react";
import VideoCounting from "./VideoCounting";
import { motion } from "framer-motion";

const Counting = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-1 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 pb-2 dark:text-white">
            Trust Through Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
            Our commitment to excellence reflected in the numbers that matter
            most
          </p>
        </motion.div>

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
      </div>
    </section>
  );
};

export default Counting;
