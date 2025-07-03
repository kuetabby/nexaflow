import SectionTitle from "@/components/ui/sectionTitle";
import SlideUp from "@/utils/animations/slideUp";
import { Neuropolitical } from "@/utils/font";
import Image from "next/image";

// Key Features data based on NexaFlow narrative
const featuresData = [
  {
    id: 1,
    title: "AI Agent for Smarter Decisions",
    icon: "aiagent.svg",
    description:
      "NexaFlow uses AI agents to analyze and act on data instantly, helping you make smarter decisions without delay. Turn raw data into intelligent, actionable insights that drive business growth.",
  },
  {
    id: 2,
    title: "AI Code Assistant",
    icon: "aicode.svg",
    description:
      "Tired of repetitive coding tasks? With NexaFlow, your intelligent code assistant optimizes your development workflow, streamlining code writing, troubleshooting, and execution.",
  },
  {
    id: 3,
    title: "DePIN (Decentralized Physical Infrastructure Network)",
    icon: "depin.svg",
    description:
      "Relying on centralized infrastructure can hold your business back. NexaFlow uses DePIN to decentralize operations, eliminating single points of failure and ensuring maximum uptime and reliability.",
  },
];

const KeyFeatures = () => {
  return (
    <section id="features" className={`pt-[160px] ${Neuropolitical.className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <SectionTitle className="text-center">
              <SectionTitle.Name>Key Features</SectionTitle.Name>
              <SectionTitle.Title>
                Our <span className="text-primary">Special Features</span> For
                AI-Powered Business Solutions
              </SectionTitle.Title>
            </SectionTitle>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-15">
          {featuresData.map(({ description, icon, id, title }) => (
            <FeatureCard
              key={id}
              description={description}
              icon={icon}
              title={title}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

type FeatureCardPropsType = {
  title: string;
  icon: string;
  description: string;
  id: number;
};

const FeatureCard = ({
  title,
  icon,
  description,
  id,
}: FeatureCardPropsType) => {
  return (
    <SlideUp delay={id}>
      <div className="feature-item py-[45px] sm:px-12.5 px-6 bg-primary rounded-[15px] h-full group hover:shadow-xl transition-all duration-300">
        <div className="content">
          {/* Enhanced icon container with better sizing and responsiveness */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center bg-black text-white p-4 sm:p-5 lg:p-4 xl:p-5 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={`/features/${icon}`}
              alt={title}
              width={60}
              height={60}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain"
              priority={id <= 3}
            />
          </div>
          <h4 className="text-black mt-6 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl leading-tight">
            {title}
          </h4>
          <p className="text-black font-normal mt-4 leading-relaxed text-sm sm:text-base lg:text-sm xl:text-base">
            {description}
          </p>
        </div>
      </div>
    </SlideUp>
  );
};
