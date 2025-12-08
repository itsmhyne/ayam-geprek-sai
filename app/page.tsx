import heroBg from "@/public/img/hero.png";
import hero1 from "@/public/img/hero_1.png";
import Image from "next/image";
import food_1 from "@/public/img/food-1.png";
import food_2 from "@/public/img/food-2.png";
import food_3 from "@/public/img/food-3.png";
import category_1 from "@/public/img/category_1.png";
import category_2 from "@/public/img/category_2.png";
import category_3 from "@/public/img/category_3.png";
import category_4 from "@/public/img/category_4.png";
import { CheckCircle, CheckLine, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[371px] md:h-[90vh]">
        {/* Background image */}
        <Image
          src={heroBg}
          alt="Background Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (opsional) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Konten */}
        <div className="relative z-10 grid grid-cols-1 items-center md:grid-cols-2 h-full justify-center px-10 lg:w-[1070px] lg:mx-auto">
          <div className="flex flex-col gap-2.5">
            <h3 className="heading3 title font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Its Quick & Amusing!
            </h3>
            <p className="text-white heading1 font-bold mt-1">
              <span className="text-chart-5">Th</span>e Art of Speed
              <br />
              Food Quality
            </p>
            <p className="bodysmall text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Libero, ab quos. Quae eveniet rerum perspiciatis mollitia dolorem
              eius
            </p>

            <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full buttontext w-fit hover:bg-chart-4">
              See Menu
            </button>
          </div>
          <Image src={hero1} alt={"image"} className="hidden lg:block" />
        </div>
      </section>
      <section className="content px-10 lg:w-[1070px] mx-auto flex flex-col items-center md:mt-[104px]">
        <div className="grid gap-2.5 lg:grid-cols-2">
          <div className="">
            <h1 className="title heading3 font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              About Us
            </h1>
            <p className="text-white heading1 font-bold mt-1">
              <span className="text-chart-5">We</span> Created the Best
              <br />
              Foody Product
            </p>
            <p className="bodysmall text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              molestiae, distinctio perferendis, rerum voluptates eos, placeat
              enim neque corporis eligendi velit! Tempore suscipit, explicabo
              optio iste minus ex! Modi veritatis recusandae, in officia nisi at
              quaerat praesentium pariatur laudantium, culpa, consequatur
              laborum blanditiis dolorum necessitatibus. Temporibus eveniet odio
              quasi veritatis iure soluta mollitia quam, corporis nobis omnis
              amet ut, fuga id corrupti quod nam accusantium.
            </p>
            <ul className="mt-5 text-white bodysmall flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <CheckCircle className="size-4" /> Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </li>
              <li className="flex gap-2  items-center">
                <CheckCircle className="size-4" /> Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="size-4" /> Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </li>
            </ul>
            <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full buttontext w-fit hover:bg-chart-4">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5 lg:mt-0">
            <div className="relative col-span-2 row-span-2 h-[200px] md:h-[400px]">
              <Image
                src={food_1}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[100px] md:h-[200px]">
              <Image
                src={food_2}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[100px] md:h-[200px]">
              <Image
                src={food_3}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center md:mt-[104px]">
          <h1 className="title heading3 font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
            Food Category
          </h1>
          <p className="text-white heading1 font-bold mt-1">
            <span className="text-chart-5">Ch</span>oose Food Item
          </p>
          <Carousel className="mt-10">
            <CarouselPrevious />
            <CarouselContent className="gap-5">
              <Image src={category_1} alt="category" className="" />
              <Image src={category_2} alt="category" className="" />
              <Image src={category_3} alt="category" className="" />
              <Image src={category_4} alt="category" className="" />
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
