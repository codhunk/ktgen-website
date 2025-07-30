import { useState } from "react";

/* --------- Context --------- */
import { useToastContext } from "../../contexts/ToastContext/ToastContext";

/* --------- Hook --------- */
import { useDarkMode } from "../../hooks/UseDarkMode/useDarkMode";
// Translation Hook
import { useTranslation } from "react-i18next";

/* --------- Component --------- */
// Toast Alert
import ToastAlert from "../../components/ToastAlert/ToastAlert";
// Language Selector
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

/* --------- React Icons --------- */
// Dark
import { FaMoon } from "react-icons/fa";
// Light
import { MdWbSunny } from "react-icons/md";

const Home = () => {
  const { t } = useTranslation();

  // Email State
  const [email, setEmail] = useState("");

  // UseDarkMode
  const { isDark, toggleDarkMode } = useDarkMode();

  // Toastify
  const { notifySuccess } = useToastContext();

  // Handle Notify Func
  const handleNotify = (event) => {
    event.preventDefault();

    setEmail("");

    notifySuccess(
      "Thanks, You will get update soon!",
      "bottom-center",
      3000,
      isDark
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center text-slate-800 dark:text-white px-4 text-center transition-all duration-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("welcome")}</h1>
        <p className="text-xl md:text-2xl mb-6">{t("comingSoon")}</p>

        <button
          className="p-2 mb-5 border border-dashed rounded-full border-slate-800 dark:border-slate-200"
          onClick={toggleDarkMode}
        >
          {isDark ? <MdWbSunny /> : <FaMoon />}
        </button>

        <LanguageSelector />

        <form
          className="flex space-x-4 flex-wrap justify-center mt-5"
          onSubmit={handleNotify}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder={t("emailPlaceholder")}
            className="px-4 py-2 rounded-md text-black outline-none dark:bg-gray-200 dark:text-black w-64 shadow"
          />
          <button
            className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition shadow-md"
            type="submit"
          >
            {t("notify")}
          </button>
        </form>

        <footer className="absolute bottom-4 text-sm text-slate-800 dark:text-gray-300">
          © {new Date().getFullYear()} ManMed Health. All rights reserved.
        </footer>
      </div>

      <ToastAlert />
    </>
  );
};

export default Home;
