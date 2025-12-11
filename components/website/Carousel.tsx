import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import food_2 from "@/public/img/food-2.png";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-accent"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className=" flex-none">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <Image
                    src={food_2}
                    alt="Background Hero"
                    fill
                    className="object-cover rounded-xl w-[392px] h-[313px]"
                  />
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    //     <Carousel className="mt-10">
    //     <CarouselPrevious />
    //     <CarouselContent className="gap-2 md:gap-5">
    //       <div className="flex flex-col w-[392px]">
    //         <Image
    //           src={category_1}
    //           placeholder="blur"
    //           loading="eager"
    //           alt="category"
    //           className="w-full h-[313px]"
    //         />
    //         <section className="p-5">
    //           <div className="flex flex-wrap items-center gap-2.5">
    //             <CalendarClockIcon className="text-chart-5" />
    //             <span className="bodysmall">02 Nov 2025</span>
    //             <MessageCircleMoreIcon className="text-chart-5" />
    //             <span className="bodysmall">Komen (200)</span>
    //           </div>
    //           <p className="bodylarge font-semibold mt-4">
    //             Lorem ipsum dolor sit amet.
    //           </p>
    //           <p className="bodysmall font-thin">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    //             eum eaque molestiae temporibus rerum enim!
    //           </p>
    //           <span className="flex">
    //             Selengkapnya <ChevronRight />
    //           </span>
    //         </section>
    //       </div>
    //     </CarouselContent>
    //     <CarouselNext />
    //   </Carousel>
  );
}
