"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "./hooks/useDarkMode"; // Adjust path as needed

import painkillerImg from "./assets/leaders/painkiller.png";
import herbalImg from "./assets/leaders/herbal.png";
import vitaminImg from "./assets/leaders/vitaminC.png";
import antibioticImg from "./assets/leaders/antibiotics.png";
import coughImg from "./assets/leaders/cough.png";
import multivitaminImg from "./assets/leaders/multivitamins.png";
import heroimg from "./assets/leaders/producthero.png";

const featuredProducts = [
  {
    name: "Painkiller",
    image: painkillerImg,
    description: "Fast relief from pain. Trusted by thousands of customers.",
  },
  {
    name: "Vitamin C",
    image: vitaminImg,
    description: "Boost your immunity with high-quality Vitamin C.",
  },
  {
    name: "Multivitamin",
    image: multivitaminImg,
    description: "Get your complete daily nutrition with our multivitamins.",
  },
];

const products = [
  { name: "Painkiller", image: painkillerImg, description: "Fast relief from pain." },
  { name: "Herbal", image: herbalImg, description: "Natural and organic remedies." },
  { name: "Vitamin C", image: vitaminImg, description: "Boost your immunity." },
  { name: "Antibiotic", image: antibioticImg, description: "Fight bacterial infections." },
  { name: "Cough", image: coughImg, description: "Relieve cough and throat irritation." },
  { name: "Multivitamin", image: multivitaminImg, description: "Complete daily nutrition." },
  { name: "Antibiotic", image: antibioticImg, description: "Fight bacterial infections." },
  { name: "Cough", image: coughImg, description: "Relieve cough and throat irritation." },
];

const categories = [
  { name: "Pain Relief", description: "Medicines for pain relief", color: "from-red-400 to-red-200" },
  { name: "Immunity", description: "Boost your immune system", color: "from-green-400 to-green-200" },
  { name: "Digestive Health", description: "Aid digestion naturally", color: "from-yellow-400 to-yellow-200" },
  { name: "Herbal", description: "Organic and herbal products", color: "from-purple-400 to-purple-200" },
];

const ProductCard = ({ product }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-72 h-90 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 cursor-pointer transition-transform hover:shadow-2xl"
  >
    <motion.img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-contain mb-4 rounded-xl"
      whileHover={{ rotate: 10 }}
    />
    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
    <p className="text-center">{product.description}</p>
  </motion.div>
);

const ProductsPage = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = featuredProducts[index];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">

      {/* Dark/Light Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[100vh] text-white flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Manmed Health</h1>
          <p className="text-2xl mb-6">Your Health, Our Priority</p>
          <button onClick={() => {
            const el = document.getElementById("our-products");
            el?.scrollIntoView({ behavior: "smooth" });
          }} className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="our-products" className="py-14 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-14">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-14">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${cat.color} text-white text-center`}
            >
              <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
              <p>{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-14">Featured Product</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.name}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-72 h-90 object-contain rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="max-w-md">
              <h3 className="text-3xl font-semibold mb-4">{currentProduct.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{currentProduct.description}</p>
              <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition dark:bg-blue-600 dark:hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Subscribe to our newsletter for latest products and health tips.</p>
        <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white mb-4 sm:mb-0 sm:mr-2 flex-1"
          />
          <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition dark:bg-blue-600 dark:hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-700 dark:bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} Manmed Health. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductsPage;
