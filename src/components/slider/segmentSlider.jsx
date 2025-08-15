import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { SegmentList } from "../../constants";

const SegmentSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const extraScroll = window.innerWidth >= 1536 ? 1500 : 500;

  useGSAP(() => {
    if (!isTablet) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + extraScroll}px`,
        ease: "power1.inOut",
      });
    }

    // Keep title animation for all sizes
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div
      ref={sliderRef}
      className={`slider-wrapper ${
        isMobile ? "min-h-fit flex flex-col items-center gap-6 p-4" : ""
      }`}
    >
      <div
        className={`flavors ${
          isMobile
            ? "flex flex-col items-center gap-6 w-full"
            : "flex flex-row flex-nowrap"
        }`}
      >
        {SegmentList.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 ${
              isMobile ? "w-full " : "lg:w-[50vw] w-96"
            } lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-40 flex-none ${
              flavor.rotation
            }`}
          >
            <img
              src={`/images/${flavor.name}.jpg`}
              alt=""
              className={`${
                isMobile
                  ? "w-full h-auto object-contain relative"
                  : "drinks md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:h-full h-40"
              }`}
            />
            <h1
              className={`!text-green-800 text-center  md:mt-2 ${
                isMobile ? "!absolute !-bottom-5" : ""
              }`}
            >
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentSlider;
