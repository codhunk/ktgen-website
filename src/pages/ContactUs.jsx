import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const tabs = ["General", "Sales", "Support", "Careers"];

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("Careers");

  return (
    <section className="w-full bg-[#f5f7fb] text-gray-900 overflow-hidden">

      {/* HERO */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/slider-bg.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Build the Future Together
          </h1>
          <p className="text-gray-200 text-lg">
            Whether you’re a job seeker, partner, or customer — we’re here to help.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="relative -mt-24 z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pb-24">

        {/* FORM */}
        <div className="bg-white/95 border border-gray-200 p-10 rounded-3xl shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            {activeTab} Inquiry
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold">
              Send Message
            </button>
          </form>
        </div>

        {/* INFO CARD */}
        <div className="bg-white/95 border border-gray-200 p-10 rounded-3xl shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              KT Gen Pharmaceuticals
            </h3>
            <p className="text-gray-600 mb-8">
              A science-driven healthcare company committed to innovation, quality, and global wellness.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4">
                <MapPin className="text-cyan-500" />
                <p className="text-sm">
                  3009/1-4, 2nd Main, 17th Cross,<br />
                  Banashankari 2nd Stage, Bangalore – 560070
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-cyan-500" />
                <p className="text-sm">+91 7899312233</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-cyan-500" />
                <p className="text-sm">contact@ktgenpharmaceuticals.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-5 text-gray-600">
              <Facebook className="hover:text-cyan-500 cursor-pointer" />
              <a href="https://www.instagram.com/manmedhealth/">
                <Instagram className="hover:text-cyan-500" />
              </a>
              <a href="https://www.linkedin.com">
                <Linkedin className="hover:text-cyan-500" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
            Why Work With <span className="text-cyan-600">KT Gen</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Purpose Driven", "Every role contributes to saving and improving lives."],
              ["Career Growth", "Continuous learning and leadership development."],
              ["Innovation", "Work with AI, pharma research, and digital health."],
            ].map(([t, d], i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t}</h3>
                <p className="text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-24 bg-gradient-to-r from-cyan-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14 text-gray-800">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {["Application", "HR Review", "Interview", "Final Offer"].map((step, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-purple-600 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Join KT Gen?
        </h2>
        <p className="mb-10 text-lg">
          Work on healthcare solutions that impact millions of lives worldwide.
        </p>
        <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
          Apply Now
        </button>
      </section>

    </section>
  );
};

export default ContactUs;
