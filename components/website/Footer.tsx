import footerImg from "@/public/img/footer.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Input } from "../ui/input";
import { Angry, History, ScanFace, Smile } from "lucide-react";
import post1 from "@/public/post/post-1.png";
import post2 from "@/public/post/post-2.png";
import post3 from "@/public/post/post-3.png";
export default function Footer() {
  return (
    <>
      <div className="bottom-0 left-0 right-0 px-10 lg:w-[1320px] mt-10 my-10 mx-auto ">
        <div className="email grid grid-cols-1 md:grid-flow-col md:grid-rows-2 md:row-start-1 md:row-end-2">
          <p className=" heading3 font-bold mt-1">
            <span className="text-chart-5">Ka</span>mi membutuhkan dukungan anda
            ?
          </p>
          <p className="bodysmall  font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
            Notifikasi dan pesan akan akan kami kirim ke alamat email anda
          </p>
          <ButtonGroup className=" mt-5">
            <Input
              type="email"
              placeholder="Masukkan email anda"
              className="bg-chart-5  inputtext placeholder: font-medium"
            />
            <Button
              variant="outline"
              className="bg-white buttontext text-chart-5"
            >
              Subscribe
            </Button>
          </ButtonGroup>
        </div>
        <hr className="bg-chart-5 my-5" />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="about py-2.5 md:py-0">
            <h4 className="bodylarge">Tentang Kami</h4>
            <p className="bodysmall">
              Sa’i berarti ikhtiar. Kata Sa’i seakar dengan kata dasar Sa’a yang
              berarti usaha. Secara filosofi peristiwa menggambarkan seorang ibu
              yang gigih berusaha keras mencari air guna memberi minum anaknya
              dengan penuh keyakinan akan bantuan dari Alloh SWT.
            </p>
            <div className="flex my-5 gap-2.5 flex-wrap items-center">
              <div className="div bg-chart-5 p-2">
                <History className=" size-7" />
              </div>
              <div className="flex flex-col">
                <span className="bodylarge">Jam Buka</span>
                <p className="bodysmall">
                  Setiap Hari(09.00 - 22.00)
                  <br />
                  Weekend kami buka 1 jam lebih awal
                </p>
              </div>
            </div>
          </div>
          <div className="useful-links py-2.5 md:py-0">
            <h4 className="bodylarge">Useful Links</h4>
            <ul className="bodysmall mt-2.5 gap-5 grid grid-rows-2 md:grid-cols-1">
              <li>Menu Kami</li>
              <li>Outlet Kami</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Kontak</li>
              <li>Gallery Event</li>
            </ul>
          </div>
          {/* help section */}
          <div className="help py-2.5 md:py-0">
            <h4 className="bodylarge">Help?</h4>
            <ul className="bodysmall mt-2.5 gap-5 grid grid-rows-2 md:grid-cols-1">
              <li>FAQ</li>
              <li>Terms & Condition</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          {/* end help section */}
          {/* recent post section */}
          <div className=" py-2.5 md:py-0">
            <h4 className="bodylarge">Recent Post</h4>
            <ul className="bodysmall mt-2.5 gap-5 grid grid-cols-1">
              <li className="flex items-center gap-2.5">
                <div className="image">
                  <Image src={post1} alt={"post image"} />
                </div>
                <div className="content flex flex-col">
                  <span className="bodysmall text-slate-500">02 Nov 2025</span>
                  <span className="bodysmall">Lorem ipsum dolor sit.</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="image">
                  <Image src={post2} alt={"post image"} />
                </div>
                <div className="content flex flex-col">
                  <span className="bodysmall text-slate-500">02 Nov 2025</span>
                  <span className="bodysmall">Lorem ipsum dolor sit.</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="image">
                  <Image src={post3} alt={"post image"} />
                </div>
                <div className="content flex flex-col">
                  <span className="bodysmall text-slate-500">02 Nov 2025</span>
                  <span className="bodysmall">Lorem ipsum dolor sit.</span>
                </div>
              </li>
            </ul>
          </div>
          {/* end recent post section */}
        </section>
      </div>
      <div className="baseline bg-chart-5 w-full px-4 py-4">
        <div className="content lg:w-[1320px] mx-auto flex justify-between items-center">
          <p className="copyright  bodysmall">
            Copyrigt &copy; by M. Hamdan Yusuf. All Rights Reserved.
          </p>
          <div className="sosmed flex gap-1.5">
            <Smile className="bg-white p-1 rounded-sm" />
            <Angry className="bg-white p-1 rounded-sm" />
            <ScanFace className="bg-white p-1 rounded-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
// Author : M. Hamdan Yusuf 😎
