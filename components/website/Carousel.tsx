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
  );
}
