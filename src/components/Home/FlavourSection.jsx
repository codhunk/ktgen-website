import React from "react";
import FlavorTitle from "../slider/flavorTitle";
import SegmentSlider from "../slider/segmentSlider";

const FlavourSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center  relative">
        <div className="lg:w-[35%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0 ">
          <FlavorTitle />
        </div>
        <div className="">
          <SegmentSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavourSection;
