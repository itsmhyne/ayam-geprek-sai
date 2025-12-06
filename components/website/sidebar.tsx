"use client";
import Image from "next/image";
import logo from "@/public/logo/sai.png";
import Link from "next/link";

export default function SidebarWebsite() {
  return (
    <nav className="py-9 px-4">
      <div className="container mx-auto">
        <div className="menu flex justify-between items-center">
          <Image src={logo} alt={"logo sai"} className="w-[50px]" />
        </div>
        <div className="menu fixed left-0 top-0 bottom-0 bg-secondary p-5  w-1/2">
          <div className="header flex gap-3 mb-5">
            <Image src={logo} alt={"logo sai"} className="w-5" />
            <h4 className="font-medium text-lg">Ayam Geprek Sa'i</h4>
          </div>
          <ul className="flex-col">
            <li>
              <Link href={"/"}>Home</Link>{" "}
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
