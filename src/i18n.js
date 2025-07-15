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
          pregnency_j: "Pregnancy Journey",
          preg_explore: "Explore your baby's growth with week-by-week pregnancy videos.",
          preg_about: "About Pregnancy",
          preg_h: "Pregnancy is a beautiful transformation of life. Each week brings new development stages for both the mother and the baby. This series helps you understand the entire journey.",
          preg_watch: "Watch Weekly Videos",
          preg_w: "Week",
          preg_m: "Month"
        },
      },

      hi: {
        translation: {
          welcome: "मैनमेड हेल्थ में आपका स्वागत है",
          comingSoon: "हम जल्द ही लॉन्च कर रहे हैं। हमारे साथ बने रहें!",
          notify: "मुझे सूचित करें",
          emailPlaceholder: "अपना ईमेल दर्ज करें",
          pregnency_j: "गर्भावस्था यात्रा",
          preg_explore: "सप्ताह-दर-सप्ताह गर्भावस्था वीडियो के साथ अपने बच्चे के विकास का पता लगाएं।",
          preg_about: "गर्भावस्था के बारे में",
          preg_h: "गर्भावस्था जीवन का एक खूबसूरत बदलाव है। हर हफ़्ता माँ और बच्चे दोनों के लिए विकास के नए चरण लेकर आता है। यह श्रृंखला आपको इस पूरी यात्रा को समझने में मदद करती है।",
          preg_watch: "साप्ताहिक वीडियो देखें",
          preg_w: "सप्ताह",
          preg_m: "महीना"
        },
      },
    },
  });

export default i18n;
