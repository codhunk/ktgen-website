/* --------- Component --------- */
import { useState } from "react";
import Counting from "../../components/Home/Counting";
import OurMission from "../../components/Home/OurMission";
import PartnerProgram from "../../components/Home/PartnerProgram";
import TestimonialSlider from "../../components/Home/Testimonials/TestimonialSlider";
import Hero from "../../components/VideoSlider/Hero";
import testiVid1 from "./videos/testominialsVideos/video1.mp4";
import testiVid2 from "./videos/testominialsVideos/video2.mp4";
import testiVid3 from "./videos/testominialsVideos/video3.mp4";
import testiVid4 from "./videos/testominialsVideos/video4.mp4";
import testiVid5 from "./videos/testominialsVideos/video5.mp4";
import testiVid6 from "./videos/testominialsVideos/video6.mp4";
import thumb from "./assets/thumbnail.jpg";
import TestimonialModal from "../../components/Home/Testimonials/TestimonialModal";
import AnimatedSlider from "../../components/Home/AnimatedSlider";

const videos = [
  {
    id: "1",
    src: testiVid1,
    thumbnail: thumb,
    title: "Testimonial 1",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "2",
    src: testiVid2,
    thumbnail: thumb,
    title: "Testimonial 2",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "3",
    src: testiVid3,
    thumbnail: thumb,
    title: "Testimonial 3",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "4",
    src: testiVid4,
    thumbnail: thumb,
    title: "Testimonial 4",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "5",
    src: testiVid5,
    thumbnail: thumb,
    title: "Testimonial 5",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "6",
    src: testiVid6,
    thumbnail: thumb,
    title: "Testimonial 6",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "7",
    src: testiVid1,
    thumbnail: thumb,
    title: "Testimonial 7",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
  {
    id: "8",
    src: testiVid2,
    thumbnail: thumb,
    title: "Testimonial 8",
    description:
      "This testimonial highlights the genuine experience and satisfaction of our valued customer. In this video, they share how our product exceeded their expectations, solved their challenges, and made a positive impact in their daily routine. Their journey reflects the quality, reliability, and care we put into every detail, and we’re proud to be part of their success story.",
  },
];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <>
      {/* Landing Page Video */}
      <div>
        <Hero />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center text-slate-800 dark:text-white px-4 text-center transition-all duration-300">
        <div className="mt-10 ">
          <Counting />
        </div>

        <div className="mt-10 ">
          <OurMission />
        </div>

        <div>
          <h1 className=" text-4xl md:text-6xl text-center w-full px-5 py-10 text-black dark:text-green-800 font-bold">
            Our Expertise Across Specialties
          </h1>
        </div>

        <div>
          <AnimatedSlider />
        </div>

        {/* Testominial Slider */}
        <div className="w-full md:w-[95%] 2xl:max-w-7xl py-4 px-2">
          <h1 className="text-3xl text-center w-full px-5 py-10 text-black dark:text-green-800 font-bold">
            Testimonials
          </h1>
          <TestimonialSlider
            videos={videos}
            onVideoClick={(index) => {
              setStartIndex(index);
              setModalOpen(true);
            }}
          />
          {modalOpen && (
            <TestimonialModal
              videos={videos}
              startIndex={startIndex}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>

        <div className="mt-10 ">
          <PartnerProgram />
        </div>
      </div>
    </>
  );
};

export default Home;
