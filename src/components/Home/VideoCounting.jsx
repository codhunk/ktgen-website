import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, MapPin, Building2, Clock } from "lucide-react";

import countingVideo from "./countingvideo.mp4";

const StatCard = ({ target, suffix, title, delay = 0, icon: Icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center space-y-1 sm:space-y-4 p-4 sm:p-6 relative dark:bg-gray-800/50 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
    >
      {/* Single Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="mb-2"
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-green-400 dark:text-green-400" />
      </motion.div>

      <CountingNumber target={target} suffix={suffix} />

      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
        className="text-xs sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-gray-200"
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

const CountingNumber = ({ target, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationId;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * target);

        setCount(currentCount);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };
    }
  }, [inView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </motion.div>
  );
};

export default function VideoCounting() {
  return (
    <div className="h-full md:min-h-screen relative overflow-hidden dark:bg-gray-900 w-full sm:w-[800px] md:w-[900px] lg:w-[1200px] max-w-7xl">
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={countingVideo}
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto h-[60vh] md:min-h-screen py-8 sm:py-16 px-1 sm:px-8">
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <StatCard
            target={500}
            suffix="+"
            title="Trust Brand"
            delay={0.2}
            icon={Shield}
          />
        </div>

        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <StatCard
            target={1200}
            suffix="+"
            title="Partner Pharmacies"
            delay={0.4}
            icon={Building2}
          />
        </div>

        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
          <StatCard
            target={250}
            suffix="+"
            title="Towns and Villages"
            delay={0.6}
            icon={MapPin}
          />
        </div>

        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
          <StatCard
            target={99}
            suffix="%"
            title="Timely Delivery Rate"
            delay={0.8}
            icon={Clock}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 via-green-300 to-emerald-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 via-green-300 to-emerald-300 rounded-full opacity-15"
        />
      </div>
    </div>
  );
}
