import React from "react";
import logo from "../../logo/logo_transparent_light.png";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SiThreads } from "react-icons/si";




const Footer = () => {
  const list = [
    {
      name: "Category",
      subList: [
        { name: "Products", link: "/products" },
        {
          name: "Pregnancy Guide",
          link: "/pregnency-sec",
        },
        {
          name: "Campaign",
          link: "/campaign-sec",
        },
        { name: "Our Story", link: "/story" },
      ],
    },
    {
      name: "Life at ManMed",
      subList: [
        {
          name: "Therapy Areas",
          link: "/therapy",
        },
        {
          name: "Doctors & Pharmacies",
          link: "/doctors-pharmacies",
        },
        {
          name: "Careers",
          link: "/career",
        },
        {
          name: "CSR",
          link: "/csr",
        },
      ],
    },
    {
      name: "Information",
      subList: [
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
        {
          name: "Terms & Conditions",
          link: "/terms-conditions",
        },
        {
          name: "Privacy Policy",
          link: "/privacy-policy",
        },
      ],
    },
  ];
  return (
    <>
      {/* Footer Outer Sectrion */}
      <div className="w-full flex justify-center items-center bg-gradient-to-t from-black via-gray-900 to-gray-800">
        <div className="w-[90%] md:w-[95%] 2xl:max-w-7xl py-12 flex flex-col gap-5">
          <div className="w-full  flex flex-col gap-10">
            {/* Footer Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
              {/* Logo & Description */}
              <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 mx-2 md:mx-0">
                <section className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[60px]"
                    draggable="false"
                  />
                  <h2 className="text-3xl font-bold text-white">
                    Manmed Health
                  </h2>
                </section>
                <p className="text-md text-slate-200 md:ml-2 w-full md:w-[90%]">
                  Delivering high-quality medicines that are accessible,
                  affordable, and unforgettable — because your health deserves
                  nothing less.
                </p>
              </div>

              {/* Footer Links */}
              {list.map((l, i) => (
                <div key={i} className="flex flex-col gap-3 col-span-1">
                  <span className="text-lg text-white font-semibold">
                    {l.name}
                  </span>
                  {l.subList.map((ls, idx) => (
                    <Link
                      to={ls.link}
                      key={idx}
                      className="text-[1rem] text-slate-200 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {ls.name}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Registered Office */}
              <div className="flex flex-col gap-3 col-span-1 lg:col-span-2">
                <span className="text-lg text-white font-semibold">
                  Registered Office
                </span>
                <Link className="flex items-start gap-2 text-[1rem] text-slate-200 hover:text-indigo-400">
                  <MdLocationPin size={38} className="w-fit h-fit mt-1" />
                  <span>
                    H. No. A-29, Ground Floor, H-1 Block B, 
                    Sector-Pi/2, Alpha, Greater Noida.
                  </span>
                </Link>
                <Link
                  to="tel:+919310337574"
                  className="flex items-center gap-2 text-[1rem] text-slate-200 hover:text-indigo-400"
                >
                  <FaPhoneAlt size={16} className="h-fit" />
                  <span>+91 9310337574</span>
                </Link>
                <Link
                  to="mailto:contact@manmedhealth.com"
                  className="flex items-center gap-2 text-[1rem] text-slate-200 hover:text-indigo-400"
                >
                  <IoMdMail size={20} className="h-fit" />
                  <span>contact@manmedhealth.com</span>
                </Link>
              </div>
            </div>
            {/* Footer Social Icons Part */}
            <div className="w-full flex justify-start items-center text-white gap-5 text-2xl">
              <Link to={"/"} className="hover:text-blue-500 relative top-0 hover:-top-2 duration-300">
                <FaFacebookF />
              </Link>
              <Link to={"https://x.com/ManMedhealth05"} className="hover:text-gray-300 relative top-0 hover:-top-2 duration-300">
                <FaXTwitter />
              </Link>
              <Link to={"https://www.instagram.com/manmedhealth/"} className="hover:text-pink-500 relative top-0 hover:-top-2 duration-300">
                <BsInstagram />
              </Link>
              <Link to={"https://www.threads.com/@manmedhealth"} className="hover:text-black relative top-0 hover:-top-2 duration-300">
                <SiThreads />
              </Link>
              <Link to={"/"} className="hover:text-blue-500 relative top-0 hover:-top-2 duration-300">
                <FaLinkedinIn />
              </Link>

            </div>
         
          </div>
          {/* Footer Bottom Section */}
          <div
            className="w-full  flex justify-center items-center gap-2 md:gap-5 text-[9.5vw] xl:text-[8rem]
          font-bold text-center uppercase text-white mb-10">
            <img
              src={logo}
              alt="logo"
              className="w-[10vw] xl:w-[10rem]"
              draggable="false"
            />
            <span>Manmed</span>
            <span>Health</span>
          </div>
          {/* Footer Copyright Part */}
        <div className=" text-white flex items-center justify-center">
          <span className="  text-gray-200 text-md">
              &copy; 2025 Manmed Health Private Limited. | All rights reserved
            </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
