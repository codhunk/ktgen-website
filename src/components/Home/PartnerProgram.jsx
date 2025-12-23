import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scan,
  Trophy,
  Gift,
  Package,
  Star,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { assets } from "../../assets/images/assets";

const PartnerProgram = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "partner_titl1",
      description: "partner_des1",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "partner_titl2",
      description: "partner_des2",
      color: "from-emerald-500 to-lime-500",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "partner_titl3",
      description: "partner_des3",
      color: "from-green-400 to-[#95DE4B]",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "partner_titl4",
      description: "partner_des4",
      color: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    {
      icon: `${assets.cer_img1}`
    },
    {
      icon: `${assets.cer_img2}`
    },
    {
      icon: `${assets.cer_img3}`
    },
    {
      icon: `${assets.cer_img4}`
    },
    {
      icon: `${assets.cer_img5}`
    },
    {
      icon: `${assets.cer_img6}`
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7eb449]/10 to-[#059BE3]/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-[#7eb449]/20 dark:border-[#059BE3]/20"
            >
              <Zap className="w-4 h-4 text-[#7eb449]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("partnertop_head")}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="pt-5  text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-[#7eb449] to-[#059BE3] dark:from-white dark:via-green-100 dark:to-teal-100 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {t("partner_head1")}
              <br />
              <span className="bg-gradient-to-r from-[#7eb449] to-[#059BE3] bg-clip-text text-transparent">
                {t("partner_head2")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              {t("partner_para")}
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#7eb449] to-[#059BE3] hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            >
              {t("partner_btn")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>





      {/* Stats Section */}
      {/* <section className="border border-red-500 py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid border border-green-500 grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group border border-red-600"
              >
                <div className="inline-flex border border-red-500 items-center justify-center w-16 h-16 bg-gradient-to-r from-[#7eb449] to-[#059BE3] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {t(stat.label)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <section className="py-6 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group">
                <div className="overflow-hidden inline-flex items-center justify-center w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={stat.icon} alt="images" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">

              {t("partnerf_head1")}{" "}
              <span className="bg-gradient-to-r from-[#7eb449] to-[#059BE3] bg-clip-text text-transparent">
                {t("partnerf_head2")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("partnerf_para")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#95DE4B] dark:group-hover:text-teal-400 transition-colors">
                    {t(feature.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(feature.description)}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7eb449] to-[#059BE3] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("partner_ctah")}
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              {t("partner_ctap")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-white text-[#64cb03] px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                {t("partner_ctab1")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              {/* #95DE4B
#059BE3 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                {t("partner_ctab2")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerProgram;
