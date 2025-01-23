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
  comment?: string | object | any;
}
export function CarouselWrapper({
  children,
  comment,
  className,
  opts,
  plugins,
}: CrouselWrapperType) {
  return (
    <Carousel
      opts={opts}
      className={className}
      plugins={
        plugins && !comment 
          ? [
              Autoplay({
                delay: 5000,
              }),
            ]
          : plugins && comment
          ? [
              Autoplay({
                delay: 3000,
              }),
            ]
          : undefined
      }
    >
      {children}
      {!comment && (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      )}
    </Carousel>
  );
}
