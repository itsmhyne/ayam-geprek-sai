import heroBg from "@/public/img/hero.png";
import Image from "next/image";

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
          <h1 className="title text-xs md:text-[20px] lg:text-3xl font-bold max-w-xl">
            Its Quick & Amusing!
          </h1>
          <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mt-4 max-w-md">
            The Art of Speed
            <br />
            food Quality
          </p>
          <p className="text-[7px] md:text-[10px] lg:text-[16px] text-white font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ab
            quos. Quae eveniet rerum perspiciatis mollitia dolorem eius
          </p>

          <button className="mt-6 bg-chart-5 text-white px-6 py-3 rounded-full text-xs w-fit hover:bg-neutral-200">
            Lihat Menu
          </button>
        </div>
      </section>
      <section className="content px-4">
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
