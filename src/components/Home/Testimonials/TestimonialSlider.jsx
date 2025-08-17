import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = ({ videos, onVideoClick }) => {
  return (
    <>
      <Swiper
        spaceBetween={12}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1.5, // show 1 full + part of 2nd
          },
          500: {
            slidesPerView: 2.3, // show 2 full + part of 3rd
          },
          700: {
            slidesPerView: 3.3, // show 3 full + part of 4th
          },
          900: {
            slidesPerView: 4.3, // show 4 full + part of 5th
          },
          1024: {
            slidesPerView: 5.3, // show 5 full + part of 6th
          },
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 origin-center">
              <video
                src={video.src}
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-96 object-cover cursor-pointer"
                onClick={() => onVideoClick(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
