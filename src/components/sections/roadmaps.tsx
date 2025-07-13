import SectionTitle from "@/components/ui/sectionTitle";
import SlideUp from "@/utils/animations/slideUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Roadmap data grouped by quarters
const roadmapData = [
  {
    id: 1,
    phase: "Phase 1: Getting Started",
    period: "Q1 2025",
    points: [
      "Build AI agents to help businesses make smarter decisions with real-time data",
      "Set up decentralized systems to ensure your data is always safe and available",
      "Launch our AI code assistant to make coding easier and faster for developers",
    ],
  },
  {
    id: 2,
    phase: "Phase 2: Expanding Features",
    period: "Q2 2025",
    points: [
      "Improve AI agents to make them smarter and more helpful for different industries like finance and healthcare",
      "Make sure NexaFlow works faster and more reliably by improving our decentralized infrastructure",
      "Gather feedback from businesses to improve the platform and make it even better",
    ],
  },
  {
    id: 3,
    phase: "Phase 3: Full Launch",
    period: "Q3 2025",
    points: [
      "Provide businesses with full AI capabilities to automate tasks and make data-driven decisions",
      "Expand our decentralized network so it can support businesses anywhere in the world",
      "Let teams use the AI code assistant to speed up development and improve collaboration",
    ],
  },
  {
    id: 4,
    phase: "Phase 4: Global Reach & Optimization",
    period: "Q4 2025",
    points: [
      "Adapt NexaFlow to support different languages and local regulations, making it easier for businesses worldwide",
      "Add more features to keep data secure and compliant with global privacy laws",
      "Keep improving the AI so businesses get smarter and more efficient over time",
    ],
  },
  {
    id: 5,
    phase: "Phase 5: Long-Term Growth",
    period: "Beyond 2025",
    points: [
      "Work with partners and open up NexaFlow to the community to build an even stronger ecosystem",
      "Make sure our AI is used responsibly and is fair for all businesses",
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmaps" className="pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <SectionTitle className="text-center">
                  {/* <SectionTitle.Name>Our Roadmap</SectionTitle.Name> */}
                  <SectionTitle.Title>
                    Building the <span className="text-primary">Future</span> of
                    AI-Powered Business
                  </SectionTitle.Title>
                </SectionTitle>
              </div>
            </div>
            <div style={{ marginTop: '50px'}} >
               <img 
               className="rounded-xl" 
                  src="/images/roadmap/roadmap-nexaflow.jpg" 
                  alt="Roadmap NexaFlow" 
                />
            </div>
            {/* <div className="bg-primary rounded-2xl pt-15 pb-12.5 lg:px-5 sm:px-5 px-5 px mt-15">
             
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-52 gap-x-20 gap-y-[55px] justify-between relative after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-black md:after:block after:hidden">
                {roadmapData.map(({ phase, id, period, points }) => (
                  <RoadmapCard
                    key={id}
                    phase={phase}
                    period={period}
                    points={points}
                    id={id}
                  />
                ))}
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

type RoadmapCardPropsType = {
  phase: string;
  period: string;
  points: string[];
  id: number;
};

const RoadmapCard = ({ phase, period, points, id }: RoadmapCardPropsType) => {
  return (
    <SlideUp delay={id}>
      <div className="flex group">
        <div className="flex-none transition-all duration-500 w-10 h-10 leading-10 text-center -rotate-45 text-white mr-5 rounded-full bg-[#131313] group-hover:bg-white group-hover:text-black">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="content">
          <span className="block leading-none font-medium text-lg mb-1">
            {period}
          </span>
          <h4 className="text-black mt-2 mb-4 font-semibold text-xl">
            {phase}
          </h4>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-none w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                <span className="font-normal text-sm leading-relaxed opacity-90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideUp>
  );
};
