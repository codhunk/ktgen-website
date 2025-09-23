import { motion } from "framer-motion";
import heroVideo from "./assets/leaders/hero-story.mp4";
import founderImage from "./assets/leaders/anuj.png";
import journey1 from "./assets/leaders/journey.jpg";
import journey2 from "./assets/leaders/journey1.jpg";
import journey3 from "./assets/leaders/journey2.jpg";
import award1 from "./assets/leaders/award1.jpg";
import award2 from "./assets/leaders/award2.jpg";
import globe from "./assets/leaders/global.jpg";
import patient1 from "./assets/leaders/campaign2.jpg";
import patient2 from "./assets/leaders/campaign3.jpg";

const milestones = [
  { year: "2018", title: "Founded with Vision", description: "ManMed was born with a mission to bridge the gap between medical innovation and community care.", image: journey1 },
  { year: "2020", title: "Scaling Impact", description: "Expanded across multiple states, launching digital platforms and mobile medical units.", image: journey2 },
  { year: "2023", title: "Global Collaborations", description: "Partnered with global health organizations to further scale our reach and deepen our impact.", image: journey3 },
];

const testimonials = [
  { name: "Ramesh Kumar", text: "Thanks to ManMed, my village now has access to free health checkups and digital literacy programs.", image: patient1 },
  { name: "Anita Sharma", text: "The mobile clinic initiative has truly changed our lives. The ManMed team is exceptional!", image: patient2 },
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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={heroVideo}
        />
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative py-24 px-6 text-center bg-black bg-opacity-80 text-white"
      >
        <motion.div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Story</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            From humble beginnings to a healthcare revolution — discover ManMed’s journey, values, and vision.
          </p>
          <p className="text-md sm:text-lg text-white/70">
            Empowering communities, transforming lives, and creating access to quality healthcare for all.
          </p>
        </motion.div>
      </motion.section>

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
            ManMed was founded to create accessible, affordable, and sustainable healthcare solutions, reaching thousands of underserved communities through digital health and mobile clinics.
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
            className="rounded-3xl object-cover h-80 w-80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          />
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Message from Our Founder</h3>
            <p className="text-gray-700 text-lg">
              “What started as a dream to touch one life has transformed into a mission impacting millions. Compassion, technology, and a dedicated team redefine healthcare possibilities.”
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
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              <img src={step.image} alt={step.title} className="w-full h-44 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-bold text-blue-700">{step.year}</h4>
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
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Awards & Recognition</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-md shadow-lg overflow-hidden">
            <img src={award1} alt="Award 1" className="w-full object-cover" />
            <p className="mt-4 text-gray-600">Healthcare Excellence Award – 2021</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-md shadow-lg overflow-hidden">
            <img src={award2} alt="Award 2" className="w-full object-cover" />
            <p className="mt-4 text-gray-600">Digital Health Innovator – 2022</p>
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
              ManMed’s initiatives now extend beyond national borders, delivering healthcare access through remote consultations, digital health platforms, and global research collaborations.
            </p>
            <p className="text-lg">
              Mobile programs provide preventive care and education in underserved regions worldwide, building a connected, healthier global community.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Patient Voices</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ scale: 1.03 }} className="bg-gray-50 rounded-xl shadow-md p-6 flex items-center gap-6 cursor-pointer">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-gray-700 text-sm">{t.text}</p>
                <p className="font-semibold text-gray-800 mt-2">{t.name}</p>
              </div>
            </motion.div>
          ))}
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
          By 2030, ManMed aims to provide quality healthcare access to 50 million people, integrate AI-powered medical solutions, and strengthen community-driven healthcare programs globally.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition">
          Join the Movement
        </motion.button>
      </motion.section>
    </div>
  );
}
