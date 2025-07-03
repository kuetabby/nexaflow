"use client";
import SlideUp from "@/utils/animations/slideUp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Button from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Neuropolitical } from "@/utils/font";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section id="home" className={`pt-[90px] ${Neuropolitical.className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12">
            {/* START HERO DESIGN AREA */}
            <SlideUp className="relative mb-[60px] lg:px-[250px] text-center">
              <h2 className=" text-[rgba(255,255,255,0.69)] text-xl mb-[5px]">
                Smarter Workflows, Powered by AI
              </h2>
              <h1 className="font-bold lg:leading-[95px] lg:text-[90px] md:text-7xl md:leading-[65px] text-[56px] leading-[65px] mb-[25px] text-foreground">
                Unlock Your Data's{" "}
                <span className="text-primary">True Power</span>
              </h1>
              <div className="absolute left-[15%] top-[25%] rotated_circle">
                <img src="/images/shape/about-dot.png" alt="Shape" />
              </div>
              <div className="absolute right-[15%] top-[60%] rotated_circle">
                <img src="/images/shape/dot-shape-circle.png" alt="Shape" />
              </div>
              <div className="mt-10 ">
                <Button className="mr-4" asLinked={true} path={"#"}>
                  Start <FontAwesomeIcon icon={faPlay} fontSize={14} />
                </Button>

                <Button asLinked={true} path={"#"}>
                  Documentation <FontAwesomeIcon icon={faBook} fontSize={14} />
                </Button>
              </div>
            </SlideUp>
            {/* / END HERO DESIGN AREA */}
            {/* START COUNTER DESIGN AREA */}
            {/* <SlideUp delay={2}>
              <div
                ref={ref}
                className="sm:w-4/5 mx-auto my-0 sm:px-10 px-5 py-[35px] rounded-[100px] flex justify-around bg-primary"
              >
                <div className="text-center flex flex-col justify-center items-center">
                  <span className="leading-none font-bold text-center lg:text-[50px] text-3xl plus">
                    {inView && <CountUp end={8} />}+
                  </span>
                  <span className="counter-title lg:text-base text-sm font-normal mt-1.5">
                    Years Of Experience
                  </span>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <span className="leading-none font-bold text-center lg:text-[50px] text-3xl k-plus">
                    {inView && <CountUp end={1} />}k+
                  </span>
                  <span className="counter-title lg:text-base text-sm font-normal mt-1.5">
                    Complete Projects
                  </span>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <span className="leading-none font-bold text-center lg:text-[50px] text-3xl percent">
                    {inView && <CountUp end={90} />}%+
                  </span>
                  <span className="counter-title lg:text-base text-sm font-normal mt-1.5">
                    Client Satisfactions
                  </span>
                </div>
              </div>
            </SlideUp> */}
            {/* / END COUNTER DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
