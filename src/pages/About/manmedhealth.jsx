import React from "react";
import { FaHeart, FaUser, FaLock, FaStethoscope } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { RiBrainLine } from "react-icons/ri";
import { TbTrophy } from "react-icons/tb";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Images
import heartImg from "../assets/gallery/heart.jpg";
import brainImg from "../assets/gallery/brain.jpg";
import doctorImg from "../assets/gallery/doctor.jpg";
import trophyImg from "../assets/gallery/trophy.jpg";

const MenHealthSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaStethoscope className="text-2xl text-red-600" />,
      image: doctorImg,
      title: "redefine_card1",
      description: "redefine_card1_p",
    },
    {
      icon: <IoIosHeart className="text-2xl text-blue-600" />,
      image: heartImg,
      title: "redefine_card2",
      description: "redefine_card2_p",
    },
    {
      icon: <RiBrainLine className="text-2xl text-blue-600" />,
      image: brainImg,
      title: "redefine_card3",
      description: "redefine_card3_p",
    },
    {
      icon: <TbTrophy className="text-2xl text-green-400" />,
      image: trophyImg,
      title: "redefine_card4",
      description: "redefine_card4_p",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-[#dceeff] via-[#eaf6ff] to-[#ffffff] dark:from-[#0b2136] dark:via-[#102a44] dark:to-[#1a1a1a] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("redefine_head")}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t("redefint_para")}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <FaUser className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    {t("redefine_approch")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("redefine_approch_p")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaLock className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    {t("redefine_secuere")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("redefine_secuere_p")}
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition">
              {t("about_btn")}
            </button>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border shadow-md hover:shadow-xl transition"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={t(feature.title)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {t(feature.title)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t(feature.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenHealthSection;
