// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const bannerSlides = [
//   {
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
//     title: "Media & Gallery",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
//     title: "Media & Gallery",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
//     title: "Media & Gallery",
//   },
// ];

// const galleryImages = [
//   "https://images.unsplash.com/photo-1503264116251-35a269479413",
//   "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
//   "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
//   "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
//   "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
//   "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
// ];

// const BannerSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () =>
//     setCurrent(current === 0 ? bannerSlides.length - 1 : current - 1);
//   const nextSlide = () =>
//     setCurrent(current === bannerSlides.length - 1 ? 0 : current + 1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full bg-white text-gray-900">
//       {/* Banner Slider */}
//       <div className="relative w-full h-[400px] overflow-hidden">
//         {bannerSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               index === current ? "opacity-100 z-8" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//               <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
//                 {slide.title}
//               </h1>
//             </div>
//           </div>
//         ))}
//         {/* <button
//           onClick={prevSlide}
//           className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 text-white hover:bg-opacity-80 transition"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 text-white hover:bg-opacity-80 transition"
//         >
//           <ChevronRight size={40} />
//         </button> */}
//       </div>

//       {/* Leaders Speak & News Section */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Leaders Speak */}
//           <div className="mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
//               What Our Leaders Say
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Dr. Aarti Mehra",
//                   position: "CEO, Manmed Health",
//                   message:
//                     "At Manmed, we don’t just deliver healthcare—we deliver hope and healing.",
//                   image: "https://randomuser.me/api/portraits/women/44.jpg",
//                 },
//                 {
//                   name: "Dr. Rakesh Nair",
//                   position: "Chief Medical Officer",
//                   message:
//                     "Innovation and empathy are the heartbeat of our success.",
//                   image: "https://randomuser.me/api/portraits/men/45.jpg",
//                 },
//                 {
//                   name: "Ms. Neha Kapoor",
//                   position: "Director of Operations",
//                   message:
//                     "We create environments where patients and professionals thrive together.",
//                   image: "https://randomuser.me/api/portraits/women/68.jpg",
//                 },
//               ].map((leader, index) => (
//                 <div
//                   key={index}
//                   className="bg-white shadow-lg rounded-2xl p-6 text-center"
//                 >
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {leader.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-4">
//                     {leader.position}
//                   </p>
//                   <p className="text-gray-700 italic">“{leader.message}”</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Company News */}
//           <div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
//               Company News & Highlights
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Annual Health Camp 2025",
//                   summary:
//                     "We successfully hosted a 3-day camp providing free consultations to over 1,000 people.",
//                   date: "June 20, 2025",
//                   image:
//                     "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//                 },
//                 {
//                   title: "New Facility Launch",
//                   summary:
//                     "Our new state-of-the-art diagnostics center is now open in Pune.",
//                   date: "May 14, 2025",
//                   image:
//                     "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//                 },
//                 {
//                   title: "Employee Wellness Program",
//                   summary:
//                     "Manmed launched an in-house wellness initiative promoting work-life balance.",
//                   date: "April 10, 2025",
//                   image:
//                     "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//                 },
//               ].map((news, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl overflow-hidden shadow-md"
//                 >
//                   <img
//                     src={`${news.image}?w=800&q=80`}
//                     alt={news.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {news.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 mb-3">{news.date}</p>
//                     <p className="text-gray-700">{news.summary}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       {/* <section className="w-full py-20 bg-white">
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-14">
//             Our Latest Moments
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="relative overflow-hidden rounded-2xl shadow-md group"
//               >
//                 <img
//                   src={`${src}?auto=format&fit=crop&w=1000&q=80`}
//                   alt={`Gallery image ${index + 1}`}
//                   loading="lazy"
//                   className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition">
//                     View Image
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

// <section className="w-full py-20 bg-white">
//   <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
//     <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-14">
//       Our Latest Moments
//     </h2>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {galleryImages.map((src, index) => (
//         <div
//           key={index}
//           className="relative overflow-hidden rounded-2xl shadow-md group"
//         >
//           <img
//             src={`${src}?auto=format&fit=crop&w=1000&q=80`}
//             alt={`Gallery image ${index + 1}`}
//             loading="lazy"
//             className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
//           />

//           {/* Animated Text Overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
//             <span
//               className="text-white text-lg font-medium opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
//             >
//               View Image
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             <div>
//               <h2 className="text-2xl font-bold text-white mb-4">
//                 Manmed Health Pvt LTD
//               </h2>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 Revolutionizing healthcare with innovation, compassion, and
//                 integrity. Trusted care, delivered with precision.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="/" className="hover:text-white transition">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/about" className="hover:text-white transition">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/services" className="hover:text-white transition">
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/careers" className="hover:text-white transition">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contact" className="hover:text-white transition">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">
//                 Contact Us
//               </h3>
//               <ul className="space-y-3 text-sm">
//                 <li className="flex items-start gap-2">
//                   <span className="mt-0.5 text-white">📍</span>
//                   <span>123 Health Street, Wellness City, India</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-0.5 text-white">📞</span>
//                   <span>+91 98765 43210</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-0.5 text-white">✉️</span>
//                   <span>support@manmedhealth.com</span>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">
//                 Follow Us
//               </h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-white transition text-2xl">
//                   🌐
//                 </a>
//                 <a href="#" className="hover:text-white transition text-2xl">
//                   📘
//                 </a>
//                 <a href="#" className="hover:text-white transition text-2xl">
//                   📸
//                 </a>
//                 <a href="#" className="hover:text-white transition text-2xl">
//                   💼
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-10 pt-6 text-center">
//             <p className="text-sm text-gray-500">
//               © {new Date().getFullYear()} Manmed Health Pvt LTD. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BannerSlider;




import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import rahulPic from "./assets/leaders/rahul.jpg";
import vibhaPic from "./assets/leaders/vibha.jpeg";
import anujPic from "./assets/leaders/anuj.png";
const bannerSlides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Media & Gallery",
  },
  {
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    title: "Innovation & Teamwork",
  },
  {
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    title: "Culture & Values",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1503264116251-35a269479413",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
];

const leaders = [
  {
    name: "Anuj Patel",
    position: "Founder & CEO",
    image: anujPic,
    message: "Empathy and technology are reshaping healthcare — making it more human-centered, connected, and impactful than ever before.",
  },
  {
    name: "Rahul Patel",
    position: "Co-founder COO",
    image: rahulPic,
    message: "Our strength lies in continuous innovation and strong collaboration — enabling us to deliver solutions that truly make a difference."
  },
  {
    name: "Vibha Rani",
    position: "Co-founder CTO",
    image: vibhaPic,
    message: "We engineer with intent — crafting innovative solutions that create lasting impact across industries and communities."
  },
];

const newsUpdates = [
  {
    title: "New Branch Opened in Pune",
    date: "July 2025",
    summary: "We are proud to announce our new state-of-the-art facility in Pune.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Manmed Tech Summit 2025",
    date: "June 2025",
    summary: "Our annual summit showcased AI innovations in healthtech.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "CSR Blood Donation Drive",
    date: "May 2025",
    summary: "Over 300 people participated in our nationwide blood donation campaign.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? bannerSlides.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === bannerSlides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Banner Slider */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform ${index === current
              ? "opacity-100 scale-100 z-8"
              : "opacity-0 scale-95 z-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4 animate-fade-in-up">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Leader Speak Section */}
      <section className="bg-gray-50 py-20 animate-fade-in">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
            What Our Leaders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-6 text-center transition duration-300 transform hover:scale-105"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{leader.position}</p>
                <p className="text-gray-700 italic">“{leader.message}”</p>
              </div>
            ))}
          </div>

          {/* Company News */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 my-16">
            Company News & Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsUpdates.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={`${news.image}?w=800&q=80`}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                  <p className="text-gray-700">{news.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-14">
            Our Latest Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md group"
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=1000&q=80`}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSlider;
