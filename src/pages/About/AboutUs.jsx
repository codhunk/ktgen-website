import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bg from "/images/about_hero.jpg";
import TeamSlider from "./teamMembers";
import MenHealthSection from "./manmedhealth";
// import MousePointerEffect from "./mousepointereffect";
import { motion } from "framer-motion";
import LeadershipTeam from "./teamMembers";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen font-sans text-gray-800">
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
            {/* Founded in 2021 by Jalandhar, our journey began with a vision to
            transform ideas into impactful digital experiences. What started as
            a small initiative quickly grew into a dynamic team driven by
            innovation. We’ve consistently focused on delivering quality
            solutions tailored to our clients' needs. Over the years, our
            dedication has helped us build strong partnerships and a solid
            reputation. Today, we continue to grow, fueled by creativity, trust,
            and a passion for progress. */}

            {/* Vision Statement */}
            {/* To be the most trusted and accessible partner in India's healthcare journey, empowering every individual to see their well-being not as a cost, but as their most valuable, life-long investment.<br/> */}
            {/* Mission Statement */}
            {/* To ethically develop and deliver high-quality, affordable healthcare solutions that address the foundational needs of the Indian population. We are committed to empowering individuals to proactively invest in their health and will remain a reliable partner in every step of their journey, living out our promise: ManMed Health - Always By Your Side. */}
            {t("about_story_para")}
          </motion.p>
        </div>
      </section>

      {/* Leadership Section with animation */}
      <LeadershipTeam />
    </div>
  );
};

export default AboutUs;
