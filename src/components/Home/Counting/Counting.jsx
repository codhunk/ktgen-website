import React from "react";
import VideoCounting from "./VideoCounting";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaUserMd, FaHospital, FaGlobe, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserMd />,
    title: "Experienced Doctors",
    desc: "Team of certified and internationally trained professionals.",
    color: "text-blue-600",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Facilities",
    desc: "State-of-the-art laboratories and clinical infrastructure.",
    color: "text-green-600",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Serving patients and partners across multiple countries.",
    color: "text-purple-600",
  },
  {
    icon: <FaAward />,
    title: "Certified Excellence",
    desc: "ISO and GMP compliant healthcare standards.",
    color: "text-orange-600",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Counting = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0b2136] py-12">
      <div className="w-[90%] 2xl:max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("count_head")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            {t("count_para")}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -10,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center transition"
            >
              <motion.div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ${item.color}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>

              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Counting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <VideoCounting />
        </motion.div>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="h-[3px] w-32 bg-gradient-to-r from-[#715923] to-[#e2c88d] rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Counting;
