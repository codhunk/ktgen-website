import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

import tejuPic  from "../../pages/assets/leaders/teju.jpeg";
import kiranPic from "../../pages/assets/leaders/kiran.JPG";
import anujPic  from "../../pages/About/assets/leaders/rohit.jpeg";

const directors = [
  { 
    nameKey: "meet_card2name", 
    titleKey: "meet_card2title", 
    bioKey: "meet_card2bio", 
    image: tejuPic,
    linkedin: "#"
  },
  { 
    nameKey: "meet_card1name", 
    titleKey: "meet_card1title", 
    bioKey: "meet_card1bio", 
    image: kiranPic,
    linkedin: "#"
  },
  { 
    nameKey: "meet_card3name", 
    titleKey: "meet_card3title", 
    bioKey: "meet_card3bio", 
    image: anujPic,
    linkedin: "#"
  },
];

const DirectorRow = ({ d, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 py-12 border-b border-gray-100 last:border-0`}
    >
      {/* Photo Container */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-blue-100 rounded-2xl group-hover:border-blue-200 transition-colors duration-500" />
          
          <div className="relative w-64 h-80 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={d.image}
              alt={t(d.nameKey)}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 rounded-full">
          Executive Leadership
        </div>
        
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
          {t(d.nameKey)}
        </h3>
        
        <p className="text-sm font-semibold text-[#c9a24d] uppercase tracking-[0.2em] mb-6">
          {t(d.titleKey)}
        </p>

        <div className="w-12 h-1 bg-blue-700 rounded-full mb-6" />

        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
          {t(d.bioKey)}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={d.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-bold text-sm transition-colors"
          >
            <Linkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const HomeDirectors = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-4 sm:px-12 lg:px-32">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            {t("about_meet_head")}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Leading with vision, integrity, and a commitment to transforming healthcare through ethical pharmaceutical innovation.
          </p>
        </div>

        {/* Directors List */}
        <div className="flex flex-col">
          {directors.map((d, i) => (
            <DirectorRow key={i} d={d} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeDirectors;
