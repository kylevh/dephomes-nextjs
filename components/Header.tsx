"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { argentum, moon, mulish } from "@/app/fonts";
import { BsList, BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { strict } from "assert";

const styles = {
  navLinksTrans: `${argentum.className} text-white font-light cursor-pointer antialiased text-sm w-36 uppercase hover:text-black ease-in-out duration-200`,
  navLinksWhite: `${argentum.className} text-dep-textColor font-light cursor-pointer antialiased text-sm w-36 uppercase hover:text-gray-400 ease-in-out duration-200`,
  navFont: `${moon.className} text-2xl`,
  navBarTransparent: `bg-transparent ease-in-out duration-0`,
  navBarWhite: `bg-[#FFFCF8] ease-in-out duration-500 shadow-md`,
};

function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [navBarTransparent, setNavbarTransparent] = useState(true);
  const [strictWhiteNavbar, setStrictWhiteNavbar] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  //Settings to make sure navbar is either transparent or solid depending on the page directory
  useEffect(() => {
    if (path === "/") {
      setNavbarTransparent(true);
      setNavShadow(false);
      setStrictWhiteNavbar(false);
    } else if (path === "/upcoming") {
      setNavbarTransparent(false);
      setNavShadow(false);
      setStrictWhiteNavbar(true);
    } else if (path === "/portfolio") {
      setNavbarTransparent(false);
      setNavShadow(false);
      setStrictWhiteNavbar(true);
    } else if (path === "/about") {
      setNavbarTransparent(true);
      setNavShadow(true);
      setStrictWhiteNavbar(false);
    } else if (path === "/contact") {
      setNavbarTransparent(false);
      setNavShadow(true);
      setStrictWhiteNavbar(true);
    } else {
      setNavbarTransparent(false);
      setNavShadow(false);
      setStrictWhiteNavbar(true);
    }
  }, [setNavbarTransparent, path]);

  //This is to allow the navbar to turn transparent/solid when scrolling
  useEffect(
    function mount() {
      function onScroll() {
        if (window.scrollY >= 20) {
          setNavbarTransparent(false);
        } else if (!strictWhiteNavbar) {
          setNavbarTransparent(true);
        }
      }

      window.addEventListener("scroll", onScroll);

      return function unMount() {
        window.removeEventListener("scroll", onScroll);
      };
    },
    [strictWhiteNavbar]
  );

  return (
    <header>
      <nav
        className={`${
          navBarTransparent ? styles.navBarTransparent : styles.navBarWhite
        } 
            ${navShadow ? "shadow-md" : "shadow-0"}
            w-full h-20 sm:h-24 pb-5 fixed z-10`}
      >
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-full px-6 sm:px-6 pt-[10px] sm:pt-[30px] w-full">
          <div className="flex w-5/6 sm:w-1/3 pt-5 sm:pt-0">
            <Link href="/" className="w-150">
              {navBarTransparent ? (
                <Image
                  src="/images/dep-side-small-white.png"
                  alt="DEPHomes Logo"
                  width={150}
                  height={75}
                  className="cursor-pointer"
                />
              ) : (
                <Image
                  src="/images/dep-side-small.png"
                  alt="DEPHomes Logo"
                  width={150}
                  height={75}
                  className="cursor-pointer"
                />
              )}
            </Link>
          </div>
          <div className="w-1/3 flex justify-center ">
            <ul className="hidden sm:flex text-center">
              <li
                className={`${
                  navBarTransparent
                    ? styles.navLinksTrans
                    : styles.navLinksWhite
                }`}
              >
                <Link href="/upcoming" className="relative">
                  {"/upcoming" === path && (
                    <motion.span
                      layoutId="underline1"
                      className={`absolute bottom-[-3px] h-[1px] w-full ${
                        navBarTransparent
                          ? "bg-dep-offwhite"
                          : "bg-dep-textColor"
                      } `}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
                    />
                  )}
                  Upcoming
                </Link>
              </li>
              <li
                className={`${
                  navBarTransparent
                    ? styles.navLinksTrans
                    : styles.navLinksWhite
                }`}
              >
                <Link href="/portfolio" className="relative">
                  {"/portfolio" === path && (
                    <motion.span
                      layoutId="underline1"
                      className={`absolute bottom-[-3px] h-[1px] w-full ${
                        navBarTransparent
                          ? "bg-dep-offwhite"
                          : "bg-dep-textColor"
                      } `}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
                    />
                  )}
                  Portfolio
                </Link>
              </li>
              <li
                className={`${
                  navBarTransparent
                    ? styles.navLinksTrans
                    : styles.navLinksWhite
                }`}
              >
                <Link href="/about" className="relative">
                  {"/about" === path && (
                    <motion.span
                      layoutId="underline2"
                      className={`absolute bottom-[-3px] h-[1px] w-full ${
                        navBarTransparent
                          ? "bg-dep-offwhite"
                          : "bg-dep-textColor"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
                    />
                  )}
                  About
                </Link>
              </li>
              <li
                className={`${
                  navBarTransparent
                    ? styles.navLinksTrans
                    : styles.navLinksWhite
                }`}
              >
                <Link href="/contact" className="relative">
                  {"/contact" === path && (
                    <motion.span
                      layoutId="underline3"
                      className={`absolute bottom-[-3px] h-[1px] w-full ${
                        navBarTransparent
                          ? "bg-dep-offwhite"
                          : "bg-dep-textColor"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
                    />
                  )}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3"> </div>

          {/* Mobile Menu */}
          <div
            className="sm:hidden cursor-pointer pl-24 pt-5"
            onClick={toggleMenu}
          >
            <BsList
              className={`h-8 w-8 ${
                navBarTransparent ? "text-dep-offwhite" : "text-gray-900"
              } `}
            ></BsList>
          </div>
        </div>

        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-dep-primary p-10 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div className="cursor-pointer">
              <BsX className="h-8 w-8 text-[secondary]" onClick={toggleMenu} />
            </div>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-col py-4">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className={`${styles.navFont} py-4 hover:underline hover:decoration-dep-textColor`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={`${styles.navFont} py-4 hover:underline hover:decoration-dep-textColor`}
              >
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={`${styles.navFont} py-4 hover:underline hover:decoration-dep-textColor`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={`${styles.navFont} py-4 hover:underline hover:decoration-dep-textColor`}
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
