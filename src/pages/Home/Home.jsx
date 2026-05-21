/* --------- Component --------- */
import { useState } from "react";
import Counting from "../../components/Home/Counting/Counting";
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
import Whyuscom from '../../components/Whyuscom'
import { useTranslation } from "react-i18next";
import CountHead from "../../components/Home/Counting/CountHead";
import HomeDirectors from "../../components/Home/HomeDirectors";
import TherapiesSection from "../../components/Home/TherapiesSection";

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
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <>
      {/* Landing Page Video */}
      <div>
        <Hero />
      </div>
      <CountHead />
      {/* Therapies We Are Present In */}
      <TherapiesSection />
      {/* Counting */}
      <div className="bg-[#FBF8F2] w-full flex justify-center items-center">
        <Counting />
      </div>

      <div className="pb-8 bg-indigo-50 dark:bg-gray-900 flex flex-col items-center justify-center text-slate-800 dark:text-white px-4 text-center transition-all duration-300">
        <div className="rounded-xl w-full md:w-[95%] 2xl:max-w-7xl pb-4 h-auto mt-6">
          {modalOpen && (
            <TestimonialModal
              videos={videos}
              startIndex={startIndex}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      </div>

      <div className="mt-0 w-full">
        <HomeDirectors />
      </div>

      <div className="mt-0 w-full">
        <PartnerProgram />
      </div>
    </>
  );
};

export default Home;
