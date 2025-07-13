import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="px-2 py-1 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
};

export default LanguageSelector;
