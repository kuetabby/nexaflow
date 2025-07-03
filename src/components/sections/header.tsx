"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { menuList } from "@/utils/fackData/menuList";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Neuropolitical } from "@/utils/font";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowPos = window.scrollY;
      setIsFixed(windowPos >= 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 bg-black bg-opacity-50 backdrop-blur-md shadow-lg"
          : "relative"
      } ${Neuropolitical.className}`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="z-10 py-0.5 relative">
            <Link href="/">
              <img
                src="/images/logos/logo_title.png"
                alt="Logo"
                title="Logo"
                className="w-[300px]"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`lg:static absolute left-0 lg:bg-transparent w-full lg:w-auto top-full transition-all duration-500 ease-in-out ${
              showMenu
                ? "h-[341px] opacity-100 visible overflow-y-auto"
                : "h-0 opacity-0 invisible lg:h-auto lg:opacity-100 lg:visible overflow-hidden"
            }`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center">
              {menuList.map(({ id, label, path }) => (
                <li
                  key={id}
                  className="lg:py-11 py-4 px-5 border-b border-border lg:border-b-0 [.is-sticky_&]:py-6"
                >
                  <Link
                    href={path}
                    className={`opacity-100 block text-[13px] font-semibold relative uppercase text-white transition-all duration-500 ease-linear cursor-pointer hover:text-[#19d283] lg:[.is-sticky_&]:text-black [.is-sticky_&]:hover:text-foreground`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div
            className="text-white cursor-pointer lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FontAwesomeIcon icon={faBars} fontSize="25" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
