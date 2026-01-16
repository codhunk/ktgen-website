import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

import tejuPic from "../assets/leaders/teju.jpeg";
import kiranPic from "../assets/leaders/kiran.JPG";
import anujPic from "./assets/leaders/rohit.jpeg";


const leaders = [
  {
    name: "meet_card2name",
    title: "meet_card2title",
    image: kiranPic,
    bio: "meet_card2bio",
    socials: {
      linkedin: "#",
      X: "#",
      instagram: "#",
    },
  },
  {
    name: "meet_card1name",
    title: "meet_card1title",
    image:  tejuPic,
    bio: "meet_card1bio",
    socials: {
      linkedin: "#",
      X: "#",
      instagram: "#",
    },
  },
  {
    name: "meet_card3name",
    title: "meet_card3title",
    image: anujPic,
    bio: "meet_card3bio",
    socials: {
      linkedin: "#",
      X: "#",
      instagram: "#",
    },
  },
];

const LeadershipTeam = () => {
  const { t } = useTranslation();
  return (
    <section className="border border-red-500 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-950 dark:via-blue-950 dark:to-cyan-950 py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 dark:text-indigo-100 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("about_meet_head")}
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10 "
          >
            {leaders.map((leader, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <motion.div
                  className="group rounded-xl p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 group-hover:p-0 shadow-lg h-96 flex flex-col items-center justify-center transition-all duration-500 ease-in-out gap-5 group-hover:flex-row group-hover:justify-between">
                    {/* Left Section (Image) */}
                    <div className="w-32 h-32 group-hover:w-1/2 group-hover:h-full rounded-full group-hover:rounded-none group-hover:rounded-tl-xl group-hover:rounded-bl-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-600 shrink-0 transition-all duration-500">
                      <img
                        className="w-full h-30 group-hover:h-full object-cover"
                        src={leader.image}
                        alt={leader.name}
                        draggable="false"
                      />
                    </div>
                    {/* Right Section (Details) */}
                    <div className="text-center group-hover:text-left flex-1 group-hover:w-1/2 group-hover:py-4 group-hover:pr-4 transition-all duration-500">
                      <h5 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                        {t(leader.name)}
                      </h5>
                      <p className="whitespace-pre-line text-lg text-indigo-600 dark:text-blue-300 font-medium mt-2">
                        {t(leader.title)}
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-white text-sm">
                        {t(leader.bio)}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-4 mt-4 justify-center group-hover:justify-start transition-all duration-500">
                        {leader.socials.linkedin && (
                          <a
                            href={leader.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-300 hover:text-blue-900 transition-colors duration-300" />
                          </a>
                        )}
                        {leader.socials.X && (
                          <a
                            href={leader.socials.X}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <X
                              className="w-5 h-5 text-black-600 hover:text-black-800 transition-colors"
                              aria-label="Close" 
                            />
                          </a>
                        )}
                        {leader.socials.instagram && (
                          <a
                            href={leader.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-300 hover:text-pink-700 transition-colors duration-300" />
                          </a>
                        )}
                        {leader.socials.facebook && (
                          <a
                            href={leader.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;





// import { motion } from "framer-motion";
// import { Linkedin, X, Instagram, Facebook } from "lucide-react";

// const LeadershipTeam = () => {
//   const directors = [
//     {
//       id: 1,
//       name: "Dr. Y. K. Hamied",
//       title: "Non-Executive Chairman",
//       description: "Dr. Y.K. Hamied is Non-Executive Chairman of the Company, and represents the second generation of Cipkra founding family. A world-renowned scientist, Dr Hamied obtained his PhD in organic chemistry in 1960 from the University of Cambridge under the tutelage of the Nobel laureate Lord Alexander Todd.",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face", // Scientist image
//       readMoreLink: "#",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#"
//       }
//     },
//     {
//       id: 2,
//       name: "John Smith",
//       title: "Executive Director",
//       description: "With over 20 years of experience in pharmaceutical industry. Former CEO of MedCorp International.",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Business executive
//       readMoreLink: "#",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#"
//       }
//     },
//     {
//       id: 3,
//       name: "Sarah Johnson",
//       title: "Independent Director",
//       description: "Finance expert with specialization in healthcare investments. Serves on multiple Fortune 500 boards.",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400&h=400&fit=crop&crop=face", // Professional woman
//       readMoreLink: "#",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         email: "#"
//       }
//     },
//     {
//       id: 4,
//       name: "Robert Chen",
//       title: "Non-Executive Director",
//       description: "Technology and innovation specialist focusing on pharmaceutical R&D advancements.",
//       readMoreLink: "#",
//     },
//     {
//       id: 5,
//       name: "Maria Garcia",
//       title: "Executive Director",
//       description: "Global operations leader with extensive experience in emerging markets expansion.",
//       readMoreLink: "#",
//     },
//     {
//       id: 6,
//       name: "David Wilson",
//       title: "Independent Director",
//       description: "Legal and regulatory affairs expert with focus on international compliance.",
//       readMoreLink: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             Board Of Directors
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Our leadership team brings together diverse expertise and decades of experience
//             in pharmaceuticals, research, and global healthcare.
//           </p>
//         </motion.div>

//         {/* Directors Grid with Images for First Three */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {directors.map((director, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
//                 director.id <= 3 ? 'group' : ''
//               }`}
//             >
//               {/* For directors with images (first 3) */}
//               {director.id <= 3 ? (
//                 <div className="p-0 overflow-hidden">
//                   {/* Image Container */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={director.image}
//                       alt={director.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
//                     {/* Social Links overlay on image */}
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="flex gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
//                         {director.socials?.linkedin && (
//                           <a href={director.socials.linkedin} className="text-blue-700 hover:text-blue-900">
//                             <Linkedin className="w-5 h-5" />
//                           </a>
//                         )}
//                         {director.socials?.twitter && (
//                           <a href={director.socials.twitter} className="text-gray-700 hover:text-black">
//                             <X className="w-5 h-5" />
//                           </a>
//                         )}
//                         <a href={`mailto:${director.socials?.email}`} className="text-gray-700 hover:text-blue-600">
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Below Image */}
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {director.name}
//                     </h3>
//                     <div className="flex items-center gap-2 mb-4">
//                       <div className="w-6 h-0.5 bg-blue-600"></div>
//                       <p className="text-lg font-semibold text-blue-700">
//                         {director.title}
//                       </p>
//                     </div>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed text-sm">
//                       {director.description}
//                     </p>

//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 text-sm"
//                     >
//                       Read More
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.button>
//                   </div>
//                 </div>
//               ) : (
//                 {/* For directors without images (last 3) */}
//                 // <div className="p-6">
//                 //   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 //     {director.name}
//                 //   </h3>
//                 //   <div className="flex items-center gap-2 mb-3">
//                 //     <div className="w-8 h-0.5 bg-blue-600"></div>
//                 //     <p className="text-lg font-semibold text-blue-700">
//                 //       {director.title}
//                 //     </p>
//                 //   </div>
                  
//                 //   <p className="text-gray-600 mb-6 leading-relaxed">
//                 //     {director.description}
//                 //   </p>

//                 //   <motion.button
//                 //     whileHover={{ scale: 1.05 }}
//                 //     whileTap={{ scale: 0.95 }}
//                 //     className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
//                 //   >
//                 //     <span className="mr-2">Read More</span>
//                 //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 //     </svg>
//                 //   </motion.button>
//                 // </div>
//               )}
              
//               {/* Decorative Bottom Border */}
//               <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Featured Director Highlight (Dr. Hamied) with Larger Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 shadow-xl overflow-hidden"
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-8">
//             {/* Left Side - Large Image */}
//             <div className="lg:w-1/3">
//               <div className="relative w-64 h-64 mx-auto lg:mx-0">
//                 <img
//                   src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face"
//                   alt="Dr. Y. K. Hamied"
//                   className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
//                 />
//                 {/* Featured Badge */}
//                 <div className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
//                   Chairman
//                 </div>
//               </div>
//             </div>

//             {/* Middle - Name and Title */}
//             <div className="lg:w-2/3">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                   Dr. Y. K. Hamied
//                 </h2>
//                 <p className="text-xl text-blue-700 font-semibold mb-6">
//                   Non-Executive Chairman
//                 </p>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   Dr. Y.K. Hamied is Non-Executive Chairman of the Company, and represents the second generation of Cipkra founding family. A world-renowned scientist, Dr Hamied obtained his PhD in organic chemistry in 1960 from the University of Cambridge under the tutelage of the Nobel laureate Lord Alexander Todd.
//                 </p>
                
//                 {/* Social Links for Featured Director */}
//                 <div className="flex gap-4 mb-6 justify-center lg:justify-start">
//                   <a href="#" className="p-2 bg-white rounded-full shadow hover:shadow-lg transition-shadow">
//                     <Linkedin className="w-6 h-6 text-blue-700" />
//                   </a>
//                   <a href="#" className="p-2 bg-white rounded-full shadow hover:shadow-lg transition-shadow">
//                     <X className="w-6 h-6 text-gray-700" />
//                   </a>
//                   <a href="#" className="p-2 bg-white rounded-full shadow hover:shadow-lg transition-shadow">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Note */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <p className="text-gray-500 text-sm max-w-2xl mx-auto">
//             Our Board of Directors provides strategic guidance and oversight, ensuring 
//             we remain committed to our mission of advancing healthcare through innovation 
//             and excellence.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LeadershipTeam;
