import footerImg from "@/public/img/footer.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Input } from "../ui/input";
import { Angry, History, ScanFace, Smile } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="bottom-0 left-0 right-0 px-10 lg:w-[1070px] my-10 mx-auto text-white">
        <div className="email">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-bold mt-1">
            <span className="text-chart-5">St</span>ill You Need Our Support ?
          </p>
          <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          <ButtonGroup className=" mt-5">
            <Input
              type="text"
              placeholder="Enter Your Email"
              className="bg-chart-5 text-white placeholder:text-white font-medium"
            />
            <Button variant="outline" className="bg-white text-chart-5">
              Subscribe
            </Button>
          </ButtonGroup>
        </div>
        <hr className="bg-chart-5 my-5" />
        <div className="about">
          <h4>About Us</h4>
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            corporis odio nihil explicabo ab. Maiores illo quisquam iusto
            doloremque sunt.
          </p>
          <div className="flex my-5 gap-2.5 flex-wrap items-center">
            <div className="div bg-chart-5 p-2">
              <History className="text-white size-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-base">Opening Hours</span>
              <p className="text-xs">
                Mon - Sat(8.00 - 6.00)
                <br />
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="baseline bg-chart-5 w-full px-4 py-4">
        <div className="content lg:w-[1070px] mx-auto flex justify-between items-center">
          <p className="copyright text-white text-xs">
            Copyrigt &copy; by M. Hamdan Yusuf. All Rights Reserved.
          </p>
          <div className="sosmed flex gap-1.5">
            <Smile className="bg-white p-1 rounded-b-sm" />
            <Angry className="bg-white p-1 rounded-b-sm" />
            <ScanFace className="bg-white p-1 rounded-b-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
// Author : M. Hamdan Yusuf 😎
