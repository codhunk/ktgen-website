import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo/logo_transparent.png";
import { GoHomeFill } from "react-icons/go";
import { FaProductHunt } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { MdLocalPharmacy } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useDarkMode } from "../../hooks/UseDarkMode/useDarkMode";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Navbar.module.css";

const navList = [
  { name: "Home", link: "/", icon: <GoHomeFill /> },
  // { name: "About Us", link: "/about", icon: <RiTeamFill /> },
  { name: "Products", link: "/products", icon: <FaProductHunt /> },
  
  {
    name: "Pharmacies",
    link: "/doctors-pharmacies",
    icon: <MdLocalPharmacy />,
  },
  // { name: "Pregnancy Guide", link: "/pregnancy", icon: <RiTeamFill /> },
  {
    name: "Company",
    link: "/doctors-pharmacies",
    icon: <RiTeamFill />,
    subLink: [
      { name: "CSR", link: "/csr", icon: <RiTeamFill /> },
      { name: "Media", link: "/media", icon: <SiWikimediafoundation /> },
      { name: "Careers", link: "/careers", icon: <MdOutlineWork /> },
      { name: "Compaign", link: "/compaign", icon: <RiTeamFill /> },
    ],
  },
  // { name: "Contact", link: "/contact", icon: <GoHomeFill /> },
];

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [showVerticalLine, setShowVerticalLine] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVerticalLine(true);
      setTimeout(() => {
        setShowVerticalLine(false);
      }, 2000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="fixed top-0 z-10 w-full flex justify-center items-center py-8 px-2">
      <ul className="w-[95%] flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="w-[100px] animate-slideUp opacity-0 animation-delay-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              draggable="false"
              className="w-[100px]"
            />
          </NavLink>
        </div>

        {/* Middle Section - NavList */}
        <div className="flex justify-center items-center gap-1 relative bg-[rgba(43,87,107,0.34)] backdrop-blur-sm rounded-full p-1 shadow-md">
          {/* {showVerticalLine && (
            <div
              className={`${styles.verticalLine} absolute top-0 right-0 h-full w-[2px]`}
            ></div>
          )} */}
          {navList.map((n, i) => (
            <li
              key={i}
              className="relative group flex flex-col items-center opacity-0 min-w-24 translate-x-[-20px] animate-slideIn"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <NavLink
                to={n.link}
                className={`flex flex-col items-center ${styles.link}`}
              >
                <span
                  className={`absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-2 transition-all duration-300 ease-in-out backdrop-blur-lg p-1 rounded-full text-md ${styles.icon}`}
                >
                  {n.icon}
                </span>

                <span className={styles.animatedText}>{n.name}</span>
              </NavLink>

              {/* Submenu for dropdown */}
              {n.subLink && (
                <ul className="absolute top-full mt-2 bg-[rgba(14,29,36,0.88)] rounded shadow-lg hidden group-hover:flex flex-col z-10">
                  {n.subLink.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={sub.link}
                        className="px-4 py-2 flex items-center gap-2 hover:bg-gray-700 text-white"
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

        {/* Right Section - Language & Dark Mode */}
        <div className="flex items-center gap-3 opacity-0 animate-fadeIn animation-delay-1000">
          <button
            className="p-2 border border-dashed rounded-full border-slate-200 text-white"
            onClick={toggleDarkMode}
          >
            {isDark ? <MdWbSunny /> : <FaMoon />}
          </button>
          <LanguageSelector />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
