import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMoon,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useDarkMode } from "../../hooks/UseDarkMode/useDarkMode";
import logo from "../../logo/ktg.png";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoverTimeout = useRef(null);

  const menu = [
    { name: "ABOUT US", link: "/about" },
    {
      name: "LIFE AT KT GEN",
      sub: [
        { name: "Our Story", link: "/story" },
        { name: "Careers", link: "/career" },
        { name: "Media / Gallery", link: "/gallery" },
        { name: "CSR", link: "/csr" },
        { name: "Our Mission", link: "/ourmission" },
      ],
    },
    { name: "CAMPAIGN", link: "/campaign-sec" },
    {
      name: "PHARMACY",
      sub: [
        { name: "Therapy Area", link: "/therapy" },
        { name: "Doctors & Pharmacies", link: "/doctors-pharmacies" },
      ],
    },
    { name: "CONTACT US", link: "/contact" },
  ];

  const handleEnter = (i) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(i);
  };

  const handleLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  return (
    <header className="fixed top-0 w-full z-50">

      {/* TOP BAR */}
      <div className="bg-[#020617] text-white text-[11px] border-b border-[#715923]/30">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#715923]">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
          <div className="hidden sm:flex items-center gap-6 tracking-wide">
            <span>📞 +91 7899312233</span>
            <span>📞 +91 7899312233</span>
          </div>
          <button className="bg-[#715923] text-white px-4 py-1 rounded font-semibold hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="bg-[#020617] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} className="w-10" alt="logo" />
            <div>
              <p className="text-[10px] text-gray-400">THIS IS</p>
              <p className="font-bold text-[#715923]">KT GEN</p>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {menu.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
              >
                {item.sub ? (
                  <button className="flex items-center gap-1 hover:text-[#715923] transition">
                    {item.name}
                    <span className="text-xs">▾</span>
                  </button>
                ) : (
                  <NavLink to={item.link} className="hover:text-[#715923] transition">
                    {item.name}
                  </NavLink>
                )}

                {/* GOLD SUBMENU */}
                {item.sub && (
                  <div
                    onMouseEnter={() => {
                      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                    }}
                    onMouseLeave={handleLeave}
                    className={`absolute top-full mt-4 w-[320px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-[#715923]/20 transition-all duration-300 origin-top
                    ${
                      openDropdown === i
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="p-3 grid grid-cols-1 divide-y divide-[#715923]/20">
                      {item.sub.map((s, j) => (
                        <NavLink
                          key={j}
                          to={s.link}
                          className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#715923] transition"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#715923]/10 flex items-center justify-center group-hover:bg-white/20 transition">
                            <span className="text-[#715923] group-hover:text-white text-lg">●</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 group-hover:text-white">
                              {s.name}
                            </p>
                            <p className="text-xs text-gray-500 group-hover:text-white/80">
                              Learn more about {s.name.toLowerCase()}
                            </p>
                          </div>
                          <span className="text-[#715923] group-hover:text-white transition">→</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode}>
              {isDark ? <MdWbSunny /> : <FaMoon />}
            </button>
            <LanguageSelector />
            <FaUser />
            <FaShoppingBag />
            <button className="lg:hidden" onClick={() => setOpenMenu(true)}>
              <RxHamburgerMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (unchanged logic) */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/60 z-50 flex">
          <div className="bg-white w-80 h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between bg-[#020617] p-4 border-b">
              <img src={logo} className="w-20" alt="logo" />
              <button onClick={() => setOpenMenu(false)}>
                <RxCross1 className="text-white text-xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 text-sm">
              {menu.map((item, i) => (
                <div key={i} className="border-b last:border-none pb-2">
                  {item.sub ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                      className="w-full flex justify-between items-center py-3 font-semibold text-gray-800"
                    >
                      {item.name}
                      <span className={openDropdown === i ? "rotate-180" : ""}>▾</span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.link}
                      onClick={() => setOpenMenu(false)}
                      className="block py-3 font-semibold text-gray-800"
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {item.sub && openDropdown === i && (
                    <div className="ml-4 mt-1 space-y-2">
                      {item.sub.map((sub, j) => (
                        <NavLink
                          key={j}
                          to={sub.link}
                          onClick={() => setOpenMenu(false)}
                          className="block py-2 text-gray-600 hover:text-[#715923]"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex justify-between items-center">
              <button onClick={toggleDarkMode}>
                {isDark ? <MdWbSunny /> : <FaMoon />}
              </button>
              <LanguageSelector />
            </div>
          </div>

          <div className="flex-1" onClick={() => setOpenMenu(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
