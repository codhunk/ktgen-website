import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

import tejuPic from "../assets/leaders/teju.jpeg";
import kiranPic from "../assets/leaders/kiran.JPG";
import anujPic from "./assets/leaders/rohit.jpeg";

const leaders = [
  {
    name: "meet_card2name",
    title: "meet_card2title",
    image: tejuPic,
    bio: "meet_card2bio",
    socials: { linkedin: "#", X: "#", instagram: "#" },
  },
  {
    name: "meet_card1name",
    title: "meet_card1title",
    image: kiranPic,
    bio: "meet_card1bio",
    socials: { linkedin: "#", X: "#", instagram: "#" },
  },
  {
    name: "meet_card3name",
    title: "meet_card3title",
    image: anujPic,
    bio: "meet_card3bio",
    socials: { linkedin: "#", X: "#", instagram: "#" },
  },
];

/* Individual card — handles its own read-more state */
const LeaderCard = ({ leader, idx }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const bioText = t(leader.bio);

  return (
    <motion.div
      className="group rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      {/* ── DESKTOP: hover-expand layout (unchanged) ── */}
      <div className="hidden md:flex bg-white dark:bg-slate-800 rounded-xl p-6 group-hover:p-0 shadow-lg h-96 flex-col items-center justify-center transition-all duration-500 ease-in-out gap-5 group-hover:flex-row group-hover:justify-between">
        {/* Image */}
        <div className="w-32 h-32 group-hover:w-1/2 group-hover:h-full rounded-full group-hover:rounded-none group-hover:rounded-tl-xl group-hover:rounded-bl-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-600 shrink-0 transition-all duration-500">
          <img
            className="w-full h-full object-cover object-top"
            src={leader.image}
            alt={t(leader.name)}
            draggable="false"
          />
        </div>
        {/* Details */}
        <div className="text-center group-hover:text-left flex-1 group-hover:w-1/2 group-hover:py-4 group-hover:pr-4 transition-all duration-500">
          <h5 className="text-xl font-bold text-gray-800 dark:text-slate-100">{t(leader.name)}</h5>
          <p className="whitespace-pre-line text-base text-indigo-600 dark:text-blue-300 font-medium mt-2">{t(leader.title)}</p>
          <p className="mt-2 text-gray-600 dark:text-white text-sm">{bioText}</p>
          {/* Socials */}
          <div className="flex gap-4 mt-4 justify-center group-hover:justify-start transition-all duration-500">
            {leader.socials.linkedin && (
              <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-300 hover:text-blue-900 transition-colors" />
              </a>
            )}
            {leader.socials.X && (
              <a href={leader.socials.X} target="_blank" rel="noopener noreferrer">
                <X className="w-5 h-5 text-gray-700 hover:text-black transition-colors" aria-label="X" />
              </a>
            )}
            {leader.socials.instagram && (
              <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-300 hover:text-pink-700 transition-colors" />
              </a>
            )}
            {leader.socials.facebook && (
              <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── MOBILE: stacked layout with Read More toggle ── */}
      <div className="flex md:hidden bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg flex-col items-center gap-4">
        {/* Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-600 shrink-0">
          <img
            className="w-full h-full object-cover object-top"
            src={leader.image}
            alt={t(leader.name)}
            draggable="false"
          />
        </div>
        {/* Name & Title */}
        <div className="text-center">
          <h5 className="text-lg font-bold text-gray-800 dark:text-slate-100">{t(leader.name)}</h5>
          <p className="text-sm text-indigo-600 dark:text-blue-300 font-medium mt-1">{t(leader.title)}</p>
        </div>
        {/* Bio with Read More */}
        <div className="text-center w-full">
          <AnimatePresence initial={false}>
            <motion.p
              key={expanded ? "full" : "short"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-gray-600 dark:text-white text-sm leading-relaxed"
            >
              {expanded ? bioText : `${bioText.slice(0, 100)}${bioText.length > 100 ? "…" : ""}`}
            </motion.p>
          </AnimatePresence>
          {bioText.length > 100 && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300 hover:underline focus:outline-none"
            >
              {expanded ? "Read Less ▲" : "Read More ▼"}
            </button>
          )}
        </div>
        {/* Socials */}
        <div className="flex gap-4 justify-center">
          {leader.socials.linkedin && (
            <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-blue-700 hover:text-blue-900 transition-colors" />
            </a>
          )}
          {leader.socials.X && (
            <a href={leader.socials.X} target="_blank" rel="noopener noreferrer">
              <X className="w-5 h-5 text-gray-700 hover:text-black transition-colors" aria-label="X" />
            </a>
          )}
          {leader.socials.instagram && (
            <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700 transition-colors" />
            </a>
          )}
          {leader.socials.facebook && (
            <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-950 dark:via-blue-950 dark:to-cyan-950 py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-900 dark:text-indigo-100 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("about_meet_head")}
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {leaders.map((leader, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <LeaderCard leader={leader} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
