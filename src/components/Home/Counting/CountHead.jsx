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
    glowColor: "group-hover:shadow-blue-500/30",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Facilities",
    desc: "State-of-the-art laboratories and clinical infrastructure.",
    glowColor: "group-hover:shadow-[#c9a24d]/30",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Serving patients and partners across multiple countries.",
    glowColor: "group-hover:shadow-blue-400/30",
  },
  {
    icon: <FaAward />,
    title: "Certified Excellence",
    desc: "ISO and GMP compliant healthcare standards.",
    glowColor: "group-hover:shadow-[#c9a24d]/40",
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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const CountHead = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#0b2136] py-18 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#c9a24d]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-[90%] 2xl:max-w-7xl mx-auto relative z-10  py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#c9a24d] uppercase border border-[#c9a24d]/30 rounded-full bg-[#c9a24d]/5 backdrop-blur-md"
          >
            Our Impact in Numbers
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t("count_head")}
          </h2>
          <p className="text-base md:text-lg text-blue-100/70 font-light max-w-2xl mx-auto leading-relaxed">
            {t("count_para")}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1rem] p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 shadow-2xl ${item.glowColor}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-[1rem] bg-[#c9a24d]/0 group-hover:bg-[#c9a24d]/5 transition-colors duration-500"></div>

              <motion.div
                className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center"
              >
                {/* Icon Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-[#c9a24d]/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700 border border-white/10"></div>

                <motion.span
                  className="relative text-3xl text-[#c9a24d] drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>

              <h4 className="relative font-bold text-white text-xl mb-4 tracking-tight group-hover:text-[#c9a24d] transition-colors duration-300">
                {item.title}
              </h4>

              <p className="relative text-sm text-blue-100/60 leading-relaxed font-light">
                {item.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-[#c9a24d] transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex justify-center"
        >
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#c9a24d] to-transparent opacity-50"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default CountHead;
