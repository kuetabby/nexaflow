import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Neuropolitical } from "@/utils/font";

import { useIsMounted } from "@/hooks/useIsMounted";

import AgentsLogo from "@/assets/features_1.svg";
import DepinLogo from "@/assets/features_2.svg";
import CodeAssistLogo from "@/assets/features_3.svg";

interface Props {}

export const list_features = [
  {
    title: "AI Agent for Smarter Decisions",
    description: `NexaFlow uses AI agents to analyze and act on data instantly,
            helping you make smarter decisions without delay. Turn raw data into
            intelligent, actionable insights that drive business growth.`,
    img: AgentsLogo,
  },
  {
    title: "AI Code Assistant",
    description: `Tired of repetitive coding tasks? With NexaFlow, your intelligent
            code assistant optimizes your development workflow, streamlining
            code writing, troubleshooting, and execution.`,
    img: CodeAssistLogo,
  },
  {
    title: "DePIN",
    description: `Relying on centralized infrastructure can hold your business back.
            NexaFlow uses DePIN to decentralize operations, eliminating single
            points of failure and ensuring maximum uptime and reliability.`,
    img: DepinLogo,
  },
];

export const SectionFeatures: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const featuresRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsFeaturesVisible(entry.isIntersecting);
      });

      observer.observe(featuresRef.current as HTMLDivElement);
    }
  }, [isLoaded]);

  return (
    <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30">
      <div
        ref={featuresRef}
        className="flex flex-col justify-center items-center mb-8"
      >
        <div className="border-t-4 border-t-white w-16" />
        <div
          className={`pt-2 !font-bold text-3xl ${Neuropolitical.className} ${
            isFeaturesVisible && "animate-slideInBottomBasic"
          }`}
        >
          Features
        </div>
      </div>

      {list_features.map((item, index) => (
        <div
          className={`feature-item-container ${Neuropolitical.className}`}
          key={item.title}
        >
          <div className="block sm:hidden text-3xl text-primary !font-bold mb-4">
            {item.title}
          </div>

          <div className="feature-item-icon-wrapper">
            <Image
              src={item.img}
              alt={`logo ${item.title}`}
              width={100}
              height={100}
              className="feature-item-icon"
            />
          </div>

          <div className="w-full sm:w-1/2 text-left">
            <div className="hidden sm:block text-4xl text-primary !font-bold text-center">
              {item.title}
            </div>

            <div className="w-full lg:w-4/5 mx-auto py-2 md:pt-6 text-base lg:text-lg text-slate-300 text-center">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
