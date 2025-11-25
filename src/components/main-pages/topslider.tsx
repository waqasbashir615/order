"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import IMAGES from "@/assets/images";
import LazyImage from "../lazy-image";

const images = [
  { img: IMAGES.APPBANNER },
  { img: IMAGES.BANNER1 },
  // { img: IMAGES.TWITTWERIMGBANNER },
  { img: IMAGES.BANNER3 },
  { img: IMAGES.BANNER4 },
  { img: IMAGES.BANNER5 },
  { img: IMAGES.BANNER6 },
  { img: IMAGES.BANNER7 },
  // { img: IMAGES.BANNER8 },
  // { img: IMAGES.BANNER9 },
  { img: IMAGES.BANNER10 }
];

export default function HeroCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="relative w-full h-full  overflow-hidden group mt-14 sm:mt-18">      <Carousel
      plugins={[plugin.current]}
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className="w-full h-full"
    >
      <CarouselContent>
        {images.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 rounded-none py-0">
              <CardContent className="p-0 h-full flex items-center justify-center">
                <div className="w-full h-full relative">
                  <LazyImage
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full  h-full  object-cover xs:object-contain md:object-cover"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent md:hidden" />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 hover:bg-black bg-[#AA1F27] text-white hover:text-white rounded-full w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 active:border-white" />
      <CarouselNext className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 hover:bg-black bg-[#AA1F27] text-white hover:text-white  rounded-full w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 active:border-white" />
    </Carousel>

      {/* Properly Aligned Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center justify-center space-x-2 xs:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center justify-center rounded-full transition-all duration-500 ease-out cursor-pointer ${index === current
                ? "bg-[#AA1F27] w-6 xs:w-7 sm:w-8 h-2 xs:h-2.5 sm:h-3 shadow-md border-"
                : "bg-white/60 hover:bg-white/80 w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 "
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}