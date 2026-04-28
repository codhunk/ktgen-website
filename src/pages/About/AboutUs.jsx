import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Target,
  Eye,
  ShieldCheck,
  Truck,
  FlaskConical,
  Users,
  Handshake,
  Globe,
  Zap,
  CheckCircle2,
  Lock,
  Leaf
} from "lucide-react";

import bg from "/images/about_hero1.jpg";
import doctorImg from "../assets/gallery/doctor.jpg";
import LeadershipTeam from "./teamMembers";

const AboutUs = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 italic-none">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-[#c9a24d] uppercase border border-[#c9a24d]/30 rounded-full bg-[#c9a24d]/10 backdrop-blur-sm"
            >
              Established Excellence
            </motion.span>

            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              {t("about_head")}
            </h1>

            <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed font-light">
              {Array.isArray(t("about_paras")) && t("about_paras").map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.2 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#c9a24d] to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* ================= ROLE & ECOSYSTEM ================= */}
      {/* <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t("role_head")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("role_para")}
              </p>
              
              <div className="grid gap-4">
                {Array.isArray(t("role_points")) && t("role_points").map((point, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeIn}
                    className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-base md:text-lg font-medium text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
                <img 
                  src={doctorImg} 
                  alt="Professional Healthcare" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-10 -z-10"></div>
            </motion.div>

          </div>
        </div>
      </section> */}

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-blue-900 rounded-xl text-white shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-blue-800 opacity-20 transform translate-x-4 -translate-y-4">
                <Target size={140} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <Target size={28} className="text-[#c9a24d]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight text-[#c9a24d]">{t("vision_head")}</h2>
                <p className="text-xl leading-relaxed font-light text-blue-100">
                  {t("vision_para")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white rounded-xl border border-gray-100 shadow-xl shadow-blue-900/5 group"
            >
              <div className="absolute top-0 right-0 p-6 text-blue-50 opacity-10 transform translate-x-4 -translate-y-4">
                <Eye size={140} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{t("mission_head")}</h2>
                <div className="space-y-4">
                  {Array.isArray(t("mission_points")) && t("mission_points").map((point, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-blue-50 flex items-center justify-center text-[#c9a24d] text-xs font-bold group-hover/item:bg-[#c9a24d] group-hover/item:text-white transition-colors duration-300 border border-blue-100/50">
                        {idx + 1}
                      </div>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full">
                Solutions & Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                {t("services_head")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("services_para")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(t("services_points")) && t("services_points").map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-10 bg-white border border-slate-100 rounded-[1rem] shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col items-start"
              >
                {/* Decorative Background Element */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-inner">
                    {idx % 3 === 0 ? <Zap size={28} /> : idx % 3 === 1 ? <Globe size={28} /> : <Handshake size={28} />}
                  </div>

                  <h4 className="text-base md:text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                    {point}
                  </h4>

                  <div className="mt-6 w-8 h-1 bg-blue-100 rounded-full group-hover:w-16 group-hover:bg-[#c9a24d] transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & OPERATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <motion.div className="lg:col-span-7" variants={fadeIn} initial="hidden" whileInView="visible">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-green-700 uppercase bg-green-50 rounded-full border border-green-100">
                <ShieldCheck size={14} />
                Quality Assurance
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("quality_head")}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t("quality_para_1")}</p>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="text-base font-bold text-blue-900 mb-4 uppercase tracking-wider">{t("quality_para_2")}</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Array.isArray(t("quality_points")) && t("quality_points").map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <FlaskConical size={18} className="text-[#c9a24d]" />
                      <span className="text-sm md:text-base font-medium text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-gray-500 italic font-medium border-l-4 border-[#c9a24d] pl-4">“{t("quality_closing")}”</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group h-full"
            >
              <div className="h-full p-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-105 transition-transform duration-700">
                  <Truck size={240} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/30">
                    <Truck size={28} className="text-[#c9a24d]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-[#c9a24d]">{t("cold_chain_head")}</h3>
                  <div className="w-10 h-0.5 bg-white/30 mb-6 rounded-full"></div>
                  <p className="text-lg font-light leading-relaxed opacity-95 italic">
                    {t("cold_chain_para")}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= STAKEHOLDERS & VALUES ================= */}
      <section className="py-20 bg-blue-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("who_we_serve_head")}</h2>
              <p className="text-lg text-blue-100 mb-8 opacity-80 leading-relaxed font-light">{t("who_we_serve_para")}</p>

              <div className="space-y-3">
                {Array.isArray(t("who_we_serve_points")) && t("who_we_serve_points").map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex gap-4 items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group/item"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#c9a24d] shadow-[0_0_8px_rgba(201,162,77,0.5)] group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-lg md:text-xl font-light text-white tracking-tight">{point}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-lg font-medium text-blue-400 italic">“{t("who_we_serve_closing")}”</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("values_head")}</h2>
              <div className="grid gap-4">
                {Array.isArray(t("values_points")) && t("values_points").map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-8 h-8 mt-1 rounded-lg bg-gradient-to-br from-[#c1923e] to-[#c9a24d] flex items-center justify-center text-white font-bold text-shadow shadow-md text-sm border border-white/10">
                      {idx + 1}
                    </div>
                    <div className="pb-4 border-b border-white/10 w-full">
                      <span className="text-lg md:text-xl font-bold text-white tracking-tight block group hover:translate-x-2 transition-transform duration-300">
                        {point}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ETHICS & SUSTAINABILITY ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                {t("ethics_head")}
              </h2>
              <div className="space-y-6">
                {Array.isArray(t("ethics_paras")) && t("ethics_paras").map((para, idx) => (
                  <p key={idx} className="text-lg text-gray-600 leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-12 bg-blue-900 rounded-[1rem] text-white shadow-2xl overflow-hidden group border-2 border-[#c9a24d]/20"
            >
              <div className="absolute top-0 right-0 p-8 text-blue-800 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                <Leaf size={180} />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center mb-8 shadow-inner border border-blue-700">
                  <Leaf size={32} className="text-[#c9a24d]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-[#c9a24d]">
                  {t("sustainability_head")}
                </h3>
                <p className="text-xl leading-relaxed font-light text-blue-50 italic">
                  {t("sustainability_para")}
                </p>
                <div className="mt-8 flex items-center gap-4 text-[#c9a24d] font-bold uppercase tracking-widest text-xs">
                  <span className="w-8 h-px bg-[#c9a24d]"></span>
                  Our Commitment
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 text-blue-400">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-[#1d4ed8] to-blue-900 opacity-95"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a24d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-xl mx-auto flex items-center justify-center border border-[#c9a24d]/30 shadow-2xl">
              <Handshake size={36} className="text-[#c9a24d]" />
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
              {t("partner_head")}
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-blue-50 opacity-90 font-light leading-relaxed max-w-3xl mx-auto italic">
              {t("partner_para")}
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="group relative inline-flex items-center gap-4 bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition active:translate-y-1 shadow-2xl"
            >
              {t("contact_us")}
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                <ArrowIcon />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      {/* ================= LEADERSHIP TEAM ================= */}
      <LeadershipTeam />

    </div>
  );
};

const ArrowIcon = () => (
  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default AboutUs;
