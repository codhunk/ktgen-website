import React from "react";
import VideoCounting from "./VideoCounting";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaUserMd, FaHospital, FaGlobe, FaAward } from "react-icons/fa";

import doctorImg from "./assets/doctor.jpg";
import labImg from "./assets/lab.jpg";
import hospitalImg from "./assets/hospital.jpg";
import researchImg from "./assets/research.jpg";
import bgVideo from "./assets/bg.mp4";   // ← add your background video

const stats = [
  {
    icon: <FaUserMd />,
    title: "Experienced Doctors",
    desc: "Team of certified and internationally trained professionals.",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Facilities",
    desc: "State-of-the-art laboratories and clinical infrastructure.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Serving patients and partners across multiple countries.",
  },
  {
    icon: <FaAward />,
    title: "Certified Excellence",
    desc: "ISO and GMP compliant healthcare standards.",
  },
];

const Counting = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-8 overflow-hidden">

      {/* Background Video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft Overlay for readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-[#0b2136]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-8"
        >
          <img src={doctorImg} className="rounded-xl h-52 w-full object-cover shadow-lg" />
          <img src={labImg} className="rounded-xl h-52 w-full object-cover shadow-lg mt-10" />
          <img src={hospitalImg} className="rounded-xl h-52 w-full object-cover shadow-lg" />
          <img src={researchImg} className="rounded-xl h-52 w-full object-cover shadow-lg mt-10" />
        </motion.div>

        {/* RIGHT: VideoCounting */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg p-6 rounded-xl shadow-lg inline-block">
            <VideoCounting />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Counting;
