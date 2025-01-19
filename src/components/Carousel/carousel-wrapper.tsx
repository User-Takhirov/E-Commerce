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
  className?: string | undefined;
  plugins?: string | object | any;
  opts?: string | object | any;
}
export function CarouselWrapper({
  children,
  className,
  opts,
  plugins,
}: CrouselWrapperType) {
  return (
    <Carousel
    
      opts={opts}
      className={className}
      plugins={
        plugins && [
          Autoplay({
            delay: 2000,
          }),
        ]
      }
    >
      {children}
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
