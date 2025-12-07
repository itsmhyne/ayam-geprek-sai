"use client";

import Image from "next/image";

import logo from "@/public/logo/sai.png";
import { SidebarTrigger } from "../ui/sidebar";
import { useState, useEffect } from "react";

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
        className={`py-9 px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm bg-black shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="menu flex justify-between items-center">
            <Image src={logo} alt={"logo sai"} className="w-[50px] order-1 " />
            <SidebarTrigger className="order-2 lg:hidden text-white" />
          </div>
        </div>
      </nav>
    </>
  );
}

// Author : M. Hamdan Yusuf 😎
