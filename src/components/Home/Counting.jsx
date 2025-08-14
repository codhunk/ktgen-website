import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin, Clock, Shield, Pill } from "lucide-react";

const AnimatedCounter = ({
  value,
  duration = 5000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * value);

        setCount(currentValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, value, duration]);

  return (
    <span ref={nodeRef} className="font-bold">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  prefix,
  label,
  delay,
  showValue,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl dark:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: delay + 0.2,
            type: "spring",
            bounce: 0.4,
          }}
          className="mb-4 p-4 bg-gradient-to-br from-green-500 to-teal-600 dark:from-emerald-500 dark:to-green-600 rounded-full text-white"
        >
          <Icon size={32} className="md:w-8 md:h-8" />
        </motion.div>

        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-2">
          {showValue !== false && (
            <AnimatedCounter
              value={value}
              suffix={suffix}
              prefix={prefix}
              duration={5000}
            />
          )}

          {showValue === false && <span className="font-bold">{prefix}</span>}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base font-medium leading-relaxed">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const Counting = () => {
  const countingData = [
    {
      icon: Building2,
      value: 500,
      suffix: "+",
      label: "Trusted Brands",
      delay: 0,
    },
    {
      icon: Pill,
      value: 1200,
      suffix: "+",
      label: "Partner Pharmacies",
      delay: 0.1,
    },
    {
      icon: MapPin,
      value: 250,
      suffix: "+",
      label: "Towns & Villages",
      delay: 0.2,
    },
    {
      icon: Clock,
      value: 99,
      suffix: "%",
      label: "Timely Delivery Rate",
      delay: 0.3,
    },
    {
      icon: Shield,
      value: null,
      prefix: "WHO-GMP ",
      label: "Certified Manufacturing",
      delay: 0.4,
      showValue: false,
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 dark:text-white">
            Trust Through Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
            Our commitment to excellence reflected in the numbers that matter
            most
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {countingData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              delay={stat.delay}
              showValue={stat.showValue}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-teal-600 dark:from-emerald-400 dark:to-green-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Counting;
