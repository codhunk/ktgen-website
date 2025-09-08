import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
// import ukEnglishFlag from "./assets/uk_english_flag.png";
// import indiaHindiFlag from "./assets/india_hindi_flag.png";

const languages = [
  {
    code: "en",
    label: "En",
    // flag: ukEnglishFlag,
    flag: "En",
  },
  {
    code: "hi",
    label: "हिंदी",
    flag: "Hi",
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  const selectedLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-sm px-2 py-1 bg-white border-gray-800 dark:border-white dark:bg-gray-800 text-gray-800 dark:text-white border border-dashed focus:outline-none rounded-full"
      >
        <div className="flex items-center gap-1">
          {/* <img
            src={selectedLang?.flag}
            alt=""
            className="w-5 h-5"
            draggable="false"
          /> */}
          {selectedLang?.flag}
        </div>
        <FaChevronDown
          size={13}
          className="text-gray-500 dark:text-white ml-2"
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10  mt-2 right-0 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-md shadow text-gray-800 dark:text-white">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {/* <img
                src={lang.flag}
                alt=""
                className="w-5 h-5"
                draggable="false"
              /> */}
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
