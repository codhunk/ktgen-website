import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, MapPin, Building2, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ------------------ Stat Card ------------------ */
const StatCard = ({ target, suffix, title, description, icon: Icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, boxShadow: "0px 12px 30px rgba(0,0,0,0.08)" }}
      className="
        bg-white dark:bg-gray-800 rounded-xl shadow-md
        p-5 text-center flex flex-col items-center gap-2
        w-full max-w-[380px] lg:max-w-[280px]
      "
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-slate-800 text-[#715923] p-2 rounded-full"
      >
        <Icon className="w-5 h-5 md:w-7 md:h-7" />
      </motion.div>

      <CountingNumber target={target} suffix={suffix} />

      <h3 className="text-sm md:text-base font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-xs md:text-sm text-gray-600 leading-tight">
        {description}
      </p>
    </motion.div>
  );
};

/* ------------------ Counting Number ------------------ */
const CountingNumber = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start;
    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-3xl font-bold text-blue-700"
    >
      {count}
      {suffix}
    </motion.div>
  );
};

/* ------------------ Main Layout ------------------ */
export default function VideoCounting() {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">

      <StatCard
        target={40}
        suffix="+"
        title={t("countc1_head")}
        description={t("countc1_para")}
        icon={Building2}
      />

      <StatCard
        target={99}
        suffix="%"
        title={t("countc2_head")}
        description={t("countc2_para")}
        icon={Clock}
      />

      <StatCard
        target={6}
        suffix="+"
        title={t("countc3_head")}
        description={t("countc3_para")}
        icon={Shield}
      />

      <StatCard
        target={100}
        suffix="+"
        title={t("countc4_head")}
        description={t("countc4_para")}
        icon={MapPin}
      />

    </div>
  );
}
