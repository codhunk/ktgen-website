import { useState } from "react";
import { motion } from "framer-motion";

import cardiology from "./assets/leaders/cardiology.jpeg";
import neurology from "./assets/leaders/neurology.jpg";
import ortho from "./assets/leaders/ortho.jpeg";
import Pediatrics from "./assets/leaders/pedi.jpeg";
import therapy from "./assets/leaders/therapy.mp4";

import cardio_icon from "./assets/icons/heart.png";
import neuro_icon from "./assets/icons/neurology.png";
import ortho_icon from "./assets/icons/arthritis.png";
import pedi_icon from "./assets/icons/pediatrics.png";

// Therapy Area Content
const therapyAreas = [
  {
    title: "Cardiology",
    description:
      "At ManMed, our Cardiology department offers the most advanced care for heart-related diseases and conditions. From diagnostic testing to minimally invasive procedures, we ensure every heartbeat is in expert hands.",
    image: cardiology,
    icon: cardio_icon,
  },
  {
    title: "Neurology",
    description:
      "ManMed's Neurology unit provides comprehensive treatment for brain, spine, and nervous system disorders. Our neurologists use cutting-edge technology to diagnose and manage even the most complex neurological challenges.",
    image: neurology,
    icon: neuro_icon,
  },
  {
    title: "Orthopedics",
    description:
      "Restore your mobility with ManMed's Orthopedics department. Whether it's joint replacement, sports injuries, or bone deformities, our orthopedic specialists tailor treatment plans for lasting relief and functionality.",
    image: ortho,
    icon: ortho_icon,
  },
  {
    title: "Pediatrics",
    description:
      "From newborns to adolescents, ManMed Pediatrics delivers personalized and nurturing care that supports every child's healthy growth. Our pediatricians prioritize prevention, development, and compassionate healing.",
    image: Pediatrics,
    icon: pedi_icon,
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "ManMed provided exceptional care and truly listened to my concerns. Highly professional staff!",
  },
  {
    name: "Jane Smith",
    feedback:
      "Their therapy programs helped my child recover smoothly. I’m grateful for ManMed’s pediatric team.",
  },
];

const faqs = [
  {
    q: "What therapies does ManMed offer?",
    a: "We offer Cardiology, Neurology, Orthopedics, Pediatrics, and several other specialty therapies tailored to patient needs.",
  },
  {
    q: "Does ManMed provide online consultations?",
    a: "Yes, we provide secure virtual consultations for many of our therapies, ensuring expert care from the comfort of your home.",
  },
  {
    q: "What insurance plans are accepted by ManMed?",
    a: "We accept most major insurance providers. Please contact our front desk for a complete list of accepted plans.",
  },
  {
    q: "How can I schedule an appointment with ManMed?",
    a: "You can easily book an appointment online through our website or call our helpline to speak with a care coordinator.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TherapyArea() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={therapy}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-indigo-800/70 z-10" />
        <div className="relative z-20 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            Explore ManMed's Therapy Areas
          </h1>
          <p className="max-w-2xl md:max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white">
            Specialized healthcare solutions designed to heal, restore, and transform lives.
          </p>
          <button className="mt-6 bg-white text-blue-700 font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-gray-200 transition">
            Explore Services
          </button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 sm:px-6 md:px-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Why Choose ManMed?</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg">
          At <strong>ManMed</strong>, we don’t just treat conditions — we care for people.
          Our interdisciplinary team of experts works collaboratively to design therapy plans
          that meet your unique needs. Through innovation, compassion, and a commitment to excellence,
          we ensure that your healing journey is backed by science and led by heart.
        </p>
      </motion.section>

      {/* Therapy Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {therapyAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {area.icon && (
                  <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                    <img
                      src={area.icon}
                      alt={`${area.title} icon`}
                      className="w-8 h-8"
                    />
                  </div>
                )}
              </div>
              <div className="flex-grow p-6 flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 sm:px-6 lg:px-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">What Our Patients Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <p className="text-gray-700 mb-4">&quot;{testi.feedback}&quot;</p>
              <h4 className="font-semibold">{testi.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ with Dropdown */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-100"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const [open, setOpen] = useState(false);
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-xl shadow-md"
              >
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h4 className="font-semibold text-gray-800">{faq.q}</h4>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6 pb-4 text-gray-600 text-sm"
                >
                  {faq.a}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-4 sm:px-6 lg:px-10 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Schedule Your Consultation with ManMed
        </h2>
        <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
          Ready to take control of your health? Connect with ManMed’s expert team today and receive a personalized therapy roadmap tailored to your wellness goals.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Book Now
        </button>
      </motion.section>
    </div>
  );
}
