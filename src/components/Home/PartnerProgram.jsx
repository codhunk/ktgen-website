import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scan,
  Trophy,
  Gift,
  Package,
  Star,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const PartnerProgram = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Scan & Earn Digital Points",
      description:
        "Every scan converts to valuable reward points automatically",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Monthly Recognition",
      description: "Top pharmacies receive exclusive recognition and bonuses",
      color: "from-emerald-500 to-lime-500",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Redeemable Rewards",
      description: "Convert points to gifts, discounts, and exclusive schemes",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Tracking",
      description: "Order tracking and intelligent restock reminders",
      color: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    {
      number: "50K+",
      label: "Active Pharmacies",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Points Earned",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-green-200/20 dark:border-green-700/20"
            >
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                PARTNER PROGRAM / REWARD SYSTEM
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 dark:from-white dark:via-green-100 dark:to-teal-100 bg-clip-text text-transparent mb-6 leading-tight"
            >
              Pharmacy Rewards.
              <br />
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Built for Growth.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Transform your pharmacy business with our intelligent reward
              system. Earn points, gain recognition, and unlock exclusive
              benefits designed for sustainable growth.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Modern Pharmacies
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to maximize your pharmacy's potential and
              drive sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-teal-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Pharmacy?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of pharmacies already growing with our reward
              system
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                Start Earning Points
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerProgram;
