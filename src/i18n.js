import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // default language
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to ManMed Health",
          comingSoon: "We're launching soon. Stay tuned!",
          notify: "Notify Me",
          emailPlaceholder: "Enter your email",
        },
      },
      hi: {
        translation: {
          welcome: "मैनमेड हेल्थ में आपका स्वागत है",
          comingSoon: "हम जल्द ही लॉन्च कर रहे हैं। हमारे साथ बने रहें!",
          notify: "मुझे सूचित करें",
          emailPlaceholder: "अपना ईमेल दर्ज करें",
        },
      },
    },
  });

export default i18n;
