import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const tabs = ["General", "Sales", "Support", "Careers"];

const KT_GEN_MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14785.410889186642!2d77.581877!3d12.9227812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15006df80abf%3A0xf5101aff817dd7!2sKT%20Gen%20Pharmaceuticals%20Private%20limited!5e1!3m2!1sen!2sin!4v1779340949687!5m2!1sen!2sin";

const KT_GEN_MAPS_LINK =
  "https://maps.google.com/?q=KT+Gen+Pharmaceuticals+Private+Limited,Bangalore,Karnataka,India";

const ContactUs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section className="w-full bg-[#f5f7fb] text-gray-900 overflow-hidden">

      {/* ── HERO ── */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/slider-bg.jpg"
          alt="Contact KT GEN Pharmaceuticals"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/15" />
        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Get In Touch With Us
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Whether you're a job seeker, partner, or customer — we're here to help.
          </p>
        </div>
      </div>

      {/* ── CONTACT GRID (Form + Info) ── */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-16">

        {/* FORM */}
        <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Send Us a Message</h2>
          <p className="text-gray-500 text-sm mb-7">Fill out the form and we'll get back to you shortly.</p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-sm transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-sm transition"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-sm transition"
            />
            <input
              type="text"
              placeholder={`Subject — ${activeTab} Inquiry`}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-sm transition"
            />
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-sm resize-none transition"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* INFO CARD */}
        <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-lg flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">KT GEN Pharmaceuticals</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A science-driven healthcare company committed to innovation, quality, and global wellness.
              </p>
            </div>

            <div className="h-px bg-gray-100" />

            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Registered Office</p>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {t("address_full")}
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <a href="tel:+917899312233" className="text-sm hover:text-cyan-600 transition">
                  +91 78993 12233
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <a
                  href="mailto:contact@ktgenpharmaceuticals.com"
                  className="text-sm hover:text-cyan-600 transition break-all"
                >
                  contact@ktgenpharmaceuticals.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="h-px bg-gray-100 mb-6" />
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/manmedhealth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-pink-500 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAP SECTION ── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Find Us On The <span className="text-cyan-600">Map</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Visit us at our registered office in Bangalore, Karnataka
            </p>
          </div>

          {/* Map card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Info bar */}
            <div className="bg-white px-6 py-4 flex flex-wrap items-center gap-3 border-b border-gray-100">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="text-sm font-medium">KT Gen Pharmaceuticals Private Limited</span>
              </div>
              <a
                href={KT_GEN_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-semibold text-cyan-600 hover:text-cyan-700 underline underline-offset-2 transition"
              >
                Open in Google Maps ↗
              </a>
            </div>

            {/* Iframe */}
            <iframe
              title="KT Gen Pharmaceuticals Private Limited Location"
              src={KT_GEN_MAPS_URL}
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="py-16 bg-[#f5f7fb] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Work With <span className="text-cyan-600">KT GEN</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Purpose Driven", desc: "Every role contributes to saving and improving lives globally." },
              { title: "Career Growth", desc: "Continuous learning, mentorship, and leadership development." },
              { title: "Innovation", desc: "Work with cutting-edge pharma research and digital health solutions." },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold mb-5 text-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-cyan-600 transition">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-purple-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-gray-800">Our Hiring Process</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "Application", desc: "Submit your profile online" },
              { step: "HR Review", desc: "Initial screening & shortlisting" },
              { step: "Interview", desc: "Technical & culture-fit rounds" },
              { step: "Final Offer", desc: "Welcome to KT GEN!" },
            ].map(({ step, desc }, i) => (
              <div
                key={i}
                className="relative bg-white p-8 pt-10 rounded-2xl border border-gray-200 shadow-md"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm shadow-md">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step}</h3>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-center text-white px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Join KT GEN?</h2>
        <p className="mb-8 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
          Work on healthcare solutions that impact millions of lives worldwide.
        </p>
        <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
          Apply Now
        </button>
      </section>

    </section>
  );
};

export default ContactUs;
