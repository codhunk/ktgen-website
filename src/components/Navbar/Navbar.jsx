import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../logo/logo_transparent_light.png";
import { GoHomeFill } from "react-icons/go";
import { FaProductHunt } from "react-icons/fa";
import { RiPsychotherapyFill, RiTeamFill } from "react-icons/ri";
import { MdLocalPharmacy, MdOutlineWork } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxChevronDown, RxChevronUp, RxCross1 } from "react-icons/rx";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useDarkMode } from "../../hooks/UseDarkMode/useDarkMode";
import { LiaAccusoft } from "react-icons/lia";

const Navbar = () => {
  const navList = [
    { name: "Home", link: "/", icon: <GoHomeFill /> },
    { name: "Products", link: "/products", icon: <FaProductHunt /> },
    {
      name: "Life at ManMed",
      link: "",
      icon: <RiTeamFill />,
      subLink: [
        { name: "Our Story", link: "/story", icon: <MdOutlineWork /> },
        { name: "Careers", link: "/career", icon: <MdOutlineWork /> },
        {
          name: "Media/Gallery",
          link: "/gallery",
          icon: <SiWikimediafoundation />,
        },
        { name: "CSR", link: "/csr", icon: <RiTeamFill /> },
      ],
    },
    {
      name: "Pregnancy Guide",
      link: "/pregnency-sec",
      icon: <RiTeamFill />,
    },
    { name: "Compaign", link: "/campaign-sec", icon: <RiTeamFill /> },
    { name: "About Us", link: "/about", icon: <RiTeamFill /> },
    {
      name: "Pharmacies",
      link: "",
      icon: <MdLocalPharmacy />,
      subLink: [
        {
          name: "Therapy Areas",
          link: "/therapy",
          icon: <RiPsychotherapyFill />,
        },
        {
          name: "Doctors & Pharmacies",
          link: "/doctors-pharmacies",
          icon: <RiTeamFill />,
        },
      ],
    },
    { name: "Contact Us", link: "/contact", icon: <GoHomeFill /> },
  ];

  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDark, toggleDarkMode } = useDarkMode();
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  const isSubActive = (n) => {
    return n?.subLink?.some((sub) => location.pathname.includes(sub.link));
  };

  const [scrollNav, setScrollnav] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll value when the user scrolls
      setScrollnav(window.scrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 flex justify-center items-center text-sm font-semibold backdrop-blur-lg transition-colors duration-500 ease-in-out
    ${
      scrollNav === 0
        ? "bg-transparent"
        : "bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80"
    }`}
      style={{ zIndex: 999999 }}
    >
      <div className="w-[95%] 2xl:max-w-7xl flex justify-between items-center py-4">
        {/* Left Section: Logo + Nav */}
        <ul className="flex justify-center items-center gap-10">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" draggable="false" className="w-[80px]" />
          </NavLink>
        </ul>

        <ul className="hidden [@media(min-width:1200px)]:flex justify-center items-center gap-2">
          {navList.map((n, i) => (
            <li
              key={i}
              className="relative group flex justify-center items-center flex-col opacity-0 animate-slide-in-left"
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {n?.subLink ? (
                <div
                  className={`relative group flex items-center text-white px-5 py-1 gap-2 rounded-full transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-md cursor-pointer ${
                    isSubActive(n)
                      ? "bg-[#005c63] shadow-md"
                      : "bg-[#ffffff17] hover:bg-[#005c63] hover:shadow-md"
                  }`}
                >
                  <>
                    {/* Icon slide-in from left */}
                    <span
                      className={`
              absolute left-1 transition-all duration-300 ease-out text-slate-900 bg-white p-1 rounded-full
              ${
                isSubActive(n)
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
                        isSubActive(n)
                          ? "translate-x-3"
                          : "group-hover:translate-x-3"
                      }`}
                    >
                      {n.name}
                    </span>
                  </>
                </div>
              ) : (
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
              )}

              {/* Submenu (only visible if current index matches) */}
              {n.subLink && (
                <ul
                  className={`absolute top-full mt-0.5 right-0 w-40 bg-[#06181ae7] backdrop-blur-md rounded-lg shadow-lg z-20 transform transition-all duration-300 ease-in-out ${
                    activeDropdown === i
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {n.subLink.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={sub.link}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 transition duration-200  ${
                            isActive ? "bg-[#005c63]" : "transparent"
                          }`
                        }
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
        </ul>

        {/* Right Section (Theme toggle + Language dropdown) */}
        <ul className="flex justify-center items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="p-2 border border-dashed rounded-full border-gray-800 dark:border-white dark:bg-gray-800 bg-[#ffffffec] transition-all duration-300 hover:scale-105"
            onClick={toggleDarkMode}
          >
            <span className="transition-transform duration-300 ease-in-out transform">
              {isDark ? (
                <MdWbSunny className="scale-110 text-white" />
              ) : (
                <FaMoon className="scale-110 text-gray-800" />
              )}
            </span>
          </button>

          {/* Language Selector Dropdown */}
          <li className="p-2">
            <LanguageSelector />
          </li>

          {/* Hamburger toggle (only visible on md and below) */}
          <button
            className="relative w-5 h-5 hidden [@media(max-width:1200px)]:flex flex-col justify-between items-center"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                showSidebar ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                showSidebar ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                showSidebar ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </ul>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 bg-[#fffffff6] dark:bg-[#000000f1] backdrop-blur-lg shadow-lg z-100 transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "100vh" }}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <img src={logo} alt="logo" className="w-20" draggable="false" />
          <button
            className="p-2 text-gray-800 dark:text-white"
            onClick={() => setShowSidebar(false)}
          >
            <RxCross1 className="w-5 h-5" />
          </button>
        </div>

        <ul
          className="px-4 py-4 flex flex-col gap-2 overflow-auto my-2"
          style={{ height: "calc(100vh - 81px)" }}
        >
          {navList.map((n, i) => (
            <li key={i}>
              {n?.subLink ? (
                <div
                  className={`w-full flex items-center rounded-md cursor-pointer ${
                    isSubActive(n)
                      ? "bg-[#005c63] text-white"
                      : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent sidebar close
                    toggleDropdown(i);
                  }}
                >
                  <span className="flex items-center gap-3 px-4 py-2 rounded-md transition duration-200">
                    {n.icon}
                    {n.name}
                  </span>

                  <button className="ml-auto text-gray-800 dark:text-white px-4 py-2">
                    {openDropdownIndex === i ? (
                      <RxChevronUp />
                    ) : (
                      <RxChevronDown />
                    )}
                  </button>
                </div>
              ) : (
                <NavLink
                  to={n.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-md transition duration-200 ${
                      isActive
                        ? "bg-[#005c63] text-white"
                        : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                  onClick={() => setShowSidebar(false)} // Close on click
                >
                  {n.icon}
                  {n.name}
                </NavLink>
              )}

              {n.subLink && openDropdownIndex === i && (
                <ul className="ml-8 mt-1 space-y-1">
                  {n.subLink.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={sub.link}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 py-1 text-sm rounded-md ${
                            isActive
                              ? "bg-[#005c63] text-white"
                              : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`
                        }
                        onClick={() => setShowSidebar(false)}
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
