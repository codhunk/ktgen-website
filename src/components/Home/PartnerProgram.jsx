"use client";
import { assets } from "../../assets/images/assets";
import { motion } from "framer-motion";
import ctaImg from "./assets/images/e2.jpg";
import {
  ShieldCheck,
  Globe,
  Microscope,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import pharmaVideo from "./assets/mp4/phama.mp4";

/* ---------------- DATA ---------------- */

const certs = [
  assets.cer_img1,
  assets.cer_img2,
  assets.cer_img3,
  assets.cer_img4,
  assets.cer_img5,
  assets.cer_img6,
];

const features = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Regulatory Compliance",
    desc: "All operations follow GMP, WHO and global pharmaceutical standards.",
    sub: "Ensuring full legal, safety and quality compliance across every market.",
  },
  {
    icon: <Microscope size={26} />,
    title: "Advanced R&D",
    desc: "Innovation-driven laboratories ensuring quality and safety.",
    sub: "Continuous research for improved formulations and better patient outcomes.",
  },
  {
    icon: <Building2 size={26} />,
    title: "Certified Manufacturing",
    desc: "Large-scale production facilities with international certifications.",
    sub: "Modern infrastructure meeting FDA, ISO and global regulatory norms.",
  },
  {
    icon: <Globe size={26} />,
    title: "Global Reach",
    desc: "Distribution partnerships across multiple healthcare markets.",
    sub: "Expanding pharmaceutical access in emerging and developed economies.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function PartnerProgram() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-blue-700 font-semibold mb-3">
              Pharmaceutical Partnership Program
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Partnering to Deliver <br />
              <span className="text-blue-700">Trusted Healthcare Solutions</span>
            </h1>

            <p className="text-gray-600 max-w-xl mb-4">
              We collaborate with healthcare organizations, distributors and
              innovators to expand global access to safe, effective and
              high-quality pharmaceutical products.
            </p>

            <p className="text-gray-500 max-w-xl mb-8">
              Our partnerships are built on transparency, regulatory excellence,
              and a shared commitment to improving patient lives worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">
                Become a Partner
              </button>

              <button className="flex items-center gap-2 text-[#c9a24d] font-semibold">
                View Program <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative h-[260px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden border shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={pharmaVideo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
          </div>
        </motion.div>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t("certifie_head")}{" "}
              <span className="text-[#c9a24d]">{t("organization_head")}</span>
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Our facilities and processes are certified by internationally
              recognized regulatory authorities, ensuring compliance, safety
              and global trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {certs.map((img, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.06 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="Certification"
                  className="h-20 sm:h-24 md:h-28 object-contain opacity-90 hover:opacity-100 transition"
                />
              </motion.div>
            ))}
          </motion.div>

        </section>


        {/* ================= FEATURES ================= */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Global Partners Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-700 rounded-xl mb-5">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
                <p className="text-gray-500 mt-2">{f.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SPLIT CTA ================= */}
        <div className="mt-32 relative">

          {/* Soft pharma background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-[#c9a24d]/10 rounded-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border bg-white/90 backdrop-blur shadow-xl">

            {/* LEFT — Pharma Image */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-full">
              <img
                src={ctaImg}   // replace with your pharma image
                alt="Pharmaceutical Partnership"
                className="w-full h-full object-cover"
              />

              {/* Gold–Blue overlay for brand tone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-[#c9a24d]/40"></div>
            </div>

            {/* RIGHT — CTA Content */}
            <div className="p-10 sm:p-14 lg:p-16 text-center lg:text-left flex flex-col justify-center">

              <span className="inline-block mb-6 px-6 py-1 rounded-full text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 w-fit mx-auto lg:mx-0">
                Pharmaceutical Partnership
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Build the Future of <br />
                <span className="text-blue-700">Healthcare With Us</span>
              </h2>

              <p className="max-w-xl text-gray-600 mb-4">
                Join our pharmaceutical ecosystem to deliver ethical, compliant and
                innovative medical solutions across the world.
              </p>

              <p className="max-w-xl text-gray-500 mb-10">
                Whether you are a distributor, manufacturer, hospital group or research
                institution, we provide the platform to grow together.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-blue-700 text-white px-4 py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-md">
                  Become a Partner
                </button>

                <button className="border border-[#c9a24d] text-[#c9a24d] px-4 py-4 rounded-xl font-semibold hover:bg-[#c9a24d]/10 transition">
                  Schedule a Discussion
                </button>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
