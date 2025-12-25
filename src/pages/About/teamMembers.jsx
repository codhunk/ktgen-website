// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";

// import { useTranslation } from "react-i18next";
// import { BsInstagram, BsTwitterX } from "react-icons/bs";
// import { CiLinkedin } from "react-icons/ci";

// import "swiper/css";
// import "swiper/css/pagination";

// import rahulPic from "./assets/leaders/rahul.jpg";
// import vibhaPic from "./assets/leaders/vibha.jpeg";
// import anujPic from "./assets/leaders/anuj.png";

// const leaders = [
//   {
//     name: "meet_card1name",
//     title: "meet_card1title",
//     image: rahulPic,
//     bio: "meet_card1bio",
//     socials: {
//       linkedin: "#",
//       X: "#",
//       instagram: "#",
//     },
//   },
//   {
//     name: "meet_card2name",
//     title: "meet_card2title",
//     image: vibhaPic,
//     bio: "meet_card2bio",
//     socials: {
//       linkedin: "#",
//       X: "#",
//       instagram: "#",
//     },
//   },
//   {
//     name: "meet_card3name",
//     title: "meet_card3title",
//     image: anujPic,
//     bio: "meet_card3bio",
//     socials: {
//       linkedin: "#",
//       X: "#",
//       instagram: "#",
//     },
//   },
// ];

// const LeadershipTeam = () => {
//   const { t } = useTranslation();


//   return (
//     <section className="border border-2 border-red-500 max-h-[90vh] overflow-y-auto">
//       <div className="bg-blue-300 h-[65vh] pt-[60px] ">
//       <div className="border border-black w-full  h-[115px] bg-gray-200 relative">
//         <div className="absolute -top-8 left-20 p-7 text-5xl bg-white shadow-xl rounded-lg text-gray-900 font-semibold border border-black">Board of Derectors</div>

//       {/* first card */}
//       <div className="border border-black absolute top-[150px] left-20 flex bg-red-500 rounded-xl overflow-hidden ">
//         <div className="border bg-green-300 h-96 object-cover">
//           <img src={leaders[2].image} alt="Director_img" className="h-full w-full object-cover"  />
//           </div>
//         <div className="border border-green-500 py-[60px] min-w-[600px]">
//           <div className="border border-black max-w-sm mx-auto">
//             <h1 className="text-5xl font-semibold text-black dark:text-white">{leaders[2].name}</h1>
//             <p className="text-xl font-semibold my-5 text-gray-700 dark:text-gray-200">{leaders[2].title}</p>
//             <p className="text-lg mt-1 text-gray-700 dark:text-gray-200">{leaders[2].bio}</p>

//             <div className="flex gap-5 text-2xl mt-5">
//           <a href={leaders[2].socials.linkedin}><CiLinkedin /></a>
//           <a href={leaders[2].socials.X}><BsTwitterX /></a>
//           <a href={leaders[2].socials.instagram}><BsInstagram /></a> 
//             </div>
//           </div>
//         </div>
//       </div>

//       </div>
//       </div> 

//       {/* second card */}
//       <div className="border border-green-500 border-2 flex justify-end mt-[280px] pr-[80px]">
//           <div className="border border-black flex bg-red-500 rounded-xl overflow-hidden ">
//         <div className="border bg-green-300 h-96 object-cover">
//           <img src={leaders[1].image} alt="Director_img" className="h-full w-full object-cover"  />
//           </div>
//         <div className="border border-green-500 py-[60px] min-w-[600px]">
//           <div className="border border-black max-w-sm mx-auto">
//             <h1 className="text-5xl font-semibold text-black dark:text-white">{leaders[1].name}</h1>
//             <p className="text-xl font-semibold my-5 text-gray-700 dark:text-gray-200">{leaders[1].title}</p>
//             <p className="text-lg mt-1 text-gray-700 dark:text-gray-200">{leaders[1].bio}</p>

//             <div className="flex gap-5 text-2xl mt-5">
//           <a href={leaders[1].socials.linkedin}><CiLinkedin /></a>
//           <a href={leaders[1].socials.X}><BsTwitterX /></a>
//           <a href={leaders[1].socials.instagram}><BsInstagram /></a> 
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>

//     {/* third card */}
//       <div className="border border-green-500 border-2 mb-[70px] mt-[100px] flex pl-[80px]">
//           <div className="border border-black flex bg-red-500 rounded-xl overflow-hidden ">
//         <div className="border bg-green-300 h-96 object-cover">
//           <img src={leaders[0].image} alt="Director_img" className="h-full w-full object-cover"  />
//           </div>
//         <div className="border border-green-500 py-[60px] min-w-[600px]">
//           <div className="border border-black max-w-sm mx-auto">
//             <h1 className="text-5xl font-semibold text-black dark:text-white">{leaders[0].name}</h1>
//             <p className="text-xl font-semibold my-5 text-gray-700 dark:text-gray-200">{leaders[0].title}</p>
//             <p className="text-lg mt-1 text-gray-700 dark:text-gray-200">{leaders[0].bio}</p>

//             <div className="flex gap-5 text-2xl mt-5">
//           <a href={leaders[0].socials.linkedin}><CiLinkedin /></a>
//           <a href={leaders[0].socials.X}><BsTwitterX /></a>
//           <a href={leaders[0].socials.instagram}><BsInstagram /></a> 
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   )


  // return (
  //   <section className="border border-red-500 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-950 dark:via-blue-950 dark:to-cyan-950 py-20">
  //     <div className="container mx-auto px-4 text-center">
  //       <motion.h2
  //         className="text-4xl font-bold text-blue-900 dark:text-indigo-100 mb-12"
  //         initial={{ opacity: 0, y: -20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5 }}
  //         viewport={{ once: true }}
  //       >
  //         {t("about_meet_head")}
  //       </motion.h2>

  //       <div className="relative">
  //         <Swiper
  //           modules={[Pagination]}
  //           spaceBetween={30}
  //           pagination={false}
  //           breakpoints={{
  //             768: { slidesPerView: 2 },
  //             1024: { slidesPerView: 3 },
  //           }}
  //           className="pb-10 "
  //         >
  //           {leaders.map((leader, idx) => (
  //             <SwiperSlide key={idx} className="h-auto">
  //               <motion.div
  //                 className="group rounded-xl p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
  //                 initial={{ opacity: 0, y: 50 }}
  //                 whileInView={{ opacity: 1, y: 0 }}
  //                 transition={{ duration: 0.5, delay: idx * 0.2 }}
  //                 viewport={{ once: true }}
  //               >
  //                 <div className="bg-white dark:bg-slate-800 rounded-xl p-6 group-hover:p-0 shadow-lg h-96 flex flex-col items-center justify-center transition-all duration-500 ease-in-out gap-5 group-hover:flex-row group-hover:justify-between">
  //                   {/* Left Section (Image) */}
  //                   <div className="w-32 h-32 group-hover:w-1/2 group-hover:h-full rounded-full group-hover:rounded-none group-hover:rounded-tl-xl group-hover:rounded-bl-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-600 shrink-0 transition-all duration-500">
  //                     <img
  //                       className="w-full h-30 group-hover:h-full object-cover"
  //                       src={leader.image}
  //                       alt={leader.name}
  //                       draggable="false"
  //                     />
  //                   </div>

  //                   {/* Right Section (Details) */}
  //                   <div className="text-center group-hover:text-left flex-1 group-hover:w-1/2 group-hover:py-4 group-hover:pr-4 transition-all duration-500">
  //                     <h5 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
  //                       {t(leader.name)}
  //                     </h5>
  //                     <p className="text-lg text-indigo-600 dark:text-blue-300 font-medium mt-2">
  //                       {t(leader.title)}
  //                     </p>
  //                     <p className="mt-2 text-gray-600 dark:text-white text-sm">
  //                       {t(leader.bio)}
  //                     </p>

  //                     {/* Social Links */}
  //                     <div className="flex gap-4 mt-4 justify-center group-hover:justify-start transition-all duration-500">
  //                       {leader.socials.linkedin && (
  //                         <a
  //                           href={leader.socials.linkedin}
  //                           target="_blank"
  //                           rel="noopener noreferrer"
  //                         >
  //                           <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-300 hover:text-blue-900 transition-colors duration-300" />
  //                         </a>
  //                       )}
  //                       {leader.socials.X && (
  //                         <a
  //                           href={leader.socials.X}
  //                           target="_blank"
  //                           rel="noopener noreferrer"
  //                         >
  //                           <X
  //                             className="w-5 h-5 text-black-600 hover:text-black-800 transition-colors"
  //                             aria-label="Close" 
  //                           />
  //                         </a>
  //                       )}
  //                       {leader.socials.instagram && (
  //                         <a
  //                           href={leader.socials.instagram}
  //                           target="_blank"
  //                           rel="noopener noreferrer"
  //                         >
  //                           <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-300 hover:text-pink-700 transition-colors duration-300" />
  //                         </a>
  //                       )}
  //                       {leader.socials.facebook && (
  //                         <a
  //                           href={leader.socials.facebook}
  //                           target="_blank"
  //                           rel="noopener noreferrer"
  //                         >
  //                           <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors duration-300" />
  //                         </a>
  //                       )}
  //                     </div>
  //                   </div>
  //                 </div>
  //               </motion.div>
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>
  //       </div>
  //     </div>
  //   </section>
  // );


  
// };

// export default LeadershipTeam;



import { useTranslation } from "react-i18next";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

import "swiper/css";
import "swiper/css/pagination";

import rahulPic from "./assets/leaders/rahul.jpg";
import vibhaPic from "./assets/leaders/vibha.jpeg";
import anujPic from "./assets/leaders/anuj.png";

const leaders = [
  {
    name: "meet_card1name",
    title: "meet_card1title",
    image: rahulPic,
    bio: "meet_card1bio",
    socials: {
      linkedin: "#",
      X: "#",
      instagram: "#",
    },
  },
  {
    name: "meet_card2name",
    title: "meet_card2title",
    image: vibhaPic,
    bio: "meet_card2bio",
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
    <section className="relative max-h-screen w-full overflow-x-hidden overflow-y-auto">
      {/* Header Section */}
      <div className="relative w-full h-[65vh] md:h-[70vh] bg-gradient-to-r from-[#74B7AC] to-[#CBF9F9] pt-12 md:pt-16">
        <div className="relative w-full h-28 md:h-32 bg-gray-200">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 w-max px-6 md:px-8 py-5 md:py-7 text-3xl md:text-4xl lg:text-5xl bg-white shadow-xl rounded-lg text-gray-900 font-semibold border border-gray-300">
            Board of Directors
          </div>
        </div>

        {/* First Card - Top Center */}
        <div className="absolute top-40 md:top-[160px] left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 w-[90%] md:w-auto max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="md:w-2/5 h-64 md:h-96">
              <img 
                src={leaders[2].image} 
                alt="Director" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="md:w-3/5 p-6 md:p-12 lg:p-16">
              <div className="max-w-sm mx-auto md:mx-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                  {t(leaders[2].name)}
                </h1>
                <p className="text-lg md:text-xl font-semibold my-3 md:my-5 text-gray-700">
                  {t(leaders[2].title)}
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  {t(leaders[2].bio)}
                </p>
                <div className="flex gap-4 md:gap-5 text-xl md:text-2xl mt-6 md:mt-8">
                  <a href={leaders[2].socials.linkedin} className="hover:text-blue-600 transition-colors">
                    <CiLinkedin />
                  </a>
                  <a href={leaders[2].socials.X} className="hover:text-black transition-colors">
                    <BsTwitterX />
                  </a>
                  <a href={leaders[2].socials.instagram} className="hover:text-pink-600 transition-colors">
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card - Right Aligned */}
      <div className="w-full px-4 md:px-0 mt-10 md:mt-40 ">
        <div className="flex justify-end">
          <div className="w-[90%] md:w-auto max-w-4xl mr-0 md:mr-20">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="md:w-2/5 h-64 md:h-96 order-1 md:order-2">
                <img 
                  src={leaders[1].image} 
                  alt="Director" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-12 lg:p-16 order-2 md:order-1">
                <div className="max-w-sm mx-auto md:mx-auto md:ml-auto md:mr-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                    {t(leaders[1].name)}
                  </h1>
                  <p className="text-lg md:text-xl font-semibold my-3 md:my-5 text-gray-700">
                    {t(leaders[1].title)}
                  </p>
                  <p className="text-base md:text-lg text-gray-600">
                    {t(leaders[1].bio)}
                  </p>
                  <div className="flex gap-4 md:gap-5 text-xl md:text-2xl mt-6 md:mt-8">
                    <a href={leaders[1].socials.linkedin} className="hover:text-blue-600 transition-colors">
                      <CiLinkedin />
                    </a>
                    <a href={leaders[1].socials.X} className="hover:text-black transition-colors">
                      <BsTwitterX />
                    </a>
                    <a href={leaders[1].socials.instagram} className="hover:text-pink-600 transition-colors">
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card - Left Aligned */}
      <div className="w-full px-4 md:px-0 mt-10 md:mt-20 mb-16">
        <div className="flex justify-start">
          <div className="w-[90%] md:w-auto max-w-4xl ml-0 md:ml-20">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="md:w-2/5 h-64 md:h-96">
                <img 
                  src={leaders[0].image} 
                  alt="Director" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-12 lg:p-16">
                <div className="max-w-sm mx-auto md:mx-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                    {t(leaders[0].name)}
                  </h1>
                  <p className="text-lg md:text-xl font-semibold my-3 md:my-5 text-gray-700">
                    {t(leaders[0].title)}
                  </p>
                  <p className="text-base md:text-lg text-gray-600">
                    {t(leaders[0].bio)}
                  </p>
                  <div className="flex gap-4 md:gap-5 text-xl md:text-2xl mt-6 md:mt-8">
                    <a href={leaders[0].socials.linkedin} className="hover:text-blue-600 transition-colors">
                      <CiLinkedin />
                    </a>
                    <a href={leaders[0].socials.X} className="hover:text-black transition-colors">
                      <BsTwitterX />
                    </a>
                    <a href={leaders[0].socials.instagram} className="hover:text-pink-600 transition-colors">
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;