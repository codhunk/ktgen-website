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
          view_more: "View More Campaigns",
          // for about section
          about_head: "Pioneering a Healthier Future, Together",
          about_subhead: "Driven by a commitment to scientific excellence and a passion for human well-being, we are transforming lives with innovative pharmaceutical solutions.",
          redefine_head: "Redefining Men's Health",
          redefint_para: "Health as an Investment The guiding principle of our company is built directly upon the profound insight of Rakesh Jhunjhunwala: “My worst investment has been my health. I would encourage everybody to invest the most in that.” We believe this statement is the most valuable and profitable investment advice ever given. It reframes health not as a cost to be managed, but as a crucial, long-term asset that appreciates in value over time. ManMed Health exists to be the trusted partner in this most vital of investments. We will provide high-quality, reliable, and accessible healthcare solutions that allow our customers to build and protect their personal health portfolio. Through our products, education, and unwavering support, we will fulfill our promise to be Always By Your Side, helping people secure their most precious asset for a lifetime of returns.",
          redefine_approch: "Personalized Approach",
          redefine_approch_p: "Every treatment plan is customized to your specific needs and lifestyle.",
          redefine_secuere: " Confidential & Secure",
          redefine_secuere_p: "Your privacy is our priority with HIPAA-compliant telemedicine options.",
          about_btn: "Learn More About Us",
          redefine_card1: "Precision Medicine",
          redefine_card2: "Compassionate Care",
          redefine_card3: "Expert Knowledge",
          redefine_card4: "Proven Results",
          redefine_card1_p: "Tailored treatments based on your unique health profile and goals.",
          redefine_card2_p: "Understanding and discreet approach to sensitive men’s health issues.",
          redefine_card3_p: "Board-certified specialists with decades of men’s health experience.",
          redefine_card4_p: "98% patient satisfaction rate with measurable health improvements.",
          metrics_year: "Years Experience",
          metrics_man: "Men Treated",
          metrics_succ: "Success Rate",
          metrics_supp: "Support Available",
          about_story_head: "Our Story: From Vision to Reality",
          about_story_para: "To be the most trusted and accessible partner in India's healthcare journey, empowering every individual to see their well-being not as a cost, but as their most valuable, life-long investment. To ethically develop and deliver high-quality, affordable healthcare solutions that address the foundational needs of the Indian population. We are committed to empowering individuals to proactively invest in their health and will remain a reliable partner in every step of their journey, living out our promise: ManMed Health - Always By Your Side.",
          about_meet_head: "Meet Our Leadership Team",

          meet_card1name: "Rahul Patel",
          meet_card1title: "Director",
          meet_card1bio: "Rahul brings a deep passion for technology and a commitment to excellence in every project we undertake.",

          meet_card2name: "Vibha Rani",
          meet_card2title: "Director",
          meet_card2bio: "Vibha ensures smooth operations and strategic partnerships, fostering a culture of trust and collaboration.",

          meet_card3name: "Anuj Kumar Patel",
          meet_card3title: "Director",
          meet_card3bio: "Anuj is the driving force behind our vision, combining innovation with strategy to lead the company forward.",





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
          view_more: "अधिक अभियान देखें",
          // about section
          about_head: "एक स्वस्थ भविष्य की ओर अग्रसर, साथ मिलकर",
          about_subhead: "वैज्ञानिक उत्कृष्टता के प्रति प्रतिबद्धता और मानव कल्याण के प्रति जुनून से प्रेरित होकर, हम नवोन्मेषी औषधीय समाधानों के साथ जीवन में बदलाव ला रहे हैं।",
          redefine_head: "पुरुषों के स्वास्थ्य को पुनर्परिभाषित करना",
          redefint_para: "निवेश के रूप में स्वास्थ्य हमारी कंपनी का मार्गदर्शक सिद्धांत राकेश झुनझुनवाला की गहन अंतर्दृष्टि पर आधारित है: मेरा सबसे बुरा निवेश मेरा स्वास्थ्य रहा है। मैं सभी को इसमें सबसे ज़्यादा निवेश करने के लिए प्रोत्साहित करूँगा। हमारा मानना ​​है कि यह कथन अब तक दी गई सबसे मूल्यवान और लाभदायक निवेश सलाह है। यह स्वास्थ्य को एक प्रबंधित लागत के रूप में नहीं, बल्कि एक महत्वपूर्ण, दीर्घकालिक परिसंपत्ति के रूप में परिभाषित करता है जिसका मूल्य समय के साथ बढ़ता है। मैनमेड हेल्थ इस सबसे महत्वपूर्ण निवेश में एक विश्वसनीय भागीदार बनने के लिए मौजूद है। हम उच्च-गुणवत्ता वाले, विश्वसनीय और सुलभ स्वास्थ्य सेवा समाधान प्रदान करेंगे जो हमारे ग्राहकों को अपने व्यक्तिगत स्वास्थ्य पोर्टफोलियो का निर्माण और सुरक्षा करने में सक्षम बनाते हैं। अपने उत्पादों, शिक्षा और अटूट समर्थन के माध्यम से, हम हमेशा आपके साथ रहने के अपने वादे को पूरा करेंगे, और लोगों को जीवन भर के रिटर्न के लिए उनकी सबसे कीमती परिसंपत्ति को सुरक्षित रखने में मदद करेंगे।",
          redefine_approch: "वैयक्तिकृत दृष्टिकोण",
          redefine_approch_p: "प्रत्येक उपचार योजना आपकी विशिष्ट आवश्यकताओं और जीवनशैली के अनुसार अनुकूलित की जाती है।",
          redefine_secuere: "गोपनीय और सुरक्षित",
          redefine_secuere_p: "HIPAA-अनुपालन वाले टेलीमेडिसिन विकल्पों में आपकी गोपनीयता हमारी प्राथमिकता है।",
          about_btn: "हमारे बारे में अधिक जानें",
          redefine_card1: "परिशुद्ध चिकित्सा",
          redefine_card2: "करुणामय देखभाल",
          redefine_card3: "विशेषज्ञ ज्ञान",
          redefine_card4: "सिद्ध परिणाम",
          redefine_card1_p: "आपकी विशिष्ट स्वास्थ्य प्रोफ़ाइल और लक्ष्यों के आधार पर अनुकूलित उपचार।",
          redefine_card2_p: "पुरुषों के संवेदनशील स्वास्थ्य मुद्दों के प्रति समझदारी और विवेकपूर्ण दृष्टिकोण।",
          redefine_card3_p: "पुरुषों के स्वास्थ्य के क्षेत्र में दशकों के अनुभव वाले बोर्ड-प्रमाणित विशेषज्ञ।",
          redefine_card4_p: "मापन योग्य स्वास्थ्य सुधार के साथ 98% रोगी संतुष्टि दर।",
          metrics_year: "वर्षों का अनुभव",
          metrics_man: "उपचारित पुरुष",
          metrics_succ: "सफलता दर",
          metrics_supp: "सहायता उपलब्ध",
          about_story_head: "हमारी कहानी: कल्पना से वास्तविकता तक",
          about_story_para: "भारत की स्वास्थ्य सेवा यात्रा में सबसे भरोसेमंद और सुलभ भागीदार बनना, हर व्यक्ति को अपनी भलाई को लागत के रूप में नहीं, बल्कि अपने सबसे मूल्यवान, जीवन भर के निवेश के रूप में देखने के लिए सशक्त बनाना। भारतीय आबादी की मूलभूत आवश्यकताओं को पूरा करने वाले उच्च-गुणवत्ता वाले, किफायती स्वास्थ्य सेवा समाधानों को नैतिक रूप से विकसित और वितरित करना। हम व्यक्तियों को अपने स्वास्थ्य में सक्रिय रूप से निवेश करने के लिए सशक्त बनाने के लिए प्रतिबद्ध हैं और उनकी यात्रा के हर चरण में एक विश्वसनीय भागीदार बने रहेंगे, अपने वादे को निभाते हुए: मैनमेड हेल्थ - हमेशा आपके साथ।",
          about_meet_head: "हमारी नेतृत्व टीम से मिलें",
          meet_card1name: "राहुल पटेल",
          meet_card1title: "निदेशक",
          meet_card1bio: "राहुल हमारे द्वारा शुरू की गई हर परियोजना में तकनीक के प्रति गहरा जुनून और उत्कृष्टता के प्रति प्रतिबद्धता लेकर आते हैं।",

          meet_card2name: "विभा रानी",
          meet_card2title: "निदेशक",
          meet_card2bio: "विभा सुचारू संचालन और रणनीतिक साझेदारियों को सुनिश्चित करती हैं, विश्वास और सहयोग की संस्कृति को बढ़ावा देती हैं।",

          meet_card3name: "अनुज कुमार पटेल",
          meet_card3title: "निदेशक",
          meet_card3bio: "अनुज हमारे विज़न के पीछे प्रेरक शक्ति हैं, जो कंपनी को आगे बढ़ाने के लिए नवाचार को रणनीति के साथ जोड़ते हैं।",






        },
      },
    },
  });

export default i18n;
