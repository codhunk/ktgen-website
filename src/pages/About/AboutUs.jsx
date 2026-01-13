import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bg from "/images/about_hero1.jpg";
import team1 from "../assets/leaders/kiran1.JPG";
import TeamSlider from "./teamMembers";
import MenHealthSection from "./manmedhealth";
// import MousePointerEffect from "./mousepointereffect";
import { motion } from "framer-motion";
import LeadershipTeam from "./teamMembers";
import { useTranslation } from "react-i18next";
import { HeartHandshake, ThumbsUpIcon } from "lucide-react";
import { TbBulbFilled } from "react-icons/tb";
import { SiTrustedshops } from "react-icons/si";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen font-sans text-gray-800 ">
      {/* <MousePointerEffect /> */}

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <motion.div
          className="relative z-10 p-6 md:p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("about_head")}
          </h1>
          <p className="text-lg md:text-xl font-light">
            {t("about_subhead")}
          </p>
        </motion.div>
      </section>

      <MenHealthSection />

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#0b2136] dark:via-[#102a44] dark:to-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.h2
            className="text-4xl font-bold text-blue-900 dark:text-indigo-300 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("about_story_head")}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("about_story_para")}
          </motion.p>
        </div>
      </section>
      <section className="w-full bg-white">

        {/* ------------------- HERO SPLIT ------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${team1})` }}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-gradient-to-br from-[#74cdd1] via-[#5fbad6] to-[#3f90c9] flex items-center">
            <div className="px-10 lg:px-24 py-24 text-white max-w-xl">

              <p className="uppercase tracking-widest text-sm opacity-80 mb-4">
                Our Credo
              </p>

              <h1 className="text-5xl font-light leading-tight mb-8">
                What guides every decision we make
              </h1>

              <p className="text-lg leading-relaxed opacity-95">
                Our core values guide every conversation, organisational decision
                and anchor the actions of our employees. We constantly evolve to
                remain meaningful to every life we touch.
              </p>

              <button className="mt-12 bg-[#004b99] px-10 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-[#003b7d] transition">
                Read More <span className="text-xl">→</span>
              </button>

            </div>
          </div>

        </div>

        {/* ------------------- VALUES GRID ------------------- */}
        <div className="max-w-7xl mx-auto px-10 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT – VALUE CARDS */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-8">
              We are a
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {[
                { icon: <HeartHandshake size={32}/>, title: "Purpose", sub: "Inspired" },
                { icon: <ThumbsUpIcon size={32} />, title: "Responsibility", sub: "Centered" },
                { icon: <TbBulbFilled size={32} />, title: "Innovation", sub: "Driven" },
                { icon: <SiTrustedshops size={32} />, title: "Integrity & Trust", sub: "Anchored" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl text-blue-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-500">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT – BRAND STATEMENT */}
          <div className="flex items-center">
            <div className="border-l border-gray-300 pl-12 text-gray-700 text-xl leading-relaxed max-w-lg">
              A global pharmaceutical firm that consistently
              <span className="text-blue-600 font-medium"> cares for life </span>
              and delivers on its commitment to patients, partners,
              regulators, employees, investors, and the community.
            </div>
          </div>

        </div>

      </section>

      {/* Leadership Section with animation */}
      <LeadershipTeam />
    </div>
  );
};

export default AboutUs;
