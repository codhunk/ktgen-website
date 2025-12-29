"use client";
import React, { useState } from "react";
import { useDarkMode } from "../hooks/UseDarkMode/useDarkMode";
import joinus from "./assets/leaders/joinus.jpg"
const jobOpenings = [
  {
    title: "Research Scientist",
    location: "Noida, India",
    type: "Full-time",
    description:
      "Lead research projects in drug development, collaborate with cross-functional teams, and publish findings.",
  },
  {
    title: "Quality Assurance Specialist",
    location: "Noida, India",
    type: "Full-time",
    description:
      "Ensure compliance with pharmaceutical regulations, conduct audits, and maintain product quality standards.",
  },
  {
    title: "Clinical Research Associate",
    location: "Noida, India",
    type: "Full-time",
    description:
      "Monitor clinical trials, ensure data accuracy, and coordinate with trial sites.",
  },
  {
    title: "Pharmaceutical Sales Representative",
    location: "Noida, India",
    type: "Full-time",
    description:
      "Promote and sell pharmaceutical products to healthcare professionals, build relationships with clients, and achieve sales targets.",
  },
];

const Career = () => {
  const { isDark } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormData({ name: "", email: "", resume: null, message: "" });
  };

  return (
    <main className={`pt-[45px] ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-800"}`}>
      {/* Hero Section */}
      <div className="flex w-full justify-center mt-12">
        <section
          className={`relative w-full md:w-[100%] h-[400px] flex items-center justify-center  overflow-hidden shadow-lg transition-colors duration-300`}
          style={{ backgroundImage: `url(${joinus})`, backgroundSize: "cover", backgroundPosition: "center", }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg md:text-xl font-medium mb-6">
              Drive Innovation in Pharmaceutical Research and Care
            </p>
            {/* <a
              href="#open-positions"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition"
            >
              View Open Positions
            </a> */}
          </div>
        </section>
      </div>

      {/* About Working With Us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Why Work With Us</h2>
        <p className="text-center text-gray-800 dark:text-white leading-relaxed max-w-4xl mx-auto">
          At KT Gen Pharmaceuticals, we are committed to innovation, collaboration, and improving lives. We
          foster a culture of growth, learning, and inclusivity while providing exciting
          opportunities in pharmaceutical research, clinical development, and quality assurance.
        </p>
      </section>

      {/* Open Positions */}
      {/* <section id="open-positions" className="bg-gray-400 dark:bg-[#1d1d1d] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <h2 className="text-3xl font-bold text-center mb-8  text-black dark:text-gray-100">Current Openings</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl text-black dark:text-gray-100 font-bold mb-2">{job.title}</h3>
                <h4 className=" text-xl font-semibold text-black dark:text-gray-300 mb-2">
                  {job.location} • {job.type}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                <button
                  onClick={() => {
                    const el = document.getElementById("apply-now");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition"
                >
                  Apply Now
                </button>

              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center  ">Benefits & Growth</h2>
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2  text-black dark:text-gray-100">Career Growth</h3>
            <p className="text-gray-700 dark:text-gray-300">Opportunities for continuous learning and promotions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2  text-black dark:text-gray-100">Health & Wellness</h3>
            <p className="text-gray-700 dark:text-gray-300">Comprehensive health plans and wellness programs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-xl mb-2  text-black dark:text-gray-100">Innovative Culture</h3>
            <p className="text-gray-700 dark:text-gray-300">Collaborate with experts in cutting-edge pharmaceutical research.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center  text-black dark:text-gray-100">What Our Employees Say</h2>
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "Working at KT Gen Pharmaceuticals has allowed me to grow professionally and contribute to
                meaningful projects in healthcare."
              </p>
              <p className="font-semibold  text-black dark:text-gray-100">- Amit Tyagi, Research Scientist</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "A collaborative and innovative environment that motivates me every day."
              </p>
              <p className="font-semibold  text-black dark:text-gray-100">- Priya Sharma, QA Specialist</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      <section id="apply-now" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Apply Now</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
           <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="Role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-800 dark:text-white"
            />
            <input
              type="text"
              name="Skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full text-gray-700 dark:text-white"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Message"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Footer */}

    </main>
  );
};

export default Career;
