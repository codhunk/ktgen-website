import React from 'react';
import { FaHeart, FaUser, FaLock, FaStethoscope } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { RiBrainLine } from 'react-icons/ri';
import { TbTrophy } from 'react-icons/tb';
import { motion } from 'framer-motion';

const MenHealthSection = () => {
  const features = [
    {
      icon: <FaStethoscope className="text-2xl text-red-600" />,
      title: 'Precision Medicine',
      description: 'Tailored treatments based on your unique health profile and goals.',
    },
    {
      icon: <IoIosHeart className="text-2xl text-blue-600" />,
      title: 'Compassionate Care',
      description: 'Understanding and discreet approach to sensitive men’s health issues.',
    },
    {
      icon: <RiBrainLine className="text-2xl text-blue-600" />,
      title: 'Expert Knowledge',
      description: 'Board-certified specialists with decades of men’s health experience.',
    },
    {
      icon: <TbTrophy className="text-2xl text-green-400" />,
      title: 'Proven Results',
      description: '98% patient satisfaction rate with measurable health improvements.',
    },
  ];

  const metrics = [
    { number: '15+', label: 'Years Experience' },
    { number: '50k+', label: 'Men Treated' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-[#dceeff] via-[#eaf6ff] to-[#ffffff] font-sans text-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Redefining Men's Health
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At ManMed Health, we understand that men's health goes beyond treating symptoms.
              We focus on empowering you with comprehensive solutions that restore your vitality,
              confidence, and peak performance in every aspect of life.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <FaUser className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Personalized Approach</h4>
                  <p className="text-gray-600">
                    Every treatment plan is customized to your specific needs and lifestyle.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaLock className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Confidential & Secure</h4>
                  <p className="text-gray-600">
                    Your privacy is our priority with HIPAA-compliant telemedicine options.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-800 transition-colors self-start">
              Learn More About Us
            </button>
          </motion.div>

          {/* Right Section - Grid of Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="p-3 bg-white rounded-lg border border-gray-200 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {metrics.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <div
              className={`text-3xl font-bold ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`}
            >
              {item.number}
            </div>
            <div className="text-sm text-gray-700">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenHealthSection;
