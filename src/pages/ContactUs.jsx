import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const tabs = ["General", "Sales", "Support", "Careers"];

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("Careers");

  return (
    <section className="w-full text-white overflow-hidden bg-[#f4f4f5]">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] flex items-center justify-center">
        <img
          src="/images/slider-bg.jpg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-300">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </div>

      {/* Career Inquiry */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-6 bg-[#cacaca] text-black">
        <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {activeTab} Inquiry
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-xl font-semibold">
              Send Message
            </button>
          </form>
        </div>
        <div className="text-left">
          <img
            src="/images/team_building.jpg"
            alt="Careers"
            className="rounded-2xl shadow-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
          <p className="text-gray-700">
            We’re always looking for passionate people to join us. Whether
            you're into development, design, or marketing — we want to hear from
            you! At Manmed Vitality Core, we’re a community of passionate
            individuals united by a shared mission: to innovate, empower, and
            transform lives through holistic wellness solutions. Whether you're
            a seasoned professional or a driven newcomer.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 bg-gray-50 text-black">
        <div>
          <img
            src="/images/workshop.jpg"
            alt="Support"
            className="rounded-2xl shadow-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2">We're Here to Help</h3>
          <p>
            Have any questions or need help? Reach out and we'll assist you as
            soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Registered Office</h2>
            <div className="flex gap-4 items-start">
              <MapPin className="text-cyan-500" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">
                  {/* A-29 Block B, Sector Pi 1 & 2, Birondi Chakrasenpur, Greater
                  Noida, Uttar Pradesh 201310 */}
                  H. No. A-29, Ground Floor, H-1 Block B,
                  Sector-Pi/2, Alpha,<br/> Greater Noida, Noida, 
                  Gautam Buddha Nagar - 201310, Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="text-cyan-500" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+91 9310337574</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="text-cyan-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">registered@yourcompany.com</p>
              </div>
            </div>
          </div>
          {/* <div className="space-y-6">
            <h2 className="text-2xl font-bold">Corporate Office</h2>
            <div className="flex gap-4 items-start">
              <MapPin className="text-cyan-500" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">5th Floor, Tech Hub Tower, Tower B, Cybercity, Gurugram, Haryana 122002</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="text-cyan-500" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+91 98123 45678</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="text-cyan-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">corporate@yourcompany.com</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Follow Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-6 mb-6">
            <a href="#" className="hover:text-cyan-400">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/manmedhealth/" className="hover:text-cyan-400">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/posts/manmed-health_happyteachersday-nationalteachersday-teachersday2025-activity-7369693664584867842-Bm_F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADo7t-4BXl0vkP_G1xFPyLWvAqVzcT_QSIs" className="hover:text-cyan-400">
              <Linkedin />
            </a>
          </div>
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 rounded-l-xl bg-white/10 text-white border border-white/20"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-r-xl hover:from-cyan-600 hover:to-purple-600">
              Join
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p>
                Follow us on social media to keep up with the latest news,
                updates, and career opportunities.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p>
                Follow us on social media to keep up with the latest news,
                updates, and career opportunities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/j5.jpg"
            alt="Social"
            className="rounded-2xl shadow-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
          <p>
            Follow us on social media to keep up with the latest news, updates,
            and career opportunities.
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full py-20 px-6 bg-[#111827]">
        <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            // src="https://earth.google.com/web/embed?authuser=0&hl=en&v=2&mid=1Sx123ABCXYZ#lat=28.4744&lng=77.5030&alt=500&tilt=45&heading=60"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3507.0925107665757!2d77.5203415!3d28.4767605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebdec5bab77f%3A0x940700cebd9d7ccb!2sWebDuality%20Technologies%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1727112469109!5m2!1sen!2sin"
            className="w-full h-96"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
