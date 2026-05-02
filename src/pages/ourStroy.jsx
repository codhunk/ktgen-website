import { motion } from "framer-motion";
import {
  ShieldCheck, FlaskConical, Target, BadgeCheck, Star,
  HeartHandshake, TrendingUp, BarChart2, Megaphone, Handshake
} from "lucide-react";
import heroVideo from "./assets/leaders/hero-story.mp4";
import founderImage from "./assets/leaders/campaign1.jpg";
import journey1 from "./assets/leaders/journey.jpg";
import journey2 from "./assets/leaders/journey1.jpg";
import journey3 from "./assets/leaders/journey2.jpg";
import award1 from "./assets/leaders/award1.jpg";
import award2 from "./assets/leaders/award2.jpg";
import globe from "./assets/leaders/global.jpg";
import patient1 from "./assets/leaders/campaign2.jpg";
import patient2 from "./assets/leaders/campaign3.jpg";

const milestones = [
  { year: "2018", title: "Founded with Vision", description: "KT Gen was born with a mission to bridge the gap between medical innovation and community care.", image: journey1 },
  { year: "2020", title: "Scaling Impact", description: "Expanded across multiple states, launching digital platforms and mobile medical units.", image: journey2 },
  { year: "2023", title: "Global Collaborations", description: "Partnered with global health organizations to further scale our reach and deepen our impact.", image: journey3 },
];

const testimonials = [
  { name: "Ramesh Kumar", text: "Thanks to KT Gen, my village now has access to free health checkups and digital literacy programs.", image: patient1 },
  { name: "Anita Sharma", text: "The mobile clinic initiative has truly changed our lives. The KT Gen team is exceptional!", image: patient2 },
];

const partnerCards = [
  { number: "01", icon: <TrendingUp size={26} />, title: "Exclusive Growth Opportunity", desc: "We offer region-focused partnerships, ensuring you don't compete — you lead." },
  { number: "02", icon: <BarChart2 size={26} />, title: "Portfolio with Purpose", desc: "Our product range is carefully designed based on real market demand and clinical relevance, helping you move faster and smarter." },
  { number: "03", icon: <ShieldCheck size={26} />, title: "Transparent & Ethical Practices", desc: "No hidden clauses. No unrealistic commitments. Just clear, honest collaboration." },
  { number: "04", icon: <Megaphone size={26} />, title: "Marketing that Works for You", desc: "From branding to promotional strategies, we equip you with tools that actually create impact in your territory." },
  { number: "05", icon: <HeartHandshake size={26} />, title: "Continuous Support System", desc: "We don't disappear after onboarding. Our team stays with you — guiding, supporting, and growing together." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } } };

export default function OurStoryPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative h-[70vh] sm:h-[80vh] md:h-[100vh] flex items-center justify-center text-center overflow-hidden"
      >
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline src={heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-indigo-800/70 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="relative z-20 px-4 sm:px-6 md:px-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            Transforming Healthcare, One Life at a Time
          </h1>
          <p className="max-w-2xl md:max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
            Innovative healthcare solutions bridging technology and community care.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== OUR STORY ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-[80px] opacity-60 translate-y-1/3 -translate-x-1/3" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — narrative */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest text-[#c9a24d] uppercase bg-[#c9a24d]/10 rounded-full border border-[#c9a24d]/20">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-snug">
                KT Gen Pharmaceuticals wasn't built in a boardroom.
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  "It began with a simple but powerful observation — healthcare is everywhere, yet trust is rare.",
                  "In a world where medicines are often reduced to numbers, margins, and transactions, we chose a different path. We believed that every formulation carries a responsibility — not just to heal, but to uphold integrity, precision, and purpose.",
                  "KT Gen was founded with a vision to bridge the gap between science and sincerity. We are not here to be the biggest pharmaceutical company — we are here to be the most dependable one."
                ].map((para, idx) => (
                  <motion.p key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                    {para}
                  </motion.p>
                ))}
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                <p className="text-sm font-semibold text-blue-900 mb-4 uppercase tracking-wider">Every product we create reflects a deeper commitment:</p>
                <div className="space-y-3">
                  {[
                    "To quality that never negotiates",
                    "To innovation that serves real clinical needs",
                    "To partnerships that are built on transparency, not targets"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a24d]/15 flex items-center justify-center">
                        <BadgeCheck size={14} className="text-[#c9a24d]" />
                      </div>
                      <span className="text-base text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-500 leading-relaxed mb-5 font-light">
                From carefully curated formulations to ethically driven practices, KT Gen stands for a new generation of pharmaceuticals — where growth is meaningful and trust is measurable.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-900 rounded-xl text-white font-semibold text-sm shadow-lg">
                <Star size={16} className="text-[#c9a24d]" />
                <span>We don't just manufacture medicines. We build confidence — dose by dose.</span>
              </div>
            </motion.div>

            {/* Right — trust card */}
            <motion.div initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-10 text-white min-h-[480px] flex flex-col justify-between">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a24d' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#c9a24d]/20 border border-[#c9a24d]/30 flex items-center justify-center mb-8">
                    <HeartHandshake size={32} className="text-[#c9a24d]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#c9a24d] mb-3">Built on Trust</h3>
                  <p className="text-blue-100 font-light leading-relaxed text-lg mb-8">
                    Every decision we make is guided by one question: <em className="text-white not-italic font-medium">"Does this serve the patient?"</em>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Quality First", icon: <BadgeCheck size={18} /> },
                      { label: "Clinical Focus", icon: <FlaskConical size={18} /> },
                      { label: "Transparency", icon: <ShieldCheck size={18} /> },
                      { label: "Purpose-Led", icon: <Target size={18} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                        <span className="text-[#c9a24d]">{item.icon}</span>
                        <span className="text-sm font-medium text-white">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#c9a24d] font-bold">KT Gen Pharmaceuticals</p>
                  <p className="text-blue-200 text-sm font-light">A New Generation of Pharma</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#c9a24d] rounded-full blur-[80px] opacity-10 -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES OUR PARTNERSHIP DIFFERENT ===== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c9a24d]/10 rounded-full blur-[90px] translate-x-1/3 translate-y-1/3" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#c9a24d] uppercase bg-[#c9a24d]/10 rounded-full border border-[#c9a24d]/20">
                Partner Program
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Grow Beyond Business</h2>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-lg font-semibold text-blue-900 mb-2">At KT Gen Pharmaceuticals, partnership is not a distribution channel — it is a shared journey.</p>
            <p className="text-base text-gray-500 font-light leading-relaxed">We understand that behind every partner is ambition, risk, and a desire to build something lasting. That's why our Partner Program is designed not just to support your business, but to elevate it.</p>
          </motion.div>

          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Our Partnership Different?
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {partnerCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#c9a24d]/30 transition-all duration-500 flex flex-col"
              >
                <div className="absolute top-6 right-6 text-4xl font-black text-gray-100 group-hover:text-[#c9a24d]/20 transition-colors duration-500 select-none leading-none">{card.number}</div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-inner">{card.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors leading-snug">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">{card.desc}</p>
                <div className="mt-6 w-8 h-1 bg-blue-100 rounded-full group-hover:w-16 group-hover:bg-[#c9a24d] transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden bg-blue-900 p-12 md:p-16 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#c9a24d]/20 border border-[#c9a24d]/30 flex items-center justify-center mb-6">
                  <Handshake size={28} className="text-[#c9a24d]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#c9a24d] mb-4">More Than a Partner — A Shared Vision</h3>
                <p className="text-blue-100 text-lg font-light leading-relaxed">When you join KT Gen Pharmaceuticals, you're not just associating with a company — you become part of a movement that believes in doing pharma differently.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#c9a24d] font-bold mb-6">A movement where:</p>
                <div className="space-y-4">
                  {["Quality is non-negotiable", "Relationships are long-term", "Success is shared"].map((val, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-[#c9a24d] shadow-[0_0_8px_rgba(201,162,77,0.6)]" />
                      <span className="text-lg font-medium text-white">{val}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* About & Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Who We Are</h2>
        <motion.div className="max-w-6xl mx-auto text-gray-700 text-lg space-y-6">
          <motion.p variants={fadeUp}>
            KT Gen was founded to create accessible, affordable, and sustainable healthcare solutions, reaching thousands of underserved communities through digital health and mobile clinics.
          </motion.p>
          <motion.p variants={fadeUp}>
            Guided by empathy, innovation, and integrity, our initiatives span health education, early diagnosis, and preventive care.
          </motion.p>
          <motion.p variants={fadeUp}>
            Our vision is to empower communities with tools, knowledge, and medical resources for a resilient healthcare ecosystem.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Founder Message */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gray-100 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 justify-items-end">
          <motion.img
            src={founderImage}
            alt="Founder"
            className="rounded-xl object-cover h-80 w-80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          />
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Message from Our Founder</h3>
            <p className="text-gray-700 text-lg">
              "What started as a dream to touch one life has transformed into a mission impacting millions. Compassion, technology, and a dedicated team redefine healthcare possibilities."
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Each initiative is a step toward a world where quality healthcare is accessible to all, empowering communities to thrive.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-20 px-6 bg-gray-50 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Journey</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {milestones.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-md p-6 cursor-pointer">
              <img src={step.image} alt={step.title} className="w-full h-44 object-cover rounded-md mb-4" />
              <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 bg-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Awards &amp; Recognition</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-md shadow-lg overflow-hidden">
            <img src={award1} alt="Award 1" className="w-full object-cover" />
            <p className="mt-4 text-gray-600">Healthcare Excellence Award</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-md shadow-lg overflow-hidden">
            <img src={award2} alt="Award 2" className="w-full object-cover" />
            <p className="mt-4 text-gray-600">Digital Health Innovator</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Outreach */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 bg-gray-100 text-gray-800"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">Global Outreach</h2>
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-10 items-center">
          <motion.img src={globe} alt="Global Outreach" className="w-full h-full object-cover rounded-lg shadow-lg" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} />
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
            <p className="text-lg mb-4">
              KT Gen's initiatives now extend beyond national borders, delivering healthcare access through remote consultations, digital health platforms, and global research collaborations.
            </p>
            <p className="text-lg">
              Mobile programs provide preventive care and education in underserved regions worldwide, building a connected, healthier global community.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision 2030 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 bg-green-600 text-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vision 2030</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-6">
          By 2030, KT Gen aims to provide quality healthcare access to 50 million people, integrate AI-powered medical solutions, and strengthen community-driven healthcare programs globally.
        </p>
        <motion.a href="mailto:info@ktgenpharmaceuticals.com" whileHover={{ scale: 1.05 }} className="inline-block">
          <motion.button className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition">
            Join the Movement
          </motion.button>
        </motion.a>
      </motion.section>

    </div>
  );
}
