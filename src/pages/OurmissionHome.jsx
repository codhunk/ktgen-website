
import { motion } from "framer-motion";
import heroImage from "./assets/leaders/healthcare.jpg";
import founderImage from "./assets/leaders/anuj.png";
import storyImage from "./assets/leaders/story-main.jpg";
import testimonial1 from "./assets/leaders/anuj.png";
import testimonial2 from "./assets/leaders/rahul.jpg";
import ctaImage from "./assets/leaders/neurology.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function OurMissionPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 px-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Redefining Healthcare, One Life at a Time</h1>
          <p className="text-white text-lg sm:text-xl">Every community deserves care, compassion, and commitment.</p>
        </div>
      </motion.section>

{/* Our Reach & Impact */}
<section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
        Our Reach & Impact
      </h2>
      <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        We are transforming access to healthcare — one village, one person, one innovation at a time.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
        <div className="text-blue-600 text-4xl font-bold">150+</div>
        <div className="mt-1 text-sm text-gray-500 uppercase tracking-wide">Villages Covered</div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
        <div className="text-blue-600 text-4xl font-bold">20K+</div>
        <div className="mt-1 text-sm text-gray-500 uppercase tracking-wide">Patients Served</div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
        <div className="text-blue-600 text-4xl font-bold">500+</div>
        <div className="mt-1 text-sm text-gray-500 uppercase tracking-wide">Volunteer Doctors</div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
        <div className="text-blue-600 text-4xl font-bold">50+</div>
        <div className="mt-1 text-sm text-gray-500 uppercase tracking-wide">Camps Conducted</div>
      </div>
    </div>
  </div>
</section>



      {/* Our Approach Timeline */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Approach: A Journey of Innovation</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {[
            { year: "2018", point: "Mobile clinics deployed across rural India." },
            { year: "2020", point: "AI-based diagnostics piloted in tier-2 cities." },
            { year: "2022", point: "Women’s health education in 5,000 villages." },
            { year: "2025", point: "Remote-first chronic care expansion (in progress)." }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeUp} className="flex items-start gap-4">
              <div className="text-green-700 font-bold text-xl">{item.year}</div>
              <p className="text-gray-700">{item.point}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Beliefs */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Beliefs</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {[
            { icon: "❤️", title: "Empathy", desc: "Putting people first in all healthcare solutions." },
            { icon: "⚙️", title: "Innovation", desc: "Tech-first models that are scalable and inclusive." },
            { icon: "📚", title: "Education", desc: "Health literacy through community outreach." },
            { icon: "🌿", title: "Sustainability", desc: "Long-term solutions for lasting health impact." }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="p-6 bg-gray-50 rounded shadow">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-lg text-green-700 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Case Study */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={storyImage} alt="Impact Story" className="rounded-lg shadow-md" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Real Lives. Real Change.</h2>
            <p className="text-lg text-gray-700 mb-4">
              Radha, a 27-year-old mother from a remote village, received critical prenatal care from our mobile clinic — saving both her and her baby's life.
            </p>
            <p className="text-md text-gray-600">This is the power of accessible healthcare. This is our mission in action.</p>
          </div>
        </div>
      </motion.section>

      {/* Metrics */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {[
            { value: "2.5M+", label: "Lives Touched" },
            { value: "10K+", label: "Communities Served" },
            { value: "150+", label: "Mobile Units Active" }
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-8 bg-gray-50 rounded shadow">
              <p className="text-4xl font-bold text-green-700">{item.value}</p>
              <p className="text-md mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">They Believe in Us</h2>
        <div className="max-w-6xl mx-auto grid  gap-10 justify-center">
          {[testimonial1].map((img, idx) => (
            <motion.div key={idx} variants={fadeUp} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow flex items-center gap-6 text-left">
              <img src={img} alt="Testimonial" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <p className="italic text-gray-600">“We never had access to a doctor before. ManMed changed that for our village.”</p>
                <p className="font-semibold text-gray-800 mt-2">Our Founder</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-24 px-6 bg-green-700 text-white text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4">Be Part of the Change</h2>
          <p className="text-lg mb-6">Join our movement to revolutionize healthcare and reach 50 million lives by 2030.</p>
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">Join Us</button>
        </div>
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${ctaImage})` }} />
      </motion.section>
    </div>
  );
}
