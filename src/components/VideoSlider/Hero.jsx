import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import videoHero from "./videos/video4.mp4";
import { useTranslation } from "react-i18next";
const TypewriterText = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 30 : 80);

    if (!isDeleting && currentText.length === word.length) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pauseTimeout);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-blue-400">
      {currentText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};
const Hero = () => {
  const { t } = useTranslation();
 
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={videoHero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <span className="inline-block mb-6 px-8 py-1 bg-white/10 rounded-full text-xs tracking-widest uppercase text-white">
            KT Gen Pharmaceuticals
          </span>

          <h1 className="whitespace-pre-line text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            {t("home_heading")}
          </h1>
          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-blue-400">Beyond Medicine, Towards Well-Being</h1> */}
         <TypewriterText
                            words={[
                                "Beyond Medicine, Towards Well-Being",
                                
                            ]}
                        />

          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed mt-6 mb-10">
            {t("home_para")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-blue-600 rounded-lg text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition">
              {t("home_btn1")}
            </button>

            <button className="px-8 py-3 border border-white/40 rounded-lg text-sm sm:text-base text-white hover:bg-white/10 transition">
              {t("home_btn2")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
