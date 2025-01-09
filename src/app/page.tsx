import * as React from "react";
import { Banner } from "@/components/banner";
import fetchWrapper from "@/config/fetch-wrapper";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselWrapper } from "@/components/Carousel/carousel-wrapper";

export interface ResponceTodoT {
  title?: string;
  description: string;
  image: string;
  id: number;
}
export interface BannerDataType {
  results?: {
    title?: string;
    description: string;
    image: string;
    id: number;
  }[];
}

export default async function Home() {
  const data = await fetchWrapper<BannerDataType>("/banner", {
    next: { revalidate: 86400 },
  });

  return (
    <>
      <div className="container">
        <div className="flex justify-end">
          <CarouselWrapper>
            {data?.results?.map((item: ResponceTodoT) => (
              <CarouselItem key={item.id}>
                <Banner key={item.id} {...item} />
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </div>
      </div>
    </>
  );
}
