// import { useState } from 'react';

// const Compaign_sec = () => {
//   // Sample campaign media data (replace with your actual data)
//   const [campaignMedia, setCampaignMedia] = useState([
//     {
//       id: 1,
//       type: 'image',
//       url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
//       title: 'Community Event',
//       description: 'Our team participating in local charity event',
//       date: '2023-05-15'
//     },
//     {
//       id: 2,
//       type: 'video',
//       url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       title: 'Customer Testimonial',
//       description: 'Hear what our clients say about our services',
//       date: '2023-06-22'
//     },
//     {
//       id: 3,
//       type: 'image',
//       url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
//       title: 'Team Building',
//       description: 'Our dedicated team working together',
//       date: '2023-04-10'
//     },
//     {
//       id: 4,
//       type: 'video',
//       url: 'https://www.youtube.com/embed/9bZkp7q19f0',
//       title: 'Product Demo',
//       description: 'See our product in action',
//       date: '2023-07-05'
//     },
//     {
//       id: 5,
//       type: 'image',
//       url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
//       title: 'Award Ceremony',
//       description: 'Receiving industry recognition',
//       date: '2023-03-18'
//     },
//     {
//       id: 6,
//       type: 'image',
//       url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
//       title: 'Workshop',
//       description: 'Educating our community',
//       date: '2023-06-30'
//     },
//   ]);

//   // State for lightbox/viewer
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [isViewerOpen, setIsViewerOpen] = useState(false);

//   const openMedia = (media) => {
//     setSelectedMedia(media);
//     setIsViewerOpen(true);
//   };

//   const closeMedia = () => {
//     setIsViewerOpen(false);
//     setSelectedMedia(null);
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Campaign</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             See how we're making a difference through our initiatives and building trust in our community.
//           </p>
//         </div>

//         {/* Media Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {campaignMedia.map((media) => (
//             <div 
//               key={media.id} 
//               className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//               onClick={() => openMedia(media)}
//             >
//               {media.type === 'image' ? (
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <img 
//                     src={media.url} 
//                     alt={media.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                     <div className="text-white">
//                       <h3 className="font-semibold text-lg">{media.title}</h3>
//                       <p className="text-sm">{media.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
//                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <img 
//                     src={`https://img.youtube.com/vi/${media.url.split('embed/')[1]}/hqdefault.jpg`}
//                     alt={media.title}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//               )}
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-800">{media.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{media.description}</p>
//                 <p className="text-xs text-gray-500 mt-2">{new Date(media.date).toLocaleDateString()}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View more button */}
//         <div className="text-center mt-10">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
//             View More Campaigns
//           </button>
//         </div>

//         {/* Media Viewer Modal */}
//         {isViewerOpen && selectedMedia && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeMedia}>
//             <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
//               <button 
//                 className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
//                 onClick={closeMedia}
//               >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
              
//               <div className="bg-white rounded-lg overflow-hidden">
//                 {selectedMedia.type === 'image' ? (
//                   <img 
//                     src={selectedMedia.url} 
//                     alt={selectedMedia.title}
//                     className="w-full max-h-[70vh] object-contain"
//                   />
//                 ) : (
//                   <div className="aspect-w-16 aspect-h-9">
//                     <iframe 
//                       src={selectedMedia.url} 
//                       title={selectedMedia.title}
//                       className="w-full h-[70vh]"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 )}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800">{selectedMedia.title}</h3>
//                   <p className="text-gray-600 mt-2">{selectedMedia.description}</p>
//                   <p className="text-sm text-gray-500 mt-4">
//                     {new Date(selectedMedia.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric'
//                     })}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Compaign_sec;
