import React from "react";
import { FaHeart, FaUser, FaLock, FaStethoscope } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { RiBrainLine } from "react-icons/ri";
import { TbTrophy } from "react-icons/tb";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MenHealthSection = () => {
  const features = [
    {
      icon: <FaStethoscope className="text-2xl text-red-600" />,
      title: "redefine_card1",
      description:
        "redefine_card1_p",
    },
    {
      icon: <IoIosHeart className="text-2xl text-blue-600" />,
      title: "redefine_card2",
      description:
        "redefine_card2_p",
    },
    {
      icon: <RiBrainLine className="text-2xl text-blue-600" />,
      title: "redefine_card3",
      description:
        "redefine_card3_p",
    },
    {
      icon: <TbTrophy className="text-2xl text-green-400" />,
      title: "redefine_card4",
      description:
        "redefine_card4_p",
    },
  ];

  const metrics = [
    { number: "15+", label: "metrics_year" },
    { number: "50k+", label: "metrics_man" },
    { number: "98%", label: "metrics_succ" },
    { number: "24/7", label: "metrics_succ" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-[#dceeff] via-[#eaf6ff] to-[#ffffff] dark:from-[#0b2136] dark:via-[#102a44] dark:to-[#1a1a1a] font-sans text-gray-800 dark:text-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
              {t("redefine_head")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("redefint_para")}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <FaUser className="text-blue-600 dark:text-blue-300 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    {t("redefine_approch")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("redefine_approch_p")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaLock className="text-blue-600 dark:text-blue-300 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    {t("redefine_secuere")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("redefine_secuere_p")}
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-900 dark:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-800 transition-colors self-start">
              {t("about_btn")}
            </button>
          </motion.div>

          {/* Right Section - Grid of Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="p-3 bg-white rounded-lg border border-gray-200 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {t(feature.title)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                    {t(feature.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {metrics.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <div
              className={`text-3xl font-bold ${index % 2 === 0 ? "text-blue-600" : "text-green-600"
                }`}
            >
              {item.number}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-100">
              {t(item.label)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenHealthSection;
