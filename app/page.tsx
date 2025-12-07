import heroBg from "@/public/img/hero.png";
import Image from "next/image";
import food_1 from "@/public/img/food-1.png";
import food_2 from "@/public/img/food-2.png";
import food_3 from "@/public/img/food-3.png";
import category_1 from "@/public/img/category_1.png";
import category_2 from "@/public/img/category_2.png";
import category_3 from "@/public/img/category_3.png";
import category_4 from "@/public/img/category_4.png";
import { CheckCircle, CheckLine } from "lucide-react";

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
        <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20">
          <h1 className="title text-xs md:text-[20px] lg:text-3xl font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
            Its Quick & Amusing!
          </h1>
          <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-1">
            <span className="text-chart-5">Th</span>e Art of Speed
            <br />
            Food Quality
          </p>
          <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Libero, ab quos. Quae eveniet rerum perspiciatis mollitia dolorem
            eius
          </p>

          <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full text-[7px] md:text-[10px] lg:text-[16px] w-fit hover:bg-chart-4">
            See Menu
          </button>
        </div>
      </section>
      <section className="content px-4 py-5 lg:py-10">
        <div className="grid gap-2.5 lg:grid-cols-2">
          <div className="">
            <h1 className="title text-xs md:text-[20px] lg:text-3xl font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              About Us
            </h1>
            <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-1">
              <span className="text-chart-5">We</span> Created the Best
              <br />
              Foody Product
            </p>
            <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              molestiae, distinctio perferendis, rerum voluptates eos, placeat
              enim neque corporis eligendi velit! Tempore suscipit, explicabo
              optio iste minus ex! Modi veritatis recusandae, in officia nisi at
              quaerat praesentium pariatur laudantium, culpa, consequatur
              laborum blanditiis dolorum necessitatibus. Temporibus eveniet odio
              quasi veritatis iure soluta mollitia quam, corporis nobis omnis
              amet ut, fuga id corrupti quod nam accusantium.
            </p>
            <ul className="mt-5 text-white text-[7px] md:text-[10px] lg:text-[16px] flex flex-col gap-2">
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
            <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full text-[7px] md:text-[10px] lg:text-[16px] w-fit hover:bg-chart-4">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-white mt-4 md:mt-0">
            <Image src={food_1} alt="Background Hero" className="col-span-2" />
            <Image src={food_2} alt="Background Hero" className="" />
            <Image src={food_3} alt="Background Hero" className="" />
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1 className="title text-xs md:text-[20px] lg:text-3xl font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Food Category
            </h1>
            <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-1">
              <span className="text-chart-5">Ch</span>oose Food Item
            </p>
            <div className="grid justify-center mt-5 gap-2.5">
              <Image src={category_1} alt="category" className="" />
              <Image src={category_2} alt="category" className="" />
              <Image src={category_3} alt="category" className="" />
              <Image src={category_4} alt="category" className="" />
            </div>
          </div>
        </div>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi reiciendis labore pariatur, molestiae rerum animi vitae
          quidem corrupti sunt eveniet. Laudantium mollitia eos nihil dolor,
          corporis fuga ratione modi repellat eligendi, quidem laborum voluptas
          animi iste assumenda, voluptatibus maxime libero at doloribus
          voluptate. Porro accusamus aliquam consequuntur sed ratione qui
          commodi magni animi corporis quae, aspernatur eligendi ipsam minima
          nostrum reprehenderit. Nulla amet accusantium aspernatur beatae dolore
          dicta, dolor eaque veniam natus omnis. Culpa, soluta. Facilis dolorum,
          quod vel quos possimus voluptate consectetur cupiditate voluptates
          consequatur eligendi iste laudantium, repellendus, non aperiam beatae
          ab corporis debitis est. Doloribus, obcaecati.
        </p>
      </section>
    </>
  );
}
