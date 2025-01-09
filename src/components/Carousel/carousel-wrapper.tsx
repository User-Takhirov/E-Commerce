"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
interface CrouselWrapperType {
  children: React.ReactNode;
}
export function CarouselWrapper({ children }: CrouselWrapperType) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full max-w-[870px]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
