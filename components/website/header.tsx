"use client";

import Image from "next/image";

import logo from "@/public/logo/sai.png";
import { SidebarTrigger } from "../ui/sidebar";
import { useState, useEffect } from "react";
import WebsiteHeader from "./NavigationMenu";

export default function HeaderWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`py-8 px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="container">
          <div className="menu flex justify-evenly items-center">
            <Image
              src={logo}
              alt={"logo sai"}
              className="w-10 md:w-16 order-1"
            />
            <SidebarTrigger
              className={`order-2 lg:hidden ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
            <div className="hidden lg:block order-2">
              <WebsiteHeader />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Author : M. Hamdan Yusuf 😎
