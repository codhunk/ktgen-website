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
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.15 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    { icon: <Scan />, title: "partner_titl1", desc: "partner_des1" },
    { icon: <Trophy />, title: "partner_titl2", desc: "partner_des2" },
    { icon: <Gift />, title: "partner_titl3", desc: "partner_des3" },
    { icon: <Package />, title: "partner_titl4", desc: "partner_des4" },
  ];

  const certs = [
    assets.cer_img1,
    assets.cer_img2,
    assets.cer_img3,
    assets.cer_img4,
    assets.cer_img5,
    assets.cer_img6,
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">

        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#715923]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-[260px] h-[260px] bg-[#e8d39a]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-[260px] h-[260px] bg-emerald-400/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative w-full px-6 lg:px-20 text-center"
        >
          <motion.span variants={item} className="inline-flex items-center gap-2 text-sm font-medium text-[#715923] mb-6">
            <Zap size={16} /> {t("partnertop_head")}
          </motion.span>

          <motion.h1 variants={item} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            {t("partner_head1")} <br />
            <span className="text-[#715923]">{t("partner_head2")}</span>
          </motion.h1>

          <motion.p variants={item} className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t("partner_para")}
          </motion.p>

          <motion.div variants={item} className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-[#715923] text-white font-semibold rounded-lg hover:bg-[#5f4a1f] transition">
              {t("partner_btn")}
            </button>
            <button className="px-8 py-3 border border-[#715923] text-[#715923] rounded-lg hover:bg-[#715923]/10 transition">
              Learn More
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2"><CheckCircle size={14} /> ISO Certified</div>
            <div className="flex items-center gap-2"><TrendingUp size={14} /> Global Network</div>
            <div className="flex items-center gap-2"><Star size={14} /> Trusted Partners</div>
          </motion.div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-14 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("certifie_head")} <span className="text-[#715923]">{t("organization_head")}</span>
          </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 px-6">
          {certs.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="certification"
              className="h-20 md:h-24 object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </section>


      {/* FEATURES */}
      <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900 px-6 lg:px-20">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("partnerf_head1")} <span className="text-[#715923]">{t("partnerf_head2")}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#715923] text-white rounded-lg mb-5">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2">{t(f.title)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t(f.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#715923] text-white text-center px-6 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t("partner_ctah")}
        </h2>
        <p className="text-sm md:text-base mb-8 max-w-2xl mx-auto">
          {t("partner_ctap")}
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#715923] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            {t("partner_ctab1")}
          </button>
          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
            {t("partner_ctab2")}
          </button>
        </div>
      </section>

    </div>
  );
};

export default PartnerProgram;
