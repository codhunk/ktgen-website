import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, MapPin, Building2, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import countingVideo from "./assets/countingvideo.mp4";

// Stat Card for Counting Cards
const StatCard = ({
  target,
  suffix,
  title,
  description,
  delay = 0,
  icon: Icon,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex flex-col justify-center items-center cursor-pointer w-40 md:w-72 h-44 md:h-72 text-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="bg-slate-800 text-pink-400 p-2 md:p-3 rounded-full shadow-md"
      >
        <Icon className="w-5 md:w-8 h-5 md:h-8" />
      </motion.div>

      {/* Counting Number */}
      <CountingNumber target={target} suffix={suffix} />

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
        className="text:lg md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
        className="text-xs md:text-lg text-gray-700"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

// Counting Number
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
      className="text-[3rem] md:text-[5rem] font-bold bg-gradient-to-r from-[#ff7fba] to-[#fad6b4] bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </motion.div>
  );
};

export default function VideoCounting() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-row [@media(max-width:900px)]:flex-col justify-center items-center gap-5 h-fit">
      {/* Left Counting Part */}
      <div className="h-full flex flex-col [@media(min-width:360px)]:flex-row [@media(min-width:900px)]:flex-col [@media(max-width:900px)]:w-full justify-between items-center [@media(min-width:360px)]:items-start [@media(min-width:900px)]:items-center md:items-center gap-8 sm:gap-2 md:gap-5">
        <StatCard
          target={1200}
          suffix="+"
          title={t("countc1_head")}
          description={t("countc1_para")}
          delay={0.4}
          icon={Building2}
        />

        <StatCard
          target={99}
          suffix="%"
          title={t("countc2_head")}
          description={t("countc2_para")}
          delay={0.8}
          icon={Clock}
        />
      </div>

      {/* Video Part */}
      <div className="w-1/2 [@media(max-width:900px)]:w-full h-80 md:h-full">
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

      {/* Right Counting Part */}
      <div className="h-full flex flex-col [@media(min-width:360px)]:flex-row [@media(min-width:900px)]:flex-col [@media(max-width:900px)]:w-full justify-between items-center [@media(min-width:360px)]:items-start [@media(min-width:900px)]:items-center md:items-center gap-8 sm:gap-2 md:gap-5">
        <StatCard
          target={500}
          suffix="+"
          title={t("countc3_head")}
          description={t("countc3_para")}
          delay={0.2}
          icon={Shield}
        />

        <StatCard
          target={250}
          suffix="+"
          title={t("countc4_head")}
          description={t("countc4_para")}
          delay={0.6}
          icon={MapPin}
        />
      </div>
    </div>
  );
}
