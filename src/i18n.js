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
    returnObjects: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome to KT GEN Pharmaceuticals",
          comingSoon: "We're launching soon. Stay tuned!",
          notify: "Notify Me",
          emailPlaceholder: "Enter your email",

          // About KT GEN
          about_head: "About KT GEN",
          about_subhead: "Strengthening the Healthcare Ecosystem through Reliable Pharmaceutical Distribution",
          about_paras: [
            "At KT GEN Pharmaceuticals, we believe that access to quality medicines is fundamental to effective healthcare delivery. Our operations are built on transparency, compliance, and accountability, enabling us to serve as a dependable link between pharmaceutical manufacturers and healthcare providers.",
            "With a strong understanding of pharmaceutical distribution systems and regulatory frameworks, we ensure that every product handled meets required quality and safety standards. Our focus on long-term partnerships allows us to create sustainable value for stakeholders while contributing positively to public health outcomes."
          ],

          // Our Story
          our_story_badge: "Our Story",
          our_story_head: "KT Gen Pharmaceuticals wasn't built in a boardroom.",
          our_story_paras: [
            "It began with a simple but powerful observation — healthcare is everywhere, yet trust is rare.",
            "In a world where medicines are often reduced to numbers, margins, and transactions, we chose a different path. We believed that every formulation carries a responsibility — not just to heal, but to uphold integrity, precision, and purpose.",
            "KT Gen was founded with a vision to bridge the gap between science and sincerity. We are not here to be the biggest pharmaceutical company — we are here to be the most dependable one."
          ],
          our_story_commitments_label: "Every product we create reflects a deeper commitment:",
          our_story_commitments: [
            "To quality that never negotiates",
            "To innovation that serves real clinical needs",
            "To partnerships that are built on transparency, not targets"
          ],
          our_story_closing: "From carefully curated formulations to ethically driven practices, KT Gen stands for a new generation of pharmaceuticals — where growth is meaningful and trust is measurable.",
          our_story_tagline: "We don't just manufacture medicines. We build confidence — dose by dose.",

          // Partner Program
          partner_program_badge: "Partner Program",
          partner_program_head: "Grow Beyond Business",
          partner_program_intro: "At KT Gen Pharmaceuticals, partnership is not a distribution channel — it is a shared journey.",
          partner_program_para: "We understand that behind every partner is ambition, risk, and a desire to build something lasting. That's why our Partner Program is designed not just to support your business, but to elevate it.",
          partner_diff_head: "What Makes Our Partnership Different?",
          partner_diff_cards: [
            {
              number: "01",
              title: "Exclusive Growth Opportunity",
              desc: "We offer region-focused partnerships, ensuring you don't compete — you lead."
            },
            {
              number: "02",
              title: "Portfolio with Purpose",
              desc: "Our product range is carefully designed based on real market demand and clinical relevance, helping you move faster and smarter."
            },
            {
              number: "03",
              title: "Transparent & Ethical Practices",
              desc: "No hidden clauses. No unrealistic commitments. Just clear, honest collaboration."
            },
            {
              number: "04",
              title: "Marketing that Works for You",
              desc: "From branding to promotional strategies, we equip you with tools that actually create impact in your territory."
            },
            {
              number: "05",
              title: "Continuous Support System",
              desc: "We don't disappear after onboarding. Our team stays with you — guiding, supporting, and growing together."
            }
          ],
          partner_shared_head: "More Than a Partner — A Shared Vision",
          partner_shared_para: "When you join KT Gen Pharmaceuticals, you're not just associating with a company — you become part of a movement that believes in doing pharma differently.",
          partner_shared_label: "A movement where:",
          partner_shared_values: [
            "Quality is non-negotiable",
            "Relationships are long-term",
            "Success is shared"
          ],

          // Our Role in the Healthcare Ecosystem
          role_head: "Our Role in the Healthcare Ecosystem",
          role_para: "As a pharmaceutical distribution partner, KT GEN Pharmaceuticals plays a critical role in ensuring continuity of care by:",
          role_points: [
            "Bridging manufacturers and healthcare providers",
            "Supporting uninterrupted medicine availability",
            "Ensuring regulatory-compliant storage and distribution",
            "Facilitating efficient supply chain coordination",
            "Strengthening healthcare delivery networks"
          ],

          // Our Services
          services_head: "Our Services",
          services_para: "We offer end-to-end pharmaceutical distribution and allied healthcare supply solutions, including:",
          services_points: [
            "Distribution of branded and generic pharmaceutical products",
            "Supply of healthcare, medical devices, and allied products",
            "Market development and channel expansion support",
            "Vendor and stakeholder coordination",
            "Logistics and inventory management",
            "Regulatory and documentation compliance support"
          ],

          // Quality, Safety & Compliance
          quality_head: "Quality, Safety & Compliance",
          quality_para_1: "Quality and patient safety remain at the core of our operations. KT GEN Pharmaceuticals adheres to applicable pharmaceutical distribution norms and regulatory guidelines to ensure product integrity throughout the supply chain.",
          quality_para_2: "Our systems emphasize:",
          quality_points: [
            "Proper storage and handling practices",
            "Traceability and documentation",
            "Compliance with statutory and regulatory requirements",
            "Continuous monitoring of operational processes"
          ],
          quality_closing: "Through these measures, we strive to deliver medicines that healthcare providers and patients can rely on.",

          // Cold Chain & Distribution Excellence
          cold_chain_head: "Cold Chain & Distribution Excellence",
          cold_chain_para: "KT GEN Pharmaceuticals follows appropriate cold chain and storage protocols for temperature-sensitive pharmaceutical products, where applicable. Our distribution processes are designed to preserve product efficacy and safety from receipt to delivery, supported by controlled logistics and monitoring practices.",

          // Who We Serve
          who_we_serve_head: "Who We Serve",
          who_we_serve_para: "We partner with a broad spectrum of healthcare stakeholders, including:",
          who_we_serve_points: [
            "Retail pharmacies",
            "Hospitals and nursing homes",
            "Clinics and diagnostic centres",
            "Institutional healthcare buyers",
            "Pharmaceutical manufacturers"
          ],
          who_we_serve_closing: "Our flexible and responsive service model enables us to meet the diverse needs of each segment.",

          // Commitment to Ethical & Responsible Business
          ethics_head: "Commitment to Ethical & Responsible Business",
          ethics_paras: [
            "KT GEN Pharmaceuticals is guided by ethical business principles and responsible distribution practices. We believe that trust, transparency, and accountability are essential for sustainable growth and meaningful partnerships within the healthcare sector.",
            "Our commitment extends beyond business performance to supporting responsible healthcare delivery and improved access to essential medicines."
          ],

          // Vision & Mission (Handled by original user edit)
          vision_head: "Our Vision",
          vision_para: "To emerge as a trusted pharmaceutical distribution partner by consistently delivering quality products, upholding ethical standards, and contributing to a resilient healthcare ecosystem.",
          mission_head: "Our Mission",
          mission_points: [
            "To ensure timely and efficient distribution of pharmaceutical products",
            "To maintain high standards of quality, safety, and regulatory compliance",
            "To build enduring partnerships across the healthcare value chain",
            "To support public health through responsible distribution practices"
          ],

          // Our Core Values
          values_head: "Our Core Values",
          values_points: [
            "Integrity and transparency",
            "Commitment to quality and patient safety",
            "Reliability and accountability",
            "Ethical and responsible business conduct",
            "Customer-focused service delivery"
          ],

          // Sustainability & Long-Term Outlook
          sustainability_head: "Sustainability & Long-Term Outlook",
          sustainability_para: "KT GEN Pharmaceuticals is committed to sustainable growth through continuous improvement of distribution practices, responsible operations, and long-term stakeholder engagement. We aim to strengthen our distribution network, enhance operational capabilities, and align with evolving healthcare needs in India.",

          // Partner With KT GEN
          partner_head: "Partner With KT GEN",
          partner_para: "We invite pharmaceutical manufacturers, healthcare institutions, and distributors to collaborate with us in delivering reliable, compliant, and efficient pharmaceutical distribution solutions.",

          // Leadership
          about_meet_head: "Leadership & Governance",
          meet_card1name: "Dr. Tejuvarshini V",
          meet_card1title: "CEO",
          meet_card1bio: "Dr. Tejuvarshini plays a vital role in KT Gen Pharmaceuticals, bringing a strong clinical perspective and a patient-centered approach. Her focus on quality, ethical practices, and clinically relevant formulations ensures that the company delivers reliable and effective healthcare solutions, contributing to its vision of building trust and long-term impact.",
          meet_card2name: "Dr. Kiran Shankar",
          meet_card2title: "Chairman and Founder",
          meet_card2bio: "Dr. Kiran, the founder of KT Gen Pharmaceuticals, established the company with a vision to restore trust, quality, and ethics in the pharmaceutical industry. With a strong clinical background, he focuses on delivering reliable, high-quality formulations and building transparent, long-term partnerships, ensuring that every step reflects integrity and purpose.",
          meet_card3name: "Mr. Rohith V",
          meet_card3title: "Managing Director",
          meet_card3bio: "Contributes operational insight in supply chain coordination and market expansion, reinforcing distribution capabilities and customer engagement.",

          // Home Section head
          home_heading: "KT GEN Pharmaceuticals",
          home_para: "KT GEN Pharmaceuticals Private Limited is a professionally managed pharmaceutical distribution company based in Bengaluru, India. We are committed to strengthening the healthcare ecosystem by ensuring timely access to quality pharmaceutical products and allied healthcare supplies. Driven by ethical practices, regulatory integrity, and operational excellence, KT GEN Pharmaceuticals works closely with manufacturers and healthcare providers to support consistent, safe, and efficient medicine availability across the healthcare continuum.",
          home_btn1: "Explore Services",
          home_btn2: "Contact Us",

          // Reach & Impact / Counting
          count_head: "Our Reach & Impact",
          count_para: "We are transforming access to healthcare — one village, one person, one innovation at a time.",
          certify_head: "Certified Excellence",
          certifie_head: "Certified to Global",
          organization_head: "Standards & Regulations",
          countc1_head: "Villages Covered",
          countc1_para: "Extending healthcare access to remote rural areas.",
          countc2_head: "Patients Served",
          countc2_para: "Providing quality care and support to thousands.",
          countc3_head: "Volunteer Doctors",
          countc3_para: "A dedicated team of professionals serving the community.",
          countc4_head: "Camps Conducted",
          countc4_para: "Regular health camps to ensure community wellness.",

          // Redefining / Distribution Ecosystem
          redefine_head: "Redefining Pharmaceutical Distribution",
          redefine_para: "We are committed to bridging the gap between manufacturers and healthcare providers with precision and care.",
          redefine_approch: "Strategic Approach",
          redefine_approch_p: "Our distribution network is optimized for reliability and speed.",
          redefine_secuere: "Secure Logistics",
          redefine_secuere_p: "State-of-the-art storage and transport systems to ensure product integrity.",

          // Pregnancy Section
          pregnency_j: "Pregnancy Journey",
          preg_explore: "Exploring the stages of pregnancy with care and support.",
          preg_about: "About the Pregnancy Journey",
          preg_h: "A comprehensive guide to understanding and managing your health during pregnancy. At KT GEN Pharmaceuticals, we provide resources to support expectant mothers through every milestone.",
          preg_watch: "Watch the Journey",

          // Campaign Section
          campaign_h: "Our Campaigns",
          campaign_about: "Spreading awareness and delivering healthcare solutions through community-driven initiatives.",
          community_h: "Community Outreach",
          community_about: "Engaging with local communities to provide health education and basic medical support.",
          testimonial_h: "Stakeholder Testimonials",
          testimonial_about: "Hearing from our partners and beneficiaries about the impact of our distribution network.",
          team_h: "Team Excellence",
          team_about: "Our dedicated professionals working together to ensure supply chain integrity.",
          demo_h: "Product Demonstrations",
          demo_about: "Educating healthcare providers on the effective use of medical supplies.",
          ceremoney_h: "Recognition Events",
          ceremoney_about: "Celebrating milestones and honoring contributions in the healthcare sector.",
          workshop_h: "Regulatory Workshops",
          workshop_about: "Keeping our stakeholders informed about the latest compliance and safety standards.",

          // Our Mission Section (Home)
          misstop_head: "Our Commitment",
          misshead1: "Delivering Healthcare with",
          misshead2: "Purpose & Precision",
          missdethead1: "Quality Distribution",
          missdetpara1: "Ensuring every product meets stringent quality standards.",
          missdethead2: "Efficient Supply Chain",
          missdetpara2: "Fast and reliable delivery to healthcare providers.",
          missdethead3: "Widespread Network",
          missdetpara3: "Reaching urban and rural areas across the region.",
          missbtn: "Partner With Us",
          missqualhead: "Quality Assured",
          missqualpara: "ISO & GMP Compliant Standards",

          // Contact Us
          address_label: "Registered Office:",
          address_full: "No. 3009/1–4, 17th Cross, 2nd Main Road,\nBanashankari 2nd Stage,\nBengaluru – 560070, Karnataka, India",

          // UI labels
          about_btn: "Learn More",
          view_more: "Read More",
          contact_us: "Contact Us",
        },
      },

      hi: {
        translation: {
          welcome: "KT GEN Pharmaceuticals में आपका स्वागत है",
          comingSoon: "हम जल्द ही लॉन्च कर रहे हैं। बने रहें!",
          notify: "मुझे सूचित करें",
          emailPlaceholder: "अपना ईमेल दर्ज करें",

          // About KT GEN
          about_head: "KT GEN के बारे में",
          about_subhead: "विश्वसनीय फार्मास्युटिकल वितरण के माध्यम से स्वास्थ्य सेवा पारिस्थितिकी तंत्र को मजबूत करना",
          about_paras: [
            "KT GEN Pharmaceuticals में, हमारा मानना है कि गुणवत्तापूर्ण दवाओं तक पहुँच प्रभावी स्वास्थ्य सेवा वितरण के लिए मौलिक है। हमारा संचालन पारदर्शिता, अनुपालन और जवाबदेही पर बना है, जो हमें फार्मास्युटिकल निर्माताओं और स्वास्थ्य सेवा प्रदाताओं के बीच एक भरोसेमंद कड़ी के रूप में सेवा करने में सक्षम बनाता है।",
            "फार्मास्युटिकल वितरण प्रणालियों और नियामक ढाँचों की गहरी समझ के साथ, हम यह सुनिश्चित करते हैं कि संभाला जाने वाला प्रत्येक उत्पाद आवश्यक गुणवत्ता और सुरक्षा मानकों को पूरा करता है। दीर्घकालिक साझेदारी पर हमारा ध्यान सार्वजनिक स्वास्थ्य परिणामों में सकारात्मक योगदान देते हुए हितधारकों के लिए स्थायी मूल्य बनाने की अनुमति देता है।"
          ],

          // Our Story (Hindi)
          our_story_badge: "हमारी कहानी",
          our_story_head: "KT Gen Pharmaceuticals किसी बोर्डरूम में नहीं बनी।",
          our_story_paras: [
            "इसकी शुरुआत एक सरल लेकिन शक्तिशाली अवलोकन से हुई — स्वास्थ्य सेवा हर जगह है, फिर भी विश्वास दुर्लभ है।",
            "एक ऐसी दुनिया में जहाँ दवाइयों को अक्सर संख्याओं, मार्जिन और लेन-देन तक सीमित कर दिया जाता है, हमने एक अलग रास्ता चुना। हमारा मानना था कि हर फ़ॉर्मूलेशन एक ज़िम्मेदारी लेकर आती है — न केवल ठीक करने के लिए, बल्कि ईमानदारी, सटीकता और उद्देश्य को बनाए रखने के लिए।",
            "KT Gen की स्थापना विज्ञान और सत्यनिष्ठा के बीच की खाई को पाटने के दृष्टिकोण के साथ की गई थी। हम यहाँ सबसे बड़ी फार्मास्युटिकल कंपनी बनने के लिए नहीं हैं — हम यहाँ सबसे भरोसेमंद कंपनी बनने के लिए हैं।"
          ],
          our_story_commitments_label: "हमारा हर उत्पाद एक गहरी प्रतिबद्धता को दर्शाता है:",
          our_story_commitments: [
            "उस गुणवत्ता के लिए जो कभी समझौता नहीं करती",
            "उस नवाचार के लिए जो वास्तविक नैदानिक ज़रूरतों की पूर्ति करता है",
            "उन साझेदारियों के लिए जो लक्ष्यों पर नहीं, पारदर्शिता पर बनी हैं"
          ],
          our_story_closing: "सावधानी से तैयार किए गए फ़ॉर्मूलेशन से लेकर नैतिक रूप से संचालित प्रथाओं तक, KT Gen एक नई पीढ़ी के फार्मास्युटिकल्स का प्रतिनिधित्व करती है — जहाँ विकास सार्थक है और विश्वास मापने योग्य है।",
          our_story_tagline: "हम सिर्फ दवाएं नहीं बनाते। हम विश्वास बनाते हैं — एक खुराक से दूसरी खुराक तक।",

          // Partner Program (Hindi)
          partner_program_badge: "पार्टनर प्रोग्राम",
          partner_program_head: "व्यवसाय से परे बढ़ें",
          partner_program_intro: "KT Gen Pharmaceuticals में, साझेदारी एक वितरण चैनल नहीं है — यह एक साझा यात्रा है।",
          partner_program_para: "हम समझते हैं कि हर भागीदार के पीछे महत्वाकांक्षा, जोखिम और कुछ स्थायी बनाने की इच्छा होती है। इसीलिए हमारा पार्टनर प्रोग्राम न केवल आपके व्यवसाय को समर्थन देने के लिए, बल्कि उसे ऊंचा उठाने के लिए डिज़ाइन किया गया है।",
          partner_diff_head: "हमारी साझेदारी को क्या अलग बनाता है?",
          partner_diff_cards: [
            {
              number: "01",
              title: "विशेष विकास का अवसर",
              desc: "हम क्षेत्र-केंद्रित साझेदारियाँ प्रदान करते हैं, यह सुनिश्चित करते हुए कि आप प्रतिस्पर्धा नहीं करते — आप नेतृत्व करते हैं।"
            },
            {
              number: "02",
              title: "उद्देश्य के साथ पोर्टफोलियो",
              desc: "हमारी उत्पाद श्रृंखला वास्तविक बाजार मांग और नैदानिक प्रासंगिकता के आधार पर सावधानीपूर्वक डिज़ाइन की गई है।"
            },
            {
              number: "03",
              title: "पारदर्शी और नैतिक प्रथाएं",
              desc: "कोई छिपी हुई शर्तें नहीं। कोई अवास्तविक प्रतिबद्धताएं नहीं। बस स्पष्ट, ईमानदार सहयोग।"
            },
            {
              number: "04",
              title: "आपके लिए काम करने वाली मार्केटिंग",
              desc: "ब्रांडिंग से प्रचार रणनीतियों तक, हम आपको ऐसे उपकरणों से लैस करते हैं जो आपके क्षेत्र में वास्तविक प्रभाव बनाते हैं।"
            },
            {
              number: "05",
              title: "निरंतर सहायता प्रणाली",
              desc: "हम ऑनबोर्डिंग के बाद गायब नहीं होते। हमारी टीम आपके साथ रहती है — मार्गदर्शन, समर्थन और एक साथ बढ़ते हुए।"
            }
          ],
          partner_shared_head: "सिर्फ एक भागीदार से अधिक — एक साझा दृष्टिकोण",
          partner_shared_para: "जब आप KT Gen Pharmaceuticals से जुड़ते हैं, तो आप केवल एक कंपनी से नहीं जुड़ते — आप एक ऐसे आंदोलन का हिस्सा बनते हैं जो फार्मा को अलग तरीके से करने में विश्वास रखता है।",
          partner_shared_label: "एक आंदोलन जहाँ:",
          partner_shared_values: [
            "गुणवत्ता गैर-परक्राम्य है",
            "रिश्ते दीर्घकालिक हैं",
            "सफलता साझा की जाती है"
          ],

          // Our Role in the Healthcare Ecosystem
          role_head: "स्वास्थ्य सेवा पारिस्थितिकी तंत्र में हमारी भूमिका",
          role_para: "एक फार्मास्युटिकल वितरण भागीदार के रूप में, KT GEN Pharmaceuticals देखभाल की निरंतरता सुनिश्चित करने में महत्वपूर्ण भूमिका निभाता है:",
          role_points: [
            "निर्माताओं और स्वास्थ्य सेवा प्रदाताओं के बीच सेतु बनाना",
            "दवा की निर्बाध उपलब्धता का समर्थन करना",
            "नियामक-अनुपालन भंडारण और वितरण सुनिश्चित करना",
            "कुशल आपूर्ति श्रृंखला समन्वय की सुविधा प्रदान करना",
            "स्वास्थ्य सेवा वितरण नेटवर्क को मजबूत करना"
          ],

          // Our Services
          services_head: "हमारी सेवाएँ",
          services_para: "हम एंड-टू-एंड फार्मास्युटिकल वितरण और संबद्ध स्वास्थ्य सेवा आपूर्ति समाधान प्रदान करते हैं, जिनमें शामिल हैं:",
          services_points: [
            "ब्रांडेड और जेनेरिक फार्मास्युटिकल उत्पादों का वितरण",
            "स्वास्थ्य सेवा, चिकित्सा उपकरणों और संबद्ध उत्पादों की आपूर्ति",
            "बाजार विकास और चैनल विस्तार सहायता",
            "विक्रेता और हितधारक समन्वय",
            "लॉजिस्टिक्स और इन्वेंट्री प्रबंधन",
            "नियामक और दस्तावेज़ीकरण अनुपालन सहायता"
          ],

          // Quality, Safety & Compliance
          quality_head: "गुणवत्ता, सुरक्षा और अनुपालन",
          quality_para_1: "गुणवत्ता और रोगी सुरक्षा हमारे संचालन के केंद्र में बनी हुई है। पूरी आपूर्ति श्रृंखला में उत्पाद की अखंडता सुनिश्चित करने के लिए KT GEN Pharmaceuticals लागू फार्मास्युटिकल वितरण मानदंडों और नियामक दिशानिर्देशों का पालन करता है।",
          quality_para_2: "हमारी प्रणालियाँ इन पर जोर देती हैं:",
          quality_points: [
            "उचित भंडारण और प्रबंधन प्रथाएं",
            "खोजने की क्षमता और दस्तावेज़ीकरण",
            "वैधानिक और नियामक आवश्यकताओं का अनुपालन",
            "परिचालन प्रक्रियाओं की निरंतर निगरानी"
          ],
          quality_closing: "इन उपायों के माध्यम से, हम ऐसी दवाएं देने का प्रयास करते हैं जिन पर स्वास्थ्य सेवा प्रदाता और रोगी भरोसा कर सकें।",

          // Cold Chain & Distribution Excellence
          cold_chain_head: "कोल्ड चेन और वितरण उत्कृष्टता",
          cold_chain_para: "KT GEN Pharmaceuticals तापमान-संवेदी फार्मास्युटिकल उत्पादों के लिए उचित कोल्ड चेन और भंडारण प्रोटोकॉल का पालन करता है, जहाँ लागू हो। हमारी वितरण प्रक्रियाओं को प्राप्ति से वितरण तक उत्पाद की प्रभावकारिता और सुरक्षा बनाए रखने के लिए डिज़ाइन किया गया है, जो नियंत्रित लॉजिस्टिक्स और निगरानी प्रथाओं द्वारा समर्थित है।",

          // Who We Serve
          who_we_serve_head: "हम किसकी सेवा करते हैं",
          who_we_serve_para: "हम स्वास्थ्य सेवा हितधारकों के व्यापक स्पेक्ट्रम के साथ साझेदारी करते हैं, जिनमें शामिल हैं:",
          who_we_serve_points: [
            "रिटेल फार्मेसी",
            "अस्पताल और नर्सिंग होम",
            "क्लिनिक और डायग्नोस्टिक केंद्र",
            "संस्थागत स्वास्थ्य सेवा खरीदार",
            "फार्मास्युटिकल निर्माता"
          ],
          who_we_serve_closing: "हमारा लचीला और उत्तरदायी सेवा मॉडल हमें प्रत्येक खंड की विविध आवश्यकताओं को पूरा करने में सक्षम बनाता है।",

          // Commitment to Ethical & Responsible Business
          ethics_head: "नैतिक और जिम्मेदार व्यवसाय के प्रति प्रतिबद्धता",
          ethics_paras: [
            "KT GEN Pharmaceuticals नैतिक व्यावसायिक सिद्धांतों और जिम्मेदार वितरण प्रथाओं द्वारा निर्देशित है। हमारा मानना है कि स्वास्थ्य सेवा क्षेत्र के भीतर स्थायी विकास और सार्थक साझेदारी के लिए विश्वास, पारदर्शिता और जवाबदेही आवश्यक हैं।",
            "हमारी प्रतिबद्धता व्यावसायिक प्रदर्शन से परे जिम्मेदार स्वास्थ्य सेवा वितरण का समर्थन करने और आवश्यक दवाओं तक पहुंच में सुधार करने तक फैली हुई है।"
          ],

          // Vision & Mission
          vision_head: "हमारा दृष्टिकोण",
          vision_para: "गुणवत्तापूर्ण उत्पादों की निरंतर डिलीवरी, नैतिक मानकों को बनाए रखते हुए और एक लचीले स्वास्थ्य सेवा पारिस्थितिकी तंत्र में योगदान देकर एक विश्वसनीय दवा वितरण भागीदार के रूप में उभरना।",
          mission_head: "हमारा मिशन",
          mission_points: [
            "दवा उत्पादों का समय पर और कुशल वितरण सुनिश्चित करना",
            "गुणवत्ता, सुरक्षा और नियामक अनुपालन के उच्च मानकों को बनाए रखना",
            "स्वास्थ्य सेवा मूल्य श्रृंखला में स्थायी साझेदारी बनाना",
            "जिम्मेदार वितरण प्रथाओं के माध्यम से सार्वजनिक स्वास्थ्य का समर्थन करना"
          ],

          // Our Core Values
          values_head: "हमारे मूल मूल्य",
          values_points: [
            "अखंडता और पारदर्शिता",
            "गुणवत्ता और रोगी सुरक्षा के प्रति प्रतिबद्धता",
            "विश्वसनीयता और जवाबदेही",
            "नैतिक और जिम्मेदार व्यावसायिक आचरण",
            "ग्राहक-केंद्रित सेवा वितरण"
          ],

          // Sustainability & Long-Term Outlook
          sustainability_head: "स्थिरता और दीर्घकालिक दृष्टिकोण",
          sustainability_para: "KT GEN Pharmaceuticals वितरण प्रथाओं के निरंतर सुधार, जिम्मेदार संचालन और दीर्घकालिक हितधारक जुड़ाव के माध्यम से स्थायी विकास के लिए प्रतिबद्ध है। हमारा लक्ष्य हमारे वितरण नेटवर्क को मजबूत करना, परिचालन क्षमताओं को बढ़ाना और भारत में विकसित स्वास्थ्य सेवा आवश्यकताओं के साथ संरेखित करना है।",

          // Partner With KT GEN
          partner_head: "KT GEN के साथ भागीदार बनें",
          partner_para: "हम फार्मास्युटिकल निर्माताओं, स्वास्थ्य संस्थानों और वितरकों को विश्वसनीय, अनुपालन और कुशल फार्मास्युटिकल वितरण समाधान देने में हमारे साथ सहयोग करने के लिए आमंत्रित करते हैं।",

          // Leadership
          about_meet_head: "हमारी नेतृत्व टीम",
          meet_card1name: "डॉ. किरण एस",
          meet_card1title: "अध्यक्ष और संस्थापक",
          meet_card1bio: "डॉ. किरण, केटी जेन फार्मास्यूटिकल्स के संस्थापक, ने कंपनी की स्थापना फार्मास्युटिकल उद्योग में विश्वास, गुणवत्ता और नैतिकता को पुनर्स्थापित करने की दृष्टि के साथ की। एक मजबूत क्लिनिकल पृष्ठभूमि के साथ, वे विश्वसनीय, उच्च-गुणवत्ता वाले फॉर्मूलेशन और पारदर्शी, दीर्घकालिक साझेदारी के निर्माण पर ध्यान केंद्रित करते हैं।",
          meet_card2name: "डॉ. तेजुवर्शिनी वी",
          meet_card2title: "सीईओ",
          meet_card2bio: "डॉ. तेजुवर्शिनी केटी जेन फार्मास्यूटिकल्स में एक महत्वपूर्ण भूमिका निभाती हैं। वे एक मजबूत क्लिनिकल दृष्टिकोण और रोगी-केंद्रित सोच के साथ कार्य करती हैं। गुणवत्ता, नैतिक व्यवहार और चिकित्सीय रूप से प्रासंगिक फॉर्मूलेशन पर उनका ध्यान कंपनी को विश्वसनीय और प्रभावी स्वास्थ्य समाधान प्रदान करने में सक्षम बनाता है।",
          meet_card3name: "श्री रोहित वी",
          meet_card3title: "प्रबंध निदेशक",
          meet_card3bio: "आपूर्ति श्रृंखला समन्वय और बाजार विस्तार में परिचालन अंतर्दृष्टि का योगदान देते हैं, वितरण क्षमताओं और ग्राहकों के जुड़ाव को सुदृढ़ करते हैं।",

          // Home Section
          home_heading: "KT GEN Pharmaceuticals",
          home_para: "KT GEN Pharmaceuticals Private Limited बेंगलुरु, भारत में स्थित एक पेशेवर रूप से प्रबंधित फार्मास्युटिकल वितरण कंपनी है। हम गुणवत्तापूर्ण फार्मास्युटिकल उत्पादों और संबद्ध स्वास्थ्य सेवा आपूर्ति तक समय पर पहुंच सुनिश्चित करके स्वास्थ्य सेवा पारिस्थितिकी तंत्र को मजबूत करने के लिए प्रतिबद्ध हैं। नैतिक प्रथाओं, नियामक अखंडता और परिचालन उत्कृष्टता से प्रेरित, KT GEN Pharmaceuticals स्वास्थ्य सेवा निरंतरता में निरंतर, सुरक्षित और कुशल दवा उपलब्धता का समर्थन करने के लिए निर्माताओं और स्वास्थ्य सेवा प्रदाताओं के साथ मिलकर काम करता है।",
          home_btn1: "सेवाओं को जानें",
          home_btn2: "संपर्क करें",

          // Reach & Impact / Counting
          count_head: "हमारी पहुंच और प्रभाव",
          count_para: "हम स्वास्थ्य सेवा तक पहुंच को बदल रहे हैं - एक गांव, एक व्यक्ति, एक समय में एक नवाचार।",
          certify_head: "प्रमाणित उत्कृष्टता",
          certifie_head: "वैश्विक मानकों",
          organization_head: "और विनियमों के लिए प्रमाणित",
          countc1_head: "गांव कवर किए गए",
          countc1_para: "दूरस्थ ग्रामीण क्षेत्रों तक स्वास्थ्य सेवा पहुंच का विस्तार करना।",
          countc2_head: "मरीजों की सेवा की",
          countc2_para: "हजारों लोगों को गुणवत्तापूर्ण देखभाल और सहायता प्रदान करना।",
          countc3_head: "स्वयंसेवक डॉक्टर",
          countc3_para: "समुदाय की सेवा करने वाले पेशेवरों की एक समर्पित टीम।",
          countc4_head: "शिविर आयोजित किए गए",
          countc4_para: "सामुदायिक कल्याण सुनिश्चित करने के लिए नियमित स्वास्थ्य शिविर।",

          // Redefining / Distribution Ecosystem
          redefine_head: "फार्मास्युटिकल वितरण को फिर से परिभाषित करना",
          redefine_para: "हम निर्माताओं और स्वास्थ्य सेवा प्रदाताओं के बीच की खाई को सटीकता और देखभाल के साथ पाटने के लिए प्रतिबद्ध हैं।",
          redefine_approch: "रणनीतिक दृष्टिकोण",
          redefine_approch_p: "हमारा वितरण नेटवर्क विश्वसनीयता और गति के लिए अनुकूलित है।",
          redefine_secuere: "सुरक्षित लॉजिस्टिक्स",
          redefine_secuere_p: "उत्पाद की अखंडता सुनिश्चित करने के लिए अत्याधुनिक भंडारण और परिवहन प्रणाली।",

          // Pregnancy Section
          pregnency_j: "गर्भावस्था की यात्रा",
          preg_explore: "देखभाल और सहायता के साथ गर्भावस्था के चरणों की खोज करना।",
          preg_about: "गर्भावस्था की यात्रा के बारे में",
          preg_h: "गर्भावस्था के दौरान अपने स्वास्थ्य को समझने और प्रबंधित करने के लिए एक व्यापक मार्गदर्शिका। KT GEN Pharmaceuticals में, हम हर मील के पत्थर के माध्यम से गर्भवती माताओं का समर्थन करने के लिए संसाधन प्रदान करते हैं।",
          preg_watch: "यात्रा देखें",

          // Campaign Section
          campaign_h: "हमारे अभियान",
          campaign_about: "सामुदायिक-आधारित पहलों के माध्यम से जागरूकता फैलाना और स्वास्थ्य सेवा समाधान प्रदान करना।",
          community_h: "सामुदायिक आउटरीच",
          community_about: "स्वास्थ्य शिक्षा और बुनियादी चिकित्सा सहायता प्रदान करने के लिए स्थानीय समुदायों के साथ जुड़ना।",
          testimonial_h: "हितधारक प्रशंसापत्र",
          testimonial_about: "हमारे वितरण नेटवर्क के प्रभाव के बारे में हमारे भागीदारों और लाभार्थियों से सुनना।",
          team_h: "टीम उत्कृष्टता",
          team_about: "आपूर्ति श्रृंखला की अखंडता सुनिश्चित करने के लिए मिलकर काम करने वाले हमारे समर्पित पेशेवर।",
          demo_h: "उत्पाद प्रदर्शन",
          demo_about: "चिकित्सा आपूर्ति के प्रभावी उपयोग पर स्वास्थ्य सेवा प्रदाताओं को शिक्षित करना।",
          ceremoney_h: "मान्यता कार्यक्रम",
          ceremoney_about: "स्वास्थ्य सेवा क्षेत्र में मील के पत्थर का जश्न मनाना और योगदान का सम्मान करना।",
          workshop_h: "नियामक कार्यशालाएं",
          workshop_about: "अपने हितधारकों को नवीनतम अनुपालन और सुरक्षा मानकों के बारे में सूचित रखना।",

          // Our Mission Section (Home)
          misstop_head: "हमारी प्रतिबद्धता",
          misshead1: "उद्देश्य और सटीकता के साथ",
          misshead2: "स्वास्थ्य सेवा प्रदान करना",
          missdethead1: "गुणवत्ता विवरण",
          missdetpara1: "यह सुनिश्चित करना कि प्रत्येक उत्पाद कड़े गुणवत्ता मानकों को पूरा करता है।",
          missdethead2: "कुशल आपूर्ति श्रृंखला",
          missdetpara2: "स्वास्थ्य सेवा प्रदाताओं को तेज़ और विश्वसनीय डिलीवरी।",
          missdethead3: "व्यापक नेटवर्क",
          missdetpara3: "क्षेत्र भर के शहरी और ग्रामीण क्षेत्रों तक पहुँच।",
          missbtn: "हमारे साथ भागीदार बनें",
          missqualhead: "गुणवत्ता सुनिश्चित",
          missqualpara: "आईएसओ और जीएमपी अनुपालन मानक",

          // Contact Us
          address_label: "पंजीकृत कार्यालय:",
          address_full: "No. 3009/1–4, 17वीं क्रॉस, दूसरा मेन रोड,\nबनशंकरी दूसरा चरण,\nबेंगलुरु - 560070, कर्नाटक, भारत",

          // UI labels
          about_btn: "और जानें",
          view_more: "और पढ़ें",
          contact_us: "संपर्क करें",
        }
      }

    },
  });

export default i18n;
