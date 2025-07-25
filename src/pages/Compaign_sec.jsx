import { useState } from 'react';
import { useDarkMode } from '../hooks/UseDarkMode/useDarkMode';
import { useTranslation } from "react-i18next";
import { TbTriangleFilled } from "react-icons/tb";


const Compaign_sec = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
    const { t } = useTranslation();


  // Sample campaign media data (replace with your actual data)
  const [campaignMedia, setCampaignMedia] = useState([
    {
      id: 1,
      type: 'image',
      url: '/images/community_event.jpg',
      title: t("community_h"),
      description: t("community_about"),
      date: '2023-05-15'
    },
    {
      id: 2,
      type: 'video',
      url: '/videos/6months.mp4',
      thumbnail: '/images/customer_testimonial.jpg',
      title: t("testimonial_h"),
      description: t("testimonial_about"),
      date: '2023-06-22'
    },
    {
      id: 3,
      type: 'image',
      url: '/images/team_building.jpg',
      title: t("team_h"),
      description: t("team_about"),
      date: '2023-04-10'
    },
    {
      id: 4,
      type: 'video',
      url: '/videos/9months.mp4',
      thumbnail: '/images/product_demo.jpg',
      title: t("demo_h"),
      description: t("demo_about"),
      date: '2023-07-05'
    },
    {
      id: 5,
      type: 'image',
      url: '/images/award_cerimoney.jpg',
      title: t("ceremoney_h"),
      description: t("ceremoney_about"),
      date: '2023-03-18'
    },
    {
      id: 6,
      type: 'image',
      url: '/images/workshop.jpg',
      title: t("workshop_h"),
      description: t("workshop_about"),
      date: '2023-06-30'
    },
  ]);

  // State for lightbox/viewer
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openMedia = (media) => {
    setSelectedMedia(media);
    setIsViewerOpen(true);
  };

  const closeMedia = () => {
    setIsViewerOpen(false);
    setSelectedMedia(null);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#57564F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#F8F3CE] mb-4">{t("campaign_h")}</h2>
          <p className="text-lg text-gray-600 dark:text-[#DDDAD0] max-w-2xl font-semibold mx-auto">{t("campaign_about")}</p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignMedia.map((media) => (
            <div 
              key={media.id} 
              className="bg-white dark:bg-[#7A7A73] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openMedia(media)}
            >
              {media.type === 'image' ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={media.url} 
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white dark:text-[#F8F3CE]">
                      <h3 className="font-semibold text-lg">{media.title}</h3>
                      <p className="text-sm">{media.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <TbTriangleFilled className='rotate-90 text-lg text-white' />
                    </div>
                  </div>
                  <img 
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold dark:text-[#F8F3CE] text-gray-800">{media.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#DDDAD0] mt-1">{media.description}</p>
                <p className="text-xs text-gray-500 dark:text-[#DDDAD0] mt-2">{new Date(media.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-blue-600 dark:bg-blue-950 dark:text-[#F8F3CE] text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
            {t("view_more")}
          </button>
        </div>

        {/* Media Viewer Modal */}
        {isViewerOpen && selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeMedia}>
            <div className="relative max-w-3xl w-full max-h-[90vh] mt-5" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-9 right-0 text-white hover:text-gray-300 z-10"
                onClick={closeMedia}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white dark:bg-[#7A7A73] rounded-lg overflow-hidden">
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-w-16 aspect-h-9">
                    
                    <video key={selectedMedia.url} controls autoPlay 
                    className="w-full rounded-lg max-h-[500px]">
                      <source src={selectedMedia.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-[#F8F3CE]">{selectedMedia.title}</h3>
                  <p className="text-gray-600 dark:text-[#DDDAD0] mt-2">{selectedMedia.description}</p>
                  <p className="text-sm text-gray-500 dark:text-[#DDDAD0] mt-2">
                    {new Date(selectedMedia.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Compaign_sec;
