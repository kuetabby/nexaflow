import SectionTitle from "@/components/ui/sectionTitle";
import SlideUp from "@/utils/animations/slideUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="mt-[100px]">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-25 items-center">
          {/* START ABOUT IMAGE DESIGN AREA */}
          <div className="lg:w-[40%] w-full flex-shrink flex-grow-0 basis-auto">
            <SlideUp delay={3}>
              <div className="about-image-part relative">
                <img className="rounded-xl" src="/images/about/about-nexaflow.jpg" alt="About NexaFlow" style={{ width: '483px', height: '556px' }} />
                <div className="flex items-center rounded-[32px] bg-primary py-2.5 pr-[25px] pl-[15px] absolute left-[25%] bottom-[25%]">
                  <h6 className="font-bold text-black" >Available for Work</h6>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#19461a] ml-3 pulse" />
                </div>
                <div className="absolute -left-[10%] top-[25%] rotated_circle">
                  <img src="/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </SlideUp>
          </div>
          {/* / END ABOUT IMAGE DESIGN AREA */}
          {/* START ABOUT TEXT DESIGN AREA */}
          <div className="lg:w-[58%] w-full flex-shrink flex-grow-0 basis-auto">
            <div className="about-content-part rel z-2 rmb-55">
              <SectionTitle className="mb-35">
                <SectionTitle.Name>About NexaFlow</SectionTitle.Name>
                <SectionTitle.Title>
                  Transforming how businesses leverage{" "}
                  <span className="text-primary">AI agents</span> and{" "}
                  <span className="text-primary">
                    decentralized infrastructure
                  </span>
                  .
                </SectionTitle.Title>
                <SectionTitle.Description>
                  NexaFlow is transforming how businesses leverage AI agents and
                  decentralized infrastructure to optimize decision-making and
                  streamline workflows. In a world of constant data overload,
                  NexaFlow uses contextual AI to turn complex, unstructured data
                  into real-time, actionable insights.
                  <br />
                  <br />
                  Whether you’re simplifying development with AI code assistants
                  or ensuring your infrastructure scales securely with DePIN,
                  NexaFlow empowers businesses to work smarter, faster, and more
                  securely.
                  <br />
                  <br />
                  In today’s fast-paced world, businesses can't afford to waste
                  time. NexaFlow helps you stay ahead by automating the complex
                  tasks and providing the reliability you need to scale.
                </SectionTitle.Description>
              </SectionTitle>
              <SlideUp delay={2}  >
                <ul className="grid sm:grid-cols-2 grid-cols-1 flex-wrap gap-y-5 mt-9">
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    AI Code Assistants
                  </li>
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    Decentralized Infrastructure
                  </li>
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    Automation Solutions
                  </li>
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    Streamlined Workflows
                  </li>
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    Real-Time Insights
                  </li>
                  <li className="text-white text-xl flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary"
                    />{" "}
                    Scalable Security
                  </li>
                </ul>
              </SlideUp>
            </div>
          </div>
          {/* / END ABOUT TEXT DESIGN AREA */}
        </div>
      </div>
    </section>
  );
};

export default About;
