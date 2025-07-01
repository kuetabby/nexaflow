"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ReactTyped } from "react-typed";
// import Tilt from "react-parallax-tilt";
import { Button } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { RobotIcon } from "@/utils/Icon/robot";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { poppins, Neuropolitical } from "@/utils/font";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

import BannerApp from "@/assets/banner-nav.png";

import RedTokenomic from "@/assets/tokenomic-red.png";
import BlueTokenomic from "@/assets/tokenomic-blue.png";
import GreenTokenomic from "@/assets/tokenomic-green.png";

import TokenAnalyzerLogo from "@/assets/aicode.svg";
import NftAnalyzerLogo from "@/assets/depin.svg";
import AddressAnalyzerLogo from "@/assets/address-analyzer.png";
import PhisingAnalyzerLogo from "@/assets/site-analyzer.svg";

import {
  GitbookIcon,
  // MediumIcon,
  TeleIcon,
  TwitterIcon,
} from "@/utils/Icon/socials";

// import HeroApp from "@/assets/hero-app.png";
// import LogoApp from "@/assets/logo-app.png";
// import TwitterLogo from "@/assets/logo-x.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import GitBookLogo from "@/assets/logo-gitbook.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import MapApp from "@/assets/map-app.png";
// import Dextools from "@/assets/dextools.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Etherscan from "@/assets/etherscan.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";

interface Props {}

const introVidUrl =
  "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/y1tkrs3vpz3mvpocct6p";

const Home: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

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
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsFeaturesVisible(entry.isIntersecting);
      });

      observer.observe(featuresRef.current as HTMLDivElement);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsAboutVisible(entry.isIntersecting);
      });

      observer.observe(aboutRef.current as HTMLDivElement);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsTokensVisible(entry.isIntersecting);
      });

      observer.observe(tokensRef.current as HTMLDivElement);
    }
  }, [isLoaded]);

  if (isMounted && isLoaded) {
    return (
      <div className="homepage-container">
        {/* <div id="welcome" className="h-4 xs:h-8 sm:h-16 relative z-30" /> */}
        <div
          id="welcome"
          className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
        />
        <div className="welcome-container">
          <div className="welcome-wrapper">
            <div className={`w-full h-full px-2 2xl:px-4 ${poppins.className}`}>
              <div
                ref={welcomeRef}
                className={`w-full md:w-3/4 h-full sm:px-8 lg:px-14 text-4xl xs:text-5xl md:text-6xl xl:text-7xl text-center flex flex-wrap justify-center items-center m-auto`}
              >
                <div
                  className={`${
                    isWelcomeVisible && "animate-slideInBottomBasic"
                  } ${Neuropolitical.className} !font-bold`}
                >
                  Smarter Workflows, Powered by AI
                </div>

                <div className="h-4" />

                <div className="w-full flex flex-wrap justify-center gap-4">
                  <Link
                    href={socialsLink.bot}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-br from-green-300 via-emerald-400 to-cyan-400 text-white hover:text-black font-semibold shadow-lg shadow-green-300/50 hover:shadow-xl hover:shadow-green-300/70 hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-0"
                    >
                      Start Analyze
                    </Button>
                  </Link>

                  <Link
                    href={socialsLink.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-transparent border-2 border-green-400 text-green-600 font-semibold shadow-lg shadow-green-400/30 hover:bg-gradient-to-br hover:from-green-300 hover:via-emerald-400 hover:to-cyan-400 hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-emerald-400/60 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    >
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-28" />

        <div id="about" className="h-20 sm:h-28 relative z-30" />
        <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 mx-auto">
          <div className="about-wrapper z-30">
            <div
              className={`w-full !font-bold text-3xl ${poppins.className} ${
                isAboutVisible && "animate-slideInBottomBasic"
              }`}
            >
              <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                $NEXAFLOW
              </span>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-[30%] h-full flex justify-center items-center my-4 mx-auto">
              <video
                autoPlay={true}
                id="welcome"
                loop
                preload="preload"
                className="w-full h-auto relative rounded-xl bg-transparent"
                muted
                // style={{ filter: "grayscale(0.3)" }}
              >
                <source type="video/mp4" src={introVidUrl}></source>
              </video>
            </div>

            <div
              ref={aboutRef}
              className="w-full sm:w-4/5 lg:w-3/4 h-full flex flex-wrap lg:justify-center lg:items-center mb-4 md:mb-0 mx-auto"
            >
              <div
                className={`w-full lg:w-4/5 text-2xl lg:text-3xl xl:xl:text-4xl mb-4 pt-2 xl:mt-4 mx-auto text-center !font-bold ${Neuropolitical.className}`}
              >
                INTELLIGENT SYSTEMS architecture created to streamline
                operations and drive growth across sectors
              </div>

              <div className="w-full sm:mt-2 text-base text-[#ccc] text-center mx-auto">
                NexaFlow is transforming how businesses leverage AI agents and
                decentralized infrastructure to optimize decision-making and
                streamline workflows. In a world of constant data overload,
                NexaFlow uses contextual AI to turn complex, unstructured data
                into real-time, actionable insights.
              </div>

              <Link
                href={socialsLink.whitepaper}
                rel="noopener noreferrer"
                target="_blank"
                className="mx-auto"
              >
                <Button
                  colorScheme="whiteAlpha"
                  className="w-auto my-4 hover:text-primary"
                >
                  Read Our Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-12 md:h-20" />
        <div id="ecosystem" className="h-24 sm:h-28 relative z-30" />
        <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30">
          <div
            ref={featuresRef}
            className="flex flex-col justify-center items-center"
          >
            <div className="border-t-4 border-t-white w-16" />
            <div
              className={`pt-2 !font-bold text-3xl ${poppins.className} ${
                isFeaturesVisible && "animate-slideInBottomBasic"
              }`}
            >
              Features
            </div>
          </div>

          <div className={`feature-item-container ${poppins.className}`}>
            <div className="block sm:hidden text-4xl text-primary !font-bold mb-4">
              AI Agent for Smarter Decisions
            </div>

            <div className="feature-item-icon-wrapper">
              <Image
                src={PhisingAnalyzerLogo}
                alt="phising-analyzer"
                className="feature-item-icon"
              />
            </div>

            <div className="w-full sm:w-1/2 text-left">
              <div className="hidden sm:block text-4xl text-primary !font-bold">
                AI Agent for Smarter Decisions
              </div>

              <div className="w-full lg:w-4/5 py-4 md:pt-6 text-base lg:text-lg text-slate-300">
                NexaFlow uses AI agents to analyze and act on data instantly,
                helping you make smarter decisions without delay. Turn raw data
                into intelligent, actionable insights that drive business
                growth.
              </div>
            </div>
          </div>

          <div className={`feature-item-container ${poppins.className}`}>
            <div className="block sm:hidden text-4xl text-primary !font-bold mb-4">
              AI Code Assistant
            </div>

            <div className="feature-item-icon-wrapper">
              <Image
                src={TokenAnalyzerLogo}
                alt="token-analyzer"
                className="feature-item-icon"
              />
            </div>

            <div className="w-full sm:w-1/2 text-left">
              <div className="hidden sm:block text-4xl text-primary !font-bold">
                AI Code Assistant
              </div>

              <div className="w-full lg:w-4/5 py-4 md:pt-6 text-base lg:text-lg text-slate-300">
                Tired of repetitive coding tasks? With NexaFlow, your
                intelligent code assistant optimizes your development workflow,
                streamlining code writing, troubleshooting, and execution.
              </div>
            </div>
          </div>

          <div className={`feature-item-container ${poppins.className}`}>
            <div className="block sm:hidden text-4xl text-primary !font-bold mb-4">
              DePIN (Decentralized Physical Infrastructure Network)
            </div>

            <div className="feature-item-icon-wrapper">
              <Image
                src={NftAnalyzerLogo}
                alt="nft-analyzer"
                className="feature-item-icon"
              />
            </div>

            <div className="w-full sm:w-1/2 text-left">
              <div className="hidden sm:block text-4xl text-primary !font-bold">
                DePIN (Decentralized Physical Infrastructure Network)
              </div>

              <div className="w-full lg:w-4/5 py-4 md:pt-6 text-base lg:text-lg text-slate-300">
                Relying on centralized infrastructure can hold your business
                back. NexaFlow uses DePIN to decentralize operations,
                eliminating single points of failure and ensuring maximum uptime
                and reliability.
              </div>
            </div>
          </div>

          {/* <div className="w-full flex flex-wrap justify-evenly items-center gap-x-2 gap-y-4 sm:gap-y-8 lg:gap-y-12 mx-auto mt-8 relative z-30">
            {ecosystemList.map((item, index) => (
              <div
                className="w-full sm:w-[48%] h-full px-2 py-6 text-center"
                key={index + 1}
              >
                <div className="w-24 h-24 mx-auto mb-2">
                  <Tilt>
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="w-full h-full object-contain"
                    />
                  </Tilt>
                </div>
  
                <div className={`text-xl text-primary py-4 ${Neuropolitical.className}`}>
                  {item.title}
                </div>
  
                <div
                  className={`w-full lg:w-1/2 text-xs md:text-sm text-slate-300 m-auto ${Neuropolitical.className}`}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="h-24 md:h-40" />
        <div id="tokenomic" className="h-24 sm:h-28 relative z-30" />
        <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30">
          <div
            ref={tokensRef}
            className="flex flex-col justify-center items-center"
          >
            <div className="border-t-4 border-t-white w-16" />
            <div
              className={`pt-2 !font-bold text-3xl ${poppins.className} ${
                isTokensVisible && "animate-slideInBottomBasic"
              }`}
            >
              TOKENOMICS
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-between gap-4 sm:gap-2 my-10">
            <div className="tokenomics-wrapper order-2 sm:order-1">
              <div className="w-full h-[100vw] xs:h-[75vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] flex flex-col justify-end relative">
                <Image
                  src={RedTokenomic}
                  alt="red-t"
                  className="w-full h-full absolute"
                />
                <div className="bg-gradient-to-br from-green-300 via-emerald-400 to-cyan-400 rounded-xl h-14 flex justify-center items-center relative mx-4 mb-6 md:mb-4">
                  100,000,000
                </div>
              </div>
              <div className="w-full mx-auto px-4 pt-4">Total Supply</div>
            </div>

            <div className="tokenomics-wrapper order-1 sm:order-2">
              <div className="w-full h-[100vw] xs:h-[75vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] flex flex-col justify-end relative">
                <Image
                  src={GreenTokenomic}
                  alt="green-t"
                  className="w-full h-full absolute"
                />
                <div className="bg-gradient-to-br from-green-300 via-emerald-400 to-cyan-400 rounded-xl h-14 flex justify-center items-center relative mx-4 mb-6 md:mb-4">
                  $NEXTFLOW
                </div>
              </div>
              <div className="w-full mx-auto px-4 pt-4">NexaFlow AI</div>
            </div>

            <div className="tokenomics-wrapper order-3">
              <div className="w-full h-[100vw] xs:h-[75vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] flex flex-col justify-end relative">
                <Image
                  src={BlueTokenomic}
                  alt="blue-t"
                  className="w-full h-full absolute"
                />
                <div className="bg-gradient-to-br from-green-300 via-emerald-400 to-cyan-400 rounded-xl h-14 flex justify-center items-center relative mx-4 mb-6 md:mb-4">
                  5 / 5
                </div>
              </div>
              <div className="w-full mx-auto px-4 pt-4">Tax</div>
            </div>
          </div>

          <div
            className={`text-sm lg:text-base ${Neuropolitical.className} my-2`}
          >
            {contractAddress}
          </div>
          {/* background: #D9D9D936; */}

          <div className="w-full flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href={findUsLink.uniswap}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-br from-green-300 via-emerald-400 to-cyan-400 text-white hover:text-black font-semibold shadow-lg shadow-green-300/50 hover:shadow-xl hover:shadow-green-300/70 hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-0"
              >
                Buy $NEXAFLOW
              </Button>
            </Link>

            <Link
              href={findUsLink.dextools}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-green-400 text-green-600 font-semibold shadow-lg shadow-green-400/30 hover:bg-gradient-to-br hover:from-green-300 hover:via-emerald-400 hover:to-cyan-400 hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-emerald-400/60 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                Chart
              </Button>
            </Link>
          </div>
        </div>

        <div className="h-24 md:h-40" />

        <div className="generate-container">
          <div className="mt-4">
            <Image
              src={BannerApp}
              alt="logo-app"
              className="w-40 h-20 object-contain mx-auto"
            />
          </div>

          <div
            className={`w-full xs:w-3/4 md:w-2/3 mx-auto text-center text-base xs:text-lg text-slate-300 my-6 ${Neuropolitical.className}`}
          >
            With{" "}
            <span className="font-bold bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              NexaFlow AI
            </span>{" "}
            , you're not just managing data—you're unlocking its true potential
            to drive smarter decisions and growth.
          </div>

          <div className="w-1/2 xs:w-40 flex justify-between gap-x-4 text-center mx-auto">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeleIcon
                style={{ fontSize: "1.4em" }}
                className="cursor-pointer fill-slate-300 hover:fill-[#19d283]"
              />
            </Link>

            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                style={{ fontSize: "1.4em" }}
                className="cursor-pointer fill-slate-300 hover:fill-[#19d283]"
              />
            </Link>

            {/* <Link
              href={socialsLink.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon
                style={{ fontSize: "1.4em" }}
                className="cursor-pointer fill-slate-300 hover:fill-[#19d283]"
              />
            </Link> */}

            <Link
              href={socialsLink.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitbookIcon
                style={{ fontSize: "1.4em" }}
                className="cursor-pointer fill-slate-300 hover:fill-[#19d283]"
              />
            </Link>
          </div>
        </div>

        <div className="h-12 lg:h-24" />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <YinLoader />
    </div>
  );
};

export default Home;
