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
  },
  {
    icon: <FaHospital />,
    title: "Advanced Facilities",
    desc: "State-of-the-art laboratories and clinical infrastructure.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Serving patients and partners across multiple countries.",
  },
  {
    icon: <FaAward />,
    title: "Certified Excellence",
    desc: "ISO and GMP compliant healthcare standards.",
  },
];

const Counting = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0b2136] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <img
            src="./assets/doctor.jpg"
            className="rounded-2xl object-cover h-52 w-full shadow-lg"
          />
          <img
            src="./assets/lab.jpg"
            className="rounded-2xl object-cover h-52 w-full shadow-lg mt-10"
          />
          <img
            src="./assets/hospital.jpg"
            className="rounded-2xl object-cover h-52 w-full shadow-lg"
          />
          <img
            src="./assets/research.jpg"
            className="rounded-2xl object-cover h-52 w-full shadow-lg mt-10"
          />
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("count_head")}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
            {t("count_para")}
          </p> */}

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-700 rounded-xl text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Video Counter */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md inline-block">
            <VideoCounting />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Counting;
