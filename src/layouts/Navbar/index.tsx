"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { useIsMounted } from "@/hooks/useIsMounted";
// import { useWidth } from "@/hooks/useWidth";

import { Neuropolitical } from "@/utils/font";
import { findUsLink, socialsLink } from "@/constants/links";

import AppBannerNav from "@/assets/banner-nav.png";

import "./style.css";

interface Props {}

// const contractAddress = "0x00FEeF969243D9faB0913b6e97a24DC6341a986B";
// const pairAddress = "";

const Navbar: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();

  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    // onOpen: onOpenDrawer,
    onToggle: onToggleDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  // const [isEqual640] = useMediaQuery("(min-width: 640px)");
  const [isEqual1024] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  useEffect(() => {
    if (isEqual1024) {
      onCloseDrawer();
    }
  }, [isEqual1024]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  if (isMounted && isLoaded) {
    return (
      <div
        className={clsx(
          isScroll ? "navbar-fixed" : "navbar-container",
          Neuropolitical.className
        )}
      >
        <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
          <div className="w-full flex items-center justify-center relative">
            <Link href="/" className={`logo-container text-white`}>
              <Image
                src={AppBannerNav}
                alt="banner-nav-logo"
                className={`w-full h-16 sm:h-28 mt-2 ${
                  isScroll && "!h-20"
                } object-contain object-center`}
              />
            </Link>
          </div>

          {/* <PageTabs containterClass="hidden lg:flex" /> */}

          {/* <div className={clsx("!hidden md:!flex justify-end w-2/5 lg:w-1/2")}>
          {isMounted && <ConnectWallet hideTestnetFaucet />}
        </div> */}

          {/* <div className="w-1/2 lg:w-1/4 lg:flex justify-end font-semibold">
          <div className="w-full  hidden lg:flex justify-end">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto mr-2 sm:mr-0"
            >
              <Button
                className="nav-tg-btn"
                // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
              >
                Whitepaper
              </Button>
            </Link>
          </div>

          <div className="w-auto text-end sm:ml-4 lg:hidden">
            <Button
              onClick={onToggleDrawer}
              className={`nav-menu-btn border border-solid border-primary ${
                isOpenDrawer
                  ? "animate-slideInRightFast"
                  : "animate-slideInBottomBasic"
              }`}
            >
              <MenuOutlined
                className="font-extrabold text-primary"
                style={{ fontSize: "1.5em" }}
              />
            </Button>
          </div>
        </div> */}

          {/* <div
          // className={clsx("!hidden sm:!flex justify-end w-1/3 font-semibold")}
          className={clsx("w-[47.5%] flex justify-end relative font-semibold")}
        >
          <div className="w-auto justify-between hidden sm:flex">
            <Link
              href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto mr-4 hidden sm:block"
            >
              <Button
                className="w-full bg-copper-shine hover:bg-gold-rush active:bg-gold-rush focus:bg-gold-rush text-white"
                // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
              >
                Buy Now
              </Button>
            </Link>

            <Link
              href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto hidden sm:block"
            >
              <Button
                className="w-full bg-gold-rush hover:bg-copper-shine active:bg-copper-shine focus:bg-copper-shine text-white"
                // leftIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
              >
                Chart
              </Button>
            </Link>
          </div>

          <Button
            className="bg-NexaFlow-primary  hover:bg-NexaFlow-primary  active:bg-NexaFlow-primary  focus:bg-NexaFlow-primary  text-white lg:hidden"
            onClick={onOpenDrawer}
          >
            <MenuOutlined
              className="font-extrabold text-white"
              style={{ fontSize: "1.5em" }}
            />
          </Button>
        </div> */}

          {/* <div className="sm:hidden w-1/4 text-right animate-fadeInBasic">
          {isMounted && (
            <Button
              className="bg-NexaFlow-primary  hover:bg-NexaFlow-primary  active:bg-NexaFlow-primary  focus:bg-NexaFlow-primary  text-white"
              onClick={onOpenDrawer}
            >
              <MenuOutlined
                className="font-extrabold text-white"
                style={{ fontSize: "1.5em" }}
              />
            </Button>
          )}
        </div> */}
          <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;
