import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const MoreEvents = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      );
  return (
    <div className="flex-col flex items-start justify-start gap-4 w-5/6  mx-auto mt-16  ">
      <p className="section-heading">Events that you might like</p>
      <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="">
                <CardContent className="flex h-64 items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-ml-12" />
      <CarouselNext className="-mr-12" />
    </Carousel>
    </div>
  );
};

export default MoreEvents;
