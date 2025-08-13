import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import testVideo from './testone.mp4'


const StatCard = ({ target, suffix, title, description, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.2, once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-4 p-6"
        >
            <CountingNumber target={target} suffix={suffix} />

            <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.5 }}
                className="text-xl md:text-2xl font-bold text-gray-800"
            >
                {title}
            </motion.h3>

            {description && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: delay + 0.7 }}
                    className="text-sm md:text-base text-gray-600 max-w-xs leading-relaxed"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

const CountingNumber = ({ target, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.3, once: true });

    useEffect(() => {
        if (inView) {
            let startTime;
            let animationId;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * target);

                setCount(currentCount);

                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                }
            };

            animationId = requestAnimationFrame(animate);

            return () => {
                if (animationId) cancelAnimationFrame(animationId);
            };
        }
    }, [inView, target, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-orange-300 bg-clip-text text-transparent"
        >
            {count}{suffix}
        </motion.div>
    );
};

const ProductBottle = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.3, once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center"
        >
            <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
                className="w-48 h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
            >
                {/* Product  */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-lg"
                >
                    <div className="text-2xl font-bold text-gray-800 mb-1">GB</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">DAILY</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">PROBIOTICS</div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-8 bg-gradient-to-r from-yellow-300 to-orange-300 rounded mt-2 flex items-center justify-center"
                    >
                        <span className="text-xs font-semibold text-gray-700">BALANCE</span>
                    </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-300/50 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            left: `${20 + i * 10}%`,
                            top: `${60 + (i % 2) * 10}%`,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default function GutMicrobiomeUI() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { threshold: 0.5, once: true });

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-10">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 2 }}
                    className="w-full h-full max-w-6xl"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src={testVideo}
                    />

                </motion.div>



            </div>


            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Title */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: -30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 max-w-4xl mx-auto leading-tight">
                        Your Gut Microbiome Is At The Core Of Your Well Being.
                    </h1>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    <StatCard
                        target={500}
                        suffix="+"
                        title="Trust Brand"
                        delay={0.2}
                    />

                    <div className="row-span-2"></div>

                    <StatCard
                        target={1200}
                        suffix="+"
                        title="Pharmacy"
                        delay={0.4}
                    />

                    <StatCard
                        target={250}
                        suffix="+"
                        title="Town and Village"
                        delay={0.6}
                    />

                    {/* Keep last unchanged percentage */}
                    <StatCard
                        target={80}
                        suffix="%"
                        title="Your Mental Health"
                        delay={0.8}
                    />
                </div>



                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full opacity-20"
                />

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-10 w-20 h-20 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-15"
                />
            </div>


        </div>
    );
}



