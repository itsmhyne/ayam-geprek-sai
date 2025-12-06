import Image from "next/image";

import logo from "@/public/logo/sai.png";
import { SidebarTrigger } from "../ui/sidebar";

export default function HeaderWebsite() {
  return (
    <>
      <nav className="py-9 px-4">
        <div className="container">
          <div className="menu flex justify-between items-center">
            <Image
              src={logo}
              alt={"logo sai"}
              className="w-[50px] order-1 md:order-2"
            />
            <SidebarTrigger className="order-2 md:order-1 md:mr-auto lg:hidden" />
          </div>
        </div>
      </nav>
    </>
  );
}

// Author : M. Hamdan Yusuf 😎
