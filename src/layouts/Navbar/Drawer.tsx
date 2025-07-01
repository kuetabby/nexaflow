import { useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import { poppins } from "@/utils/font";

// import AppTitle from "@/assets/title-app.png";
import { findUsLink, socialsLink } from "@/constants/links";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "Home",
      },
      {
        href: "#about",
        pathname: `#about`,
        name: "About Us",
      },
      {
        href: "#ecosystem",
        pathname: `#ecosystem`,
        name: "Ecosystem",
      },
      {
        href: "#tokenomic",
        pathname: `#tokenomic`,
        name: "Tokenomics",
      },
      {
        href: "/",
        pathname: `/`,
        name: "Buy",
      },
      {
        href: "/",
        pathname: `/`,
        name: "Chart",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  // return (
  //   <Collapse in={isOpen} animateOpacity>
  //     <div className={`w-full h-full mt-8 ${poppins.className}`}>
  //       <List spacing={3}>
  //         {tabsList.map((item) => {
  //           const isActive = !!defaultHash
  //             ? hashname === item.pathname
  //             : !defaultHash && pathname === item.pathname;

  //           return (
  //             <ListItem key={item.name} onClick={onClose}>
  //               <Anchor
  //                 href={item.href}
  //                 className={clsx(
  //                   "font-bold",
  //                   // "text-white p-2 hover:text-secondary font-bold",
  //                   // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
  //                   // isActive ? "#bf00ff" : "text-white"
  //                   isActive ? "nav-anchor-active" : "nav-anchor"
  //                 )}
  //                 style={{ transition: "250" }}
  //               >
  //                 {isActive && (
  //                   <ArrowRightOutlined className="mr-4 animate-slideInLeftBasic" />
  //                 )}
  //                 {item.name}
  //               </Anchor>
  //             </ListItem>
  //           );
  //         })}
  //       </List>
  //     </div>
  //   </Collapse>
  // );

  return (
    <Drawer
      // size={""}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className={`bg-dark-main h-24 ${poppins.className}`}>
          <Link href="/" className={`logo-container text-white h-full`}>
            <div className="font-extrabold text-2xl">NexaFlow AI</div>
          </Link>
        </DrawerHeader>

        <DrawerBody className={`bg-dark-main ${poppins.className}`}>
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>

        <DrawerFooter className="bg-dark-main flex justify-center">
          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size={"lg"}
              className="nav-tg-btn"
              // colorScheme="messenger"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Whitepaper
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
