import React from "react";
import { motion } from "framer-motion";
import videoHero from "./videos/video4.mp4";
import { useTranslation } from "react-i18next";
import { FaUserMd, FaClinicMedical, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={videoHero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

          {/* LEFT SIDE */}
          <motion.div variants={fadeLeft} initial="hidden" animate="visible">
            <span className="inline-block mb-4 px-8 py-1 bg-white/10 rounded-full text-xs tracking-widest uppercase text-white">
              KT Gen Pharmaceuticals
            </span>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
              {t("home_heading")}
            </h1>

            <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed max-w-lg">
              {t("home_para")}
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 transition">
                {t("home_btn1")}
              </button>
              <button className="px-6 py-2 border border-white/40 rounded-lg text-sm text-white hover:bg-white/10 transition">
                {t("home_btn2")}
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {/* Card 1 */}
            <div className="bg-[#f1f6ff] p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
              <FaUserMd className="text-blue-700 text-2xl mb-4" />
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Expert Doctors
              </h4>
              <p className="text-xs text-gray-600">
                Trusted medical professionals with global experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#ecfdf5] p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
              <FaClinicMedical className="text-green-700 text-2xl mb-4" />
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Certified Labs
              </h4>
              <p className="text-xs text-gray-600">
                International quality and safety standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fff7ed] p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] col-span-2">
              <FaShieldAlt className="text-orange-600 text-2xl mb-4" />
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Data Protection
              </h4>
              <p className="text-xs text-gray-600">
                Your medical records are fully secure and encrypted.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
