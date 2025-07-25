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
          // pregnency containt;
          pregnency_j: "Pregnancy Journey",
          preg_explore: "Explore your baby's growth with week-by-week pregnancy videos.",
          preg_about: "About Pregnancy",
          preg_h: "Pregnancy is a beautiful transformation of life. Each week brings new development stages for both the mother and the baby. This series helps you understand the entire journey.",
          preg_watch: "Watch Weekly Videos",
          preg_w: "Week",
          preg_m: "Month",
          // campaign containt;
          campaign_h: "Our Campaign",
          campaign_about: "See how we're making a difference through our initiatives and building trust in our community.",
          community_h: "Community Event",
          community_about: "Our team participating in local charity event",
          testimonial_h: "Customer Testimonial",
          testimonial_about: "Hear what our clients say about our services",
          team_h: "Team Building",
          team_about: "Our dedicated team working together",
          demo_h: "Product Demo",
          demo_about: "See our product in action",
          ceremoney_h: "Award Ceremony",
          ceremoney_about: "Receiving industry recognition",
          workshop_h: "Workshop",
          workshop_about: "Educating our community",
          view_more: "View More Campaigns"
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
          preg_m: "महीना",
          // campaign_h
          campaign_h: "हमारा अभियान",
          campaign_about: "देखिये कि हम अपनी पहलों के माध्यम से किस प्रकार बदलाव ला रहे हैं और अपने समुदाय में विश्वास का निर्माण कर रहे हैं।",
          community_h: "सामुदायिक आयोजन",
          community_about: "हमारी टीम स्थानीय चैरिटी कार्यक्रम में भाग ले रही है",
          testimonial_h: "ग्राहक प्रशंसापत्र",
          testimonial_about: "सुनें कि हमारे ग्राहक हमारी सेवाओं के बारे में क्या कहते हैं",
          team_h: "टीम के निर्माण",
          team_about: "हमारी समर्पित टीम एक साथ काम कर रही है",
          demo_h: "उत्पाद डेमो",
          demo_about: "हमारे उत्पाद को क्रियाशील देखें",
          ceremoney_h: "पुरस्कार समारोह",
          ceremoney_about: "उद्योग मान्यता प्राप्त करना",
          workshop_h: "कार्यशाला",
          workshop_about: "हमारे समुदाय को शिक्षित करना",
          view_more: "अधिक अभियान देखें"
        },
      },
    },
  });

export default i18n;
