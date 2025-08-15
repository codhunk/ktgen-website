/* --------- Component --------- */
import Counting from "../../components/Home/Counting";
import OurMission from "../../components/Home/OurMission";
import PartnerProgram from "../../components/Home/PartnerProgram";
import Hero from "../../components/VideoSlider/Hero";
import GutMicrobiomeUI from "../../components/Home/VideoCounting";
import AnimatedSlider from "../../components/Home/AnimatedSlider";

const Home = () => {
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

        <div className="mt-10 ">
          <PartnerProgram />
        </div>
      </div>
    </>
  );
};

export default Home;
