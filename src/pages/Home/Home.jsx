
/* --------- Component --------- */
// Toast Alert
import ToastAlert from "../../components/ToastAlert/ToastAlert";
// Language Selector
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

/* --------- React Icons --------- */
// Dark
import { FaMoon } from "react-icons/fa";
// Light
import { MdWbSunny } from "react-icons/md";
import Counting from "./Counting";
import OurMission from "./OurMission";
import TherapeuticSegments from "./Specalist";
import PartnerProgram from "./PartnerProgram";
import WhatsAppButton from "./WhatsappButton";
import video from "./assets/218955_medium.mp4"
import SegmentSlider from "../../components/slider/SegmentSlider";
import FlavourSection from "./test/FlavourSection";


const Home = () => {


  return (
    <>
      <div>
        <WhatsAppButton />
      </div>
      <div className="w-full h-dvh overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center text-slate-800 dark:text-white px-4 text-center transition-all duration-300">

        <div className="mt-10 ">
          <Counting />
        </div>
        <div className="mt-10 ">
          <OurMission />
        </div>

        <div>
          <h1 className="text-6xl text-center w-full px-5 py-10 text-black dark:text-green-800 font-bold">Our Expertise Across Specialties</h1>
        </div>

           

            <div>
              <FlavourSection/>
            </div>
       


        <div className="mt-10 ">
          <PartnerProgram />
        </div>


      </div>

      <ToastAlert />
    </>
  );
};

export default Home;
