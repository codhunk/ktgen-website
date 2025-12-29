// import { motion } from "framer-motion";
// import { useState } from "react";

// import education from "./assets/leaders/education.jpg";
// import health from "./assets/leaders/healthcare.jpg";
// import environment from "./assets/leaders/enviornment.jpg";
// import nutrition from "./assets/leaders/food.jpg";

// import kidsIcon from "./assets/icons/playtime.png";
// import heartIcon from "./assets/icons/healthcare.png";
// import treeIcon from "./assets/icons/tree.png";
// import foodIcon from "./assets/icons/meal.png";

// const initiatives = [
//   {
//     title: "Education for All",
//     description:
//       "We fund schools, provide scholarships, and organize digital learning drives to bridge educational gaps in underserved communities.",
//     image: education,
//     icon: kidsIcon,
//   },
//   {
//     title: "Healthcare Camps",
//     description:
//       "KT Gen organizes regular free health check-ups, mobile clinics, and vaccination drives to improve access to healthcare.",
//     image: health,
//     icon: heartIcon,
//   },
//   {
//     title: "Environmental Sustainability",
//     description:
//       "From tree plantation to clean energy awareness, our green initiatives aim to protect the planet for future generations.",
//     image: environment,
//     icon: treeIcon,
//   },
//   {
//     title: "Food & Nutrition",
//     description:
//       "We fight hunger through mid-day meal programs, food donation campaigns, and community kitchens in rural and urban areas.",
//     image: nutrition,
//     icon: foodIcon,
//   },
// ];

// const stats = [
//   { label: "Children Educated", value: "12,000+" },
//   { label: "Free Medical Camps", value: "350+" },
//   { label: "Trees Planted", value: "50,000+" },
//   { label: "Meals Served", value: "1 Million+" },
//   { label: "Scholarships Awarded", value: "1,500+" },
//   { label: "Families Supported", value: "30,000+" },
//   { label: "Women Empowered", value: "7,200+" },
//   { label: "Villages Reached", value: "110+" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function CSRPage() {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="relative min-h-[85vh] flex items-center justify-center text-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6"
//       >
//         <div className="max-w-4xl z-10">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">Corporate Social Responsibility</h1>
//           <p className="max-w-2xl mx-auto text-lg sm:text-xl">
//             At KT Gen, we are driven by the belief that corporate success must go hand-in-hand with social progress. Our CSR initiatives are rooted in compassion, innovation, and community-first thinking.
//           </p>
//         </div>
//       </motion.section>

//       {/* About Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         className="py-16 px-4 sm:px-6 lg:px-10 text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Commitment</h2>
//         {/* <p className="max-w-4xl mx-auto text-base sm:text-lg text-gray-600">
//           CSR at KT Gen is more than a responsibility—it's a reflection of our core values. Through inclusive programs and community partnerships, we empower lives, preserve nature, and promote wellness beyond hospitals.
//         </p> */}
//         <div className="mt-10 max-w-5xl mx-auto text-gray-700 text-base sm:text-lg">
//           <p className="mb-4">
//             We integrate sustainable development into every level of our operations—focusing not just on patient care, but on societal care. Whether it's enabling education in rural areas or ensuring basic healthcare in underserved regions, we are committed to creating long-term value for society.
//           </p>
//           <p>
//             By listening to communities, collaborating with local leaders, and addressing real-world problems, we make sure our impact is both measurable and meaningful.
//           </p>
//         </div>
//       </motion.section>

//       {/* Initiatives Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-50"
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {initiatives.map((item, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeUp}
//               transition={{ delay: idx * 0.2 }}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
//             >
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
//                   <img src={item.icon} alt={`${item.title} icon`} className="w-8 h-8" />
//                 </div>
//               </div>
//               <div className="p-6 flex flex-col justify-between flex-grow">
//                 <h3 className="text-lg font-bold text-green-700 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Statistics Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         className="py-20 px-6 bg-white text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Impact So Far</h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col items-center"
//               variants={fadeUp}
//               transition={{ delay: idx * 0.1 }}
//             >
//               <span className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</span>
//               <p className="text-gray-600 mt-2 text-sm sm:text-base text-center">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Call-to-Action */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         className="py-20 px-4 sm:px-6 lg:px-10 bg-green-600 text-white text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Be a Part of the Change</h2>
//         <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
//           Want to support or partner with KT Gen in our CSR journey? Reach out to collaborate on impactful initiatives that truly transform lives and communities.
//         </p>
//         <button className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition">
//           Contact Us
//         </button>
//       </motion.section>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";

import education from "./assets/leaders/education.jpg";
import health from "./assets/leaders/healthcare.jpg";
import environment from "./assets/leaders/enviornment.jpg";
import nutrition from "./assets/leaders/food.jpg";
import cardiology from "./assets/leaders/cardiology.jpeg";
import kidsIcon from "./assets/icons/playtime.png";
import heartIcon from "./assets/icons/healthcare.png";
import treeIcon from "./assets/icons/tree.png";
import foodIcon from "./assets/icons/meal.png";

import campaign1 from "./assets/leaders/campaign1.jpg";
import campaign2 from "./assets/leaders/campaign2.jpg";
import campaign3 from "./assets/leaders/campaign3.jpg";
import reportIcon from "./assets/icons/pdf.png";

const initiatives = [
  {
    title: "Education for All",
    description:
      "We fund schools, provide scholarships, and organize digital learning drives to bridge educational gaps in underserved communities.",
    image: education,
    icon: kidsIcon,
  },
  {
    title: "Healthcare Camps",
    description:
      "KT Gen organizes regular free health check-ups, mobile clinics, and vaccination drives to improve access to healthcare.",
    image: health,
    icon: heartIcon,
  },
  {
    title: "Environmental Sustainability",
    description:
      "From tree plantation to clean energy awareness, our green initiatives aim to protect the planet for future generations.",
    image: environment,
    icon: treeIcon,
  },
  {
    title: "Food & Nutrition",
    description:
      "We fight hunger through mid-day meal programs, food donation campaigns, and community kitchens in rural and urban areas.",
    image: nutrition,
    icon: foodIcon,
  },
];

const stats = [
  { label: "Pharamacy", value: "50+" },
  { label: "Trusted Brands", value: "6+" },
  { label: "Villages Reached", value: "100+" },
  { label: "Delivery Rate", value: "99%" },
  { label: "Trees Planted", value: "50+" },
  { label: "Meals Served", value: "1000+" },
  { label: "Scholarships Awarded", value: "10+" },
  { label: "Women Empowered", value: "10+" },

];

const campaigns = [
  {
    title: "Digital Literacy Drive - 2024",
    description: "We distributed tablets and conducted digital learning workshops across 20 villages.",
    image: campaign1,
  },
  {
    title: "Green Earth Campaign",
    description: "Over 10,000 saplings planted across industrial zones to improve air quality.",
    image: campaign2,
  },
  {
    title: "Rural Health Marathon",
    description: "Mobile clinics ran 24/7 across 15 districts for 3 months, serving over 25,000 people.",
    image: campaign3,
  },
];

const galleryImages = [education, health, environment, nutrition, cardiology, campaign1, campaign2, campaign3];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

export default function CSRPage() {
  return (
    <div className="bg-white text-gray-800">
      <motion.section initial="hidden" animate="visible" variants={fadeUp} className="relative min-h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6">
        <div className="max-w-4xl z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Corporate Social Responsibility</h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl">
            At KT Gen, we are driven by the belief that corporate success must go hand-in-hand with social progress. Our CSR initiatives are rooted in compassion, innovation, and community-first thinking.
          </p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Commitment</h2>
        <div className="mt-10 max-w-5xl mx-auto text-gray-700 text-base sm:text-lg">
          <p className="mb-4">We integrate sustainable development into every level of our operations—focusing not just on patient care, but on societal care.</p>
          <p>By listening to communities, collaborating with local leaders, and addressing real-world problems, we ensure our impact is both measurable and meaningful.</p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} transition={{ delay: idx * 0.2 }} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                  <img src={item.icon} alt={`${item.title} icon`} className="w-8 h-8" />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Impact So Far</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <motion.div key={idx} className="flex flex-col items-center" variants={fadeUp} transition={{ delay: idx * 0.1 }}>
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</span>
              <p className="text-gray-600 mt-2 text-sm sm:text-base text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Vision & Mission</h2>
        <div className="max-w-5xl mx-auto text-gray-700 text-lg space-y-4">
          <p><strong>Vision:</strong> To create a sustainable and inclusive future where everyone has access to quality education, healthcare, and a clean environment.</p>
          <p><strong>Mission:</strong> To empower communities through impactful programs driven by transparency, collaboration, and measurable outcomes.</p>
        </div>
      </motion.section>

      {/* <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Partnerships & Collaborations</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg mb-10">KT Gen collaborates with NGOs, government bodies, educational institutions, and local community leaders to implement grassroots initiatives with scale and integrity.</p>
        <div className="max-w-4xl mx-auto text-sm text-gray-500">Recent Partners: UNICEF • Tata Trusts • Ministry of Health • Teach for India • Swachh Bharat Abhiyan</div>
      </motion.section> */}

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={campaign2} alt="CSR Philosophy" className="w-full h-72 object-cover rounded-lg shadow-md" />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">“Change doesn't happen in boardrooms — it happens on the ground.”</h3>
            <p className="text-gray-600 text-lg">Our CSR philosophy is rooted in accountability, participation, and empathy.</p>
          </div>
        </div>
      </motion.section>

      {/* <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Recent Campaigns</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {campaigns.map((c, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ delay: i * 0.2 }} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-blue-700">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10">CSR in Action — Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="h-40 w-full object-cover rounded-md shadow" />
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Download Our CSR Report</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Get detailed insights into our CSR programs, performance, and impact data in our latest annual report.</p>
        <a href="/documents/CSR_Report_2024.pdf" download className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
          <img src={reportIcon} alt="PDF" className="w-6 h-6" />
          Download PDF
        </a>
      </motion.section>
    </div>
  );
}
