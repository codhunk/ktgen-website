import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Zap,
    Heart,
    Shield,
    Pill,
    Baby,
    ArrowRight,
    Stethoscope
} from 'lucide-react';

const TherapeuticSegments = () => {
    const [hoveredTile, setHoveredTile] = useState(null);

    const therapySegments = [
        {
            id: 'psychiatry',
            title: 'Psychiatry',
            icon: Brain,
            description: 'Mental health solutions for comprehensive patient care',
            color: 'from-purple-500 to-indigo-600',
            darkColor: 'dark:from-purple-400 dark:to-indigo-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            borderColor: 'border-purple-200 dark:border-purple-800',
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['15+ Brands Available'],
            specialties: ['Anxiety Disorders', 'Depression', 'Sleep Disorders']
        },
        {
            id: 'pain-management',
            title: 'Pain Management',
            icon: Zap,
            description: 'Advanced pain relief medications and therapies',
            color: 'from-red-500 to-orange-600',
            darkColor: 'dark:from-red-400 dark:to-orange-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            borderColor: 'border-red-200 dark:border-red-800',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['12+ Brands Available'],
            specialties: ['Chronic Pain', 'Acute Pain', 'Inflammation']
        },
        {
            id: 'gastro',
            title: 'Gastro',
            icon: Heart,
            description: 'Digestive health and gastrointestinal treatments',
            color: 'from-green-500 to-emerald-600',
            darkColor: 'dark:from-green-400 dark:to-emerald-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            borderColor: 'border-green-200 dark:border-green-800',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['18+ Brands Available'],
            specialties: ['Digestive Disorders', 'Acid Reflux', 'IBS Treatment']
        },
        {
            id: 'antibiotics',
            title: 'Antibiotics',
            icon: Shield,
            description: 'Broad-spectrum antimicrobial solutions',
            color: 'from-blue-500 to-cyan-600',
            darkColor: 'dark:from-blue-400 dark:to-cyan-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            borderColor: 'border-blue-200 dark:border-blue-800',
            image: 'https://images.unsplash.com/photo-1585435557343-3b092031d082?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['25+ Brands Available'],
            specialties: ['Bacterial Infections', 'Respiratory Tract', 'Skin Infections']
        },
        {
            id: 'supplements',
            title: 'Supplements',
            icon: Pill,
            description: 'Nutritional supplements and wellness products',
            color: 'from-yellow-500 to-amber-600',
            darkColor: 'dark:from-yellow-400 dark:to-amber-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            borderColor: 'border-yellow-200 dark:border-yellow-800',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['20+ Brands Available'],
            specialties: ['Vitamins & Minerals', 'Protein Supplements', 'Immunity Boosters']
        },
        {
            id: 'pediatric',
            title: 'Pediatric Care',
            icon: Baby,
            description: 'Specialized medications for children and infants',
            color: 'from-pink-500 to-rose-600',
            darkColor: 'dark:from-pink-400 dark:to-rose-500',
            bgColor: 'bg-pink-50 dark:bg-pink-900/20',
            borderColor: 'border-pink-200 dark:border-pink-800',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            brands: ['10+ Brands Available'],
            specialties: ['Child-Safe Formulations', 'Growth Support', 'Vaccination Support']
        }
    ];

    const handleTileClick = (segmentId) => {
        // This would normally navigate to a dedicated page
        console.log(`Navigating to ${segmentId} page`);
        // You can replace this with your routing logic
        // e.g., router.push(`/segments/${segmentId}`) for Next.js
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2316a34a' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, threshold: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-800 mb-6">
                        <Stethoscope size={16} />
                        THERAPEUTIC SEGMENTS
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Expertise Across{' '}
                        <span className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                            Specialties
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive pharmaceutical solutions across multiple therapeutic areas,
                        delivering quality healthcare products tailored to diverse patient needs.
                    </p>
                </motion.div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {therapySegments.map((segment, index) => (
                        <motion.div
                            key={segment.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, threshold: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                            onMouseEnter={() => setHoveredTile(segment.id)}
                            onMouseLeave={() => setHoveredTile(null)}
                        >
                            <div
                                className={`
                  relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                  border ${segment.borderColor} shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 
                  cursor-pointer h-full
                `}
                                onClick={() => handleTileClick(segment.id)}
                            >
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={segment.image}
                                        alt={`${segment.title} therapy segment`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} ${segment.darkColor} opacity-80`}></div>

                                    {/* Icon Overlay */}
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <segment.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredTile === segment.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <div className="text-center text-white p-4">
                                            <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                                            <p className="text-sm font-medium">View Details</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                        {segment.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                        {segment.description}
                                    </p>

                                    {/* Brand Count */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 ${segment.bgColor} rounded-full text-xs font-medium mb-4`}>
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${segment.color}`}></div>
                                        {segment.brands[0]}
                                    </div>

                                    {/* Specialties */}
                                    <div className="space-y-1">
                                        {segment.specialties.map((specialty, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                {specialty}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Action Indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent group-hover:via-green-500 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Need detailed information about our products in specific therapeutic areas?
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <Stethoscope size={20} />
                        Request Product Catalog
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TherapeuticSegments;