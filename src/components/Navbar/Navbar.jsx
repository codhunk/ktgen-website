import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo/logo_transparent_light.png";
import { GoHomeFill } from "react-icons/go";
import { FaProductHunt } from "react-icons/fa";
import { RiPsychotherapyFill, RiTeamFill } from "react-icons/ri";
import { MdLocalPharmacy, MdOutlineWork } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useDarkMode } from "../../hooks/UseDarkMode/useDarkMode";
import { LiaAccusoft } from "react-icons/lia";

const Navbar = () => {
  const navList = [
    { name: "Home", link: "/", icon: <GoHomeFill /> },
    { name: "Products", link: "/products", icon: <FaProductHunt /> },
    {
      name: "Pharmacies",
      link: "/doctors-pharmacies",
      icon: <MdLocalPharmacy />,
      subLink: [
        {
          name: "Doctors & Pharmacies",
          link: "/doctors-pharmacies",
          icon: <RiTeamFill />,
        },
        { name: "Therapy", link: "/therapy", icon: <RiPsychotherapyFill /> },
        {
          name: "Pregnancy Guide",
          link: "/pregnency-sec",
          icon: <RiTeamFill />,
        },
        { name: "Campaign", link: "/campaign", icon: <RiTeamFill /> },
      ],
    },
    {
      name: "Company",
      link: "/company",
      icon: <RiTeamFill />,
      subLink: [
        { name: "CSR", link: "/csr", icon: <RiTeamFill /> },
        { name: "Media", link: "/gallery", icon: <SiWikimediafoundation /> },
        { name: "Careers", link: "/career", icon: <MdOutlineWork /> },
        { name: "Campaign", link: "/campaign-sec", icon: <RiTeamFill /> },
      ],
    },
    { name: "About Us", link: "/about", icon: <RiTeamFill /> },
    { name: "Contact", link: "/contact", icon: <GoHomeFill /> },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full fixed z-10 top-0 flex justify-center items-center text-sm font-semibold">
      <div className="w-[95%] 2xl:max-w-6xl flex justify-between items-center py-4">
        {/* Left Section: Logo + Nav */}
        <ul className="flex justify-center items-center gap-10">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" draggable="false" className="w-[80px]" />
          </NavLink>

          <div className="flex justify-center items-center gap-2">
            {navList.map((n, i) => (
              <li
                key={i}
                className="relative group flex justify-center items-center flex-col"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={n.link}
                  className={({ isActive }) =>
                    `relative group flex items-center text-white px-5 py-1 gap-2 rounded-full transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-md ${
                      isActive
                        ? "bg-[#005c63] shadow-md"
                        : "bg-[#ffffff17] hover:bg-[#005c63] hover:shadow-md"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Icon slide-in from left */}
                      <span
                        className={`
              absolute left-1 transition-all duration-300 ease-out text-slate-900 bg-white p-1 rounded-full
              ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }
            `}
                      >
                        {n.icon}
                      </span>

                      {/* Label slide-right */}
                      <span
                        className={`transition-transform duration-300 ease-out ${
                          isActive
                            ? "translate-x-3"
                            : "group-hover:translate-x-3"
                        }`}
                      >
                        {n.name}
                      </span>
                    </>
                  )}
                </NavLink>

                {/* Submenu (only visible if current index matches) */}
                {n.subLink && (
                  <ul
                    className={`absolute top-full mt-0.5 right-0 w-40 bg-[#005c633b] backdrop-blur-md rounded-lg shadow-lg z-20 transform transition-all duration-300 ease-in-out ${
                      activeDropdown === i
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {n.subLink.map((sub, j) => (
                      <li key={j}>
                        <NavLink
                          to={sub.link}
                          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.icon}
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>
        </ul>

        {/* Right Section (Theme toggle + Language dropdown) */}
        <ul className="flex justify-center items-center gap-4 text-white">
          {/* Theme Toggle */}
          <button
            className="p-2 border border-dashed rounded-full border-slate-200 bg-slate-950 transition-all duration-300 hover:scale-105"
            onClick={toggleDarkMode}
          >
            <span className="transition-transform duration-300 ease-in-out transform">
              {isDark ? (
                <MdWbSunny className="text-yellow-300 scale-110" />
              ) : (
                <FaMoon className="text-slate-300 scale-110" />
              )}
            </span>
          </button>

          {/* Language Selector Dropdown */}
          <li className="p-2 border border-dashed rounded-full border-slate-200 bg-slate-950 relative cursor-pointer">
            <span
              className="transition-transform duration-300 ease-in-out transform"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RxCross1 className="rotate-180 scale-105 transition-all duration-300" />
              ) : (
                <GiHamburgerMenu className="scale-105 transition-all duration-300" />
              )}
            </span>

            {/* Dropdown with fade & slide-down */}
            <div
              className={`absolute top-full right-0 mt-2 w-36 bg-[#005c633b] backdrop-blur-md rounded-lg shadow-lg z-20 transform transition-all duration-300 ease-in-out ${
                open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col justify-center items-center">
                <LanguageSelector />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
