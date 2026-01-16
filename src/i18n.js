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
          welcome: "Welcome to KT Gen Pharmaceuticals",
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
          redefint_para: "Health as an Investment The guiding principle of our company is built directly upon the profound insight of Rakesh Jhunjhunwala: “My worst investment has been my health. I would encourage everybody to invest the most in that.” We believe this statement is the most valuable and profitable investment advice ever given. It reframes health not as a cost to be managed, but as a crucial, long-term asset that appreciates in value over time. KT Gen Pharmaceuticals exists to be the trusted partner in this most vital of investments. We will provide high-quality, reliable, and accessible healthcare solutions that allow our customers to build and protect their personal health portfolio. Through our products, education, and unwavering support, we will fulfill our promise to be Beyond Medicine, Towards Well-Being, helping people secure their most precious asset for a lifetime of returns.",
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
          about_story_para: "To be the most trusted and accessible partner in India's healthcare journey, empowering every individual to see their well-being not as a cost, but as their most valuable, life-long investment. To ethically develop and deliver high-quality, affordable healthcare solutions that address the foundational needs of the Indian population. We are committed to empowering individuals to proactively invest in their health and will remain a reliable partner in every step of their journey, living out our promise: KT Gen Pharmaceuticals - Beyond Medicine, Towards Well-Being.",
          about_meet_head: "Meet Our Leadership Team",
          meet_card1name: "Dr. Kiran Shanker",
          meet_card1title: "Chairman and Founder \nMBBS,MS ORTHOPAEDICS ",
          meet_card1bio: "Dr. Kiran Shanker brings a deep passion for technology and a commitment to excellence in every project we undertake.",
          meet_card2name: "Dr. Tejuvarshini V",
          meet_card2title: "Chief Executive Officer ( CEO )\nKT Gen Pharmaceuticals Private Limited",
          meet_card2bio: "Dr. Tejuvarshini V ensures smooth operations and strategic partnerships, fostering a culture of trust and collaboration.",
          meet_card3name: "Rohit Raj V",
          meet_card3title: "Managing Director\nKT Gen Pharmaceuticals Private Limited",
          meet_card3bio: "Rohit Raj V is the driving force behind our vision, combining innovation with strategy to lead the company forward.",
          // home section
          home_heading: "KT Gen Pharmaceuticals",
          home_para: "At KT Gen, we are committed to improving lives through high-quality, affordable, and innovative healthcare solutions. As a trusted pharmaceutical company, we focus on delivering safe, effective, and reliable medicines that meet global standards of quality.",
          home_btn1: "Explore Products",
          home_btn2: "Partner With Us",
          count_head: "Trust Through Numbers",
          count_para: "Our commitment to excellence reflected in the numbers that matter most",
          countc1_head: "Partner Pharmacies",
          countc1_para: "A strong network ensuring medicines reach every corner.",
          countc2_head: "Timely Delivery Rate",
          countc2_para: "Delivering health essentials on time, every time.",
          countc3_head: "Trusted Brand",
          countc3_para: "Chosen by patients and healthcare providers alike.",
          countc4_head: "Towns and Villages",
          countc4_para: "Extending reliable healthcare access to remote areas.",
          misstop_head: "OUR MISSION & PROMISE",
          misshead1: "Healthcare That Goes",
          misshead2: "Beyond Medicine",
          misspara: "We're not just a pharma company — we're your partner in better healthcare. Our mission is to make high-quality generics accessible, while building trust through brand clarity, ethical sourcing, and field-first strategies.",
          missdethead1: "Brand-first, patient-friendly packaging",
          missdetpara1: "Clear, accessible design that builds trust",
          missdethead2: "Direct-to-retailer supply chain",
          missdetpara2: "Efficient distribution for better accessibility",
          missdethead3: "Focus on UP & Bihar's underserved markets",
          missdetpara3: "Bringing healthcare to those who need it mos",
          missbtn: "Learn More About Our Impact",
          missqualhead: "Quality Assured",
          missqualpara: "WHO-GMP Certified",
          home_expert: "Our Expertise Across Specialties",
          testimo: "Testimonials",
          partnertop_head: "PARTNER PROGRAM / REWARD SYSTEM",
          partner_head1: "Pharmacy Rewards.",
          partner_head2: "Built for Growth.",
          certifie_head: "Certified",
          organization_head: "Organization",
          partner_para: "Transform your pharmacy business with our intelligent reward system. Earn points, gain recognition, and unlock exclusive benefits designed for sustainable growth.",
          partner_btn: "Get Started Today",
          partner_lab1: "Active Pharmacies",
          partner_lab2: "Points Earned",
          partner_lab3: "Satisfaction Rate",
          partnerf_head1: "Powerful Features for",
          partnerf_head2: "Modern Pharmacies",
          partnerf_para: "Everything you need to maximize your pharmacy's potential and drive sustainable growth",
          partner_titl1: "Scan & Earn Digital Points",
          partner_des1: "Every scan converts to valuable reward points automatically",
          partner_titl2: "Monthly Recognition",
          partner_des2: "Top pharmacies receive exclusive recognition and bonuses",
          partner_titl3: "Redeemable Rewards",
          partner_des3: "Convert points to gifts, discounts, and exclusive schemes",
          partner_titl4: "Smart Tracking",
          partner_des4: "Order tracking and intelligent restock reminders",
          partner_ctah: "Ready to Transform Your Pharmacy?",
          partner_ctap: "Join numbers of pharmacies already growing with our reward system",
          partner_ctab1: "Start Earning Points",
          partner_ctab2: "Learn More",



        },
      },

      hi: {
        translation: {
          welcome: "KT Gen Pharmaceuticals में आपका स्वागत है",
          comingSoon: "हम जल्द ही लॉन्च कर रहे हैं। बने रहें!",
          notify: "मुझे सूचित करें",
          emailPlaceholder: "अपना ईमेल दर्ज करें",

          // Pregnancy
          pregnency_j: "गर्भावस्था यात्रा",
          preg_explore: "सप्ताह-दर-सप्ताह वीडियो के साथ अपने बच्चे के विकास को देखें।",
          preg_about: "गर्भावस्था के बारे में",
          preg_h: "गर्भावस्था जीवन का एक सुंदर परिवर्तन है। हर सप्ताह माँ और शिशु दोनों के विकास में नया चरण आता है। यह श्रृंखला आपको पूरी यात्रा समझने में मदद करती है।",
          preg_watch: "साप्ताहिक वीडियो देखें",
          preg_w: "सप्ताह",
          preg_m: "महीना",

          // Campaign
          campaign_h: "हमारा अभियान",
          campaign_about: "देखें कि हम अपने प्रयासों से कैसे बदलाव ला रहे हैं और समुदाय में विश्वास बना रहे हैं।",
          community_h: "सामुदायिक कार्यक्रम",
          community_about: "हमारी टीम स्थानीय चैरिटी कार्यक्रम में भाग ले रही है",
          testimonial_h: "ग्राहक अनुभव",
          testimonial_about: "हमारे ग्राहकों की राय सुनें",
          team_h: "टीम निर्माण",
          team_about: "हमारी समर्पित टीम मिलकर काम कर रही है",
          demo_h: "उत्पाद डेमो",
          demo_about: "हमारे उत्पाद को कार्य में देखें",
          ceremoney_h: "पुरस्कार समारोह",
          ceremoney_about: "उद्योग द्वारा सम्मान प्राप्त करना",
          workshop_h: "कार्यशाला",
          workshop_about: "समुदाय को शिक्षित करना",
          view_more: "और अभियान देखें",

          // About
          about_head: "एक स्वस्थ भविष्य की ओर, साथ मिलकर",
          about_subhead: "वैज्ञानिक उत्कृष्टता और मानव कल्याण के प्रति प्रतिबद्ध होकर हम जीवन बदलने वाले फार्मास्युटिकल समाधान प्रदान करते हैं।",

          redefine_head: "पुरुषों के स्वास्थ्य को नया आयाम",
          redefint_para: "स्वास्थ्य एक निवेश है। यह विचार राकेश झुनझुनवाला की इस सोच पर आधारित है कि स्वास्थ्य सबसे बड़ा धन है। KT Gen Pharmaceuticals इसी विश्वास के साथ लोगों को विश्वसनीय, सुलभ और उच्च गुणवत्ता वाली स्वास्थ्य सेवाएँ प्रदान करता है। हमारा उद्देश्य जीवन भर आपके साथ रहकर आपकी सबसे कीमती संपत्ति – आपके स्वास्थ्य – की रक्षा करना है।",

          redefine_approch: "व्यक्तिगत देखभाल",
          redefine_approch_p: "हर उपचार आपकी जीवनशैली और जरूरतों के अनुसार तैयार किया जाता है।",

          redefine_secuere: "गोपनीय और सुरक्षित",
          redefine_secuere_p: "आपकी जानकारी पूर्ण रूप से सुरक्षित और गोपनीय रहती है।",

          about_btn: "हमारे बारे में जानें",

          redefine_card1: "प्रिसिजन मेडिसिन",
          redefine_card2: "संवेदनशील देखभाल",
          redefine_card3: "विशेषज्ञ ज्ञान",
          redefine_card4: "सिद्ध परिणाम",

          redefine_card1_p: "आपकी स्वास्थ्य स्थिति के अनुसार विशेष रूप से तैयार उपचार।",
          redefine_card2_p: "संवेदनशील विषयों पर सम्मानजनक और सुरक्षित देखभाल।",
          redefine_card3_p: "अनुभवी और प्रमाणित विशेषज्ञों द्वारा उपचार।",
          redefine_card4_p: "98% संतुष्टि दर के साथ बेहतर स्वास्थ्य परिणाम।",

          metrics_year: "वर्षों का अनुभव",
          metrics_man: "उपचारित पुरुष",
          metrics_succ: "सफलता दर",
          metrics_supp: "सपोर्ट उपलब्ध",

          about_story_head: "हमारी कहानी",
          about_story_para: "KT Gen Pharmaceuticals का उद्देश्य भारत में सबसे भरोसेमंद और सुलभ स्वास्थ्य सेवा भागीदार बनना है। हम लोगों को अपने स्वास्थ्य को एक दीर्घकालिक निवेश के रूप में देखने के लिए प्रेरित करते हैं।",

          about_meet_head: "हमारी नेतृत्व टीम",

          meet_card1name: "डॉ. किरण शंकर",
          meet_card1title: "चेयरमैन और संस्थापक\nMBBS, MS ऑर्थोपेडिक्स",
          meet_card1bio: "डॉ. किरण शंकर स्वास्थ्य सेवा में अनुभव और दूरदर्शी नेतृत्व लाते हैं।",

          meet_card2name: "डॉ. तेजुवर्शिनी वी",
          meet_card2title: "मुख्य कार्यकारी अधिकारी (CEO)\nKT Gen Pharmaceuticals",
          meet_card2bio: "डॉ. तेजुवर्शिनी कंपनी की रणनीति और संचालन को दिशा देती हैं।",

          meet_card3name: "रोहित राज वी",
          meet_card3title: "प्रबंध निदेशक\nKT Gen Pharmaceuticals",
          meet_card3bio: "रोहित कंपनी की दृष्टि और विकास को आगे बढ़ाते हैं।",

          // Home
          home_heading: "KT Gen Pharmaceuticals – हमेशा आपके साथ",
          home_para: "KT Gen में हम उच्च गुणवत्ता, किफायती और भरोसेमंद दवाओं के माध्यम से जीवन को बेहतर बनाने के लिए प्रतिबद्ध हैं।",
          home_btn1: "उत्पाद देखें",
          home_btn2: "हमारे साथ जुड़ें",

          count_head: "संख्याओं में हमारा भरोसा",
          count_para: "उत्कृष्टता के प्रति हमारी प्रतिबद्धता हमारे परिणामों में दिखती है",

          countc1_head: "साझेदार फार्मेसियाँ",
          countc1_para: "एक मजबूत नेटवर्क जो हर जगह दवाएँ पहुँचाता है",

          countc2_head: "समय पर डिलीवरी",
          countc2_para: "हर बार समय पर स्वास्थ्य सेवाएँ",

          countc3_head: "विश्वसनीय ब्रांड",
          countc3_para: "डॉक्टरों और मरीजों द्वारा भरोसा किया गया",

          countc4_head: "शहर और गाँव",
          countc4_para: "दूर-दराज़ क्षेत्रों तक स्वास्थ्य सेवा",

          misstop_head: "हमारा मिशन और वादा",
          misshead1: "स्वास्थ्य सेवा",
          misshead2: "सिर्फ दवा से आगे",

          misspara: "हम केवल एक फार्मा कंपनी नहीं हैं — हम आपके बेहतर स्वास्थ्य के साझेदार हैं।",

          missdethead1: "रोगी-अनुकूल पैकेजिंग",
          missdetpara1: "स्पष्ट और भरोसेमंद डिज़ाइन",

          missdethead2: "सीधा वितरण",
          missdetpara2: "बेहतर पहुँच के लिए कुशल सप्लाई चेन",

          missdethead3: "उत्तर प्रदेश और बिहार पर फोकस",
          missdetpara3: "ज़रूरतमंद क्षेत्रों तक स्वास्थ्य सेवा",

          missbtn: "हमारा प्रभाव जानें",
          missqualhead: "गुणवत्ता प्रमाणित",
          missqualpara: "WHO-GMP प्रमाणित",

          home_expert: "हमारी विशेषज्ञता",
          testimo: "प्रशंसापत्र",

          partnertop_head: "पार्टनर प्रोग्राम / रिवॉर्ड सिस्टम",
          partner_head1: "फार्मेसी रिवॉर्ड्स",
          partner_head2: "विकास के लिए",

          partner_para: "हमारे स्मार्ट रिवॉर्ड सिस्टम के साथ अपनी फार्मेसी को आगे बढ़ाएं।",
          partner_btn: "आज ही शुरू करें",

          partner_lab1: "सक्रिय फार्मेसियाँ",
          partner_lab2: "अर्जित अंक",
          partner_lab3: "संतुष्टि दर",

          partnerf_head1: "शक्तिशाली सुविधाएँ",
          partnerf_head2: "आधुनिक फार्मेसियों के लिए",

          partnerf_para: "आपकी फार्मेसी को आगे बढ़ाने के लिए सभी जरूरी टूल",

          partner_titl1: "स्कैन करें और अंक कमाएँ",
          partner_des1: "हर स्कैन से रिवॉर्ड पॉइंट मिलते हैं",

          partner_titl2: "मासिक सम्मान",
          partner_des2: "शीर्ष फार्मेसियों को विशेष पुरस्कार",

          partner_titl3: "रिडीम योग्य इनाम",
          partner_des3: "पॉइंट्स को उपहार और ऑफ़र में बदलें",

          partner_titl4: "स्मार्ट ट्रैकिंग",
          partner_des4: "ऑर्डर और स्टॉक रिमाइंडर",

          partner_ctah: "क्या आप अपनी फार्मेसी को आगे बढ़ाना चाहते हैं?",
          partner_ctap: "KT Gen के साथ जुड़ें और बढ़ें",
          partner_ctab1: "अंक कमाना शुरू करें",
          partner_ctab2: "और जानें"
        }
      }

    },
  });

export default i18n;
