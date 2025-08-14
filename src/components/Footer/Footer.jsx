import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Manmed Health Pvt LTD
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Revolutionizing healthcare with innovation, compassion, and
                integrity. Trusted care, delivered with precision.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>📍</span>{" "}
                  <span>123 Health Street, Wellness City, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span> <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span> <span>support@manmedhealth.com</span>
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4 text-2xl">
                {/* Social media icons (using emojis for simplicity, replace with actual Lucide icons or SVGs if available) */}
                <a href="#" className="hover:text-white transition">
                  🌐
                </a>{" "}
                {/* Globe for website/general */}
                <a href="#" className="hover:text-white transition">
                  📘
                </a>{" "}
                {/* Book for Facebook */}
                <a href="#" className="hover:text-white transition">
                  📸
                </a>{" "}
                {/* Camera for Instagram */}
                <a href="#" className="hover:text-white transition">
                  💼
                </a>{" "}
                {/* Briefcase for LinkedIn */}
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Manmed Health Pvt LTD. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
