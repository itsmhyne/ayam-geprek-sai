import heroBg from "@/public/img/hero.png";
import Image from "next/image";
import food_1 from "@/public/img/food-1.png";
import food_2 from "@/public/img/food-2.png";
import food_3 from "@/public/img/food-3.png";

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
          <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-1 max-w-md">
            <span className="text-chart-5">Th</span>e art of speed
            <br />
            food quality
          </p>
          <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin mt-4 leading-2 lg:leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Libero, ab quos. Quae eveniet rerum perspiciatis mollitia dolorem
            eius
          </p>

          <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full text-[7px] md:text-[10px] lg:text-[16px] w-fit hover:bg-neutral-200">
            Lihat Menu
          </button>
        </div>
      </section>
      <section className="content px-4 py-5 lg:py-10">
        <div className="grid gap-2.5 lg:grid-cols-2">
          <div className="fle">
            <h1 className="title text-xs md:text-[20px] lg:text-3xl font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              About Us
            </h1>
            <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-1 max-w-md">
              <span className="text-chart-5">We</span> created the best
              <br />
              foody product
            </p>
            <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin mt-4 leading-2 lg:leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              molestiae, distinctio perferendis, rerum voluptates eos, placeat
              enim neque corporis eligendi velit! Tempore suscipit, explicabo
              optio iste minus ex! Modi veritatis recusandae, in officia nisi at
              quaerat praesentium pariatur laudantium, culpa, consequatur
              laborum blanditiis dolorum necessitatibus. Temporibus eveniet odio
              quasi veritatis iure soluta mollitia quam, corporis nobis omnis
              amet ut, fuga id corrupti quod nam accusantium. Numquam nostrum
              soluta quaerat quo ipsum, maiores dolor corrupti sint accusamus,
              neque nobis odio culpa ex natus impedit! Doloremque quos,
              provident tenetur veritatis deserunt ullam, dolorum, maxime nam
              vero quasi iste nemo quod. Ratione, beatae.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-white mt-4 md:mt-0">
            <span className="col-span-2">
              <Image src={food_1} alt="Background Hero" priority />
            </span>
            <span className="">
              <Image src={food_2} alt="Background Hero" priority className="" />
            </span>
            <div className="">
              <Image src={food_3} alt="Background Hero" priority className="" />
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
