import * as React from "react";
import { Banner } from "@/components/banner";
import fetchWrapper from "@/config/fetch-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselWrapper } from "@/components/Carousel/carousel-wrapper";
import { BestSellerCards } from "@/components/best-seller-cards";
import SELLERIMAGE from "@/assets/img/sellerADS.png";
import SELLERIMAGE2 from "@/assets/img/sellerADS2.png";
import SELLERIMAGE3 from "@/assets/img/sellerADS3.png";
import SELLERIMAGE4 from "@/assets/img/sellerADS4.png";
import Image from "next/image";

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
  const bestsellerCards = await fetchWrapper<BannerDataType>("/product", {
    next: { revalidate: 86400 },
  });

  return (
    <>
      <div className="container">
        <div className="flex justify-end mb-[30px]">
          <CarouselWrapper
            opts={{
              loop: true,
            }}
            className="w-full max-w-[870px]"
            plugins
          >
            <CarouselContent>
              {data?.results?.map((item: ResponceTodoT) => (
                <CarouselItem key={item.id}>
                  <Banner key={item.id} {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </CarouselWrapper>
        </div>
        <div className="best-seller flex justify-between  mb-[100px] ">
          <div className="ads-best-seller">
            <div>
              <div className="h-[403px] mb-[50px]">
                <Image
                  width={270}
                  height={403}
                  quality={100}
                  priority
                  style={{ width: "270px", height: "100%" }}
                  src={SELLERIMAGE}
                  alt="#"
                />
              </div>
              <div className="h-[403px] mb-[50px]">
                <Image
                  width={270}
                  height={403}
                  quality={100}
                  priority
                  style={{ width: "270px", height: "100%" }}
                  src={SELLERIMAGE2}
                  alt="#"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="cards-best-seller h-[463px]">
              <div className="mb-[30px]">
                <h2 className="font-[600] text-[20px] leading-[120%] uppercase text-[#202435]">
                  Best Sellers
                </h2>
                <p className="font-[400] text-[12px] leading-[150%] text-[#9b9bb4]">
                  Do not miss the current offers until the end of March.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CarouselWrapper
                  opts={{ align: "start", loop: "true" }}
                  className="w-full max-w-[870px] m-0  gap-0 p-0 border"
                >
                  <CarouselContent>
                    {bestsellerCards?.results?.map((item: ResponceTodoT) => (
                      <CarouselItem
                        key={item.id}
                        className="basis-1/4 m-0  gap-0 p-0"
                      >
                        <BestSellerCards key={item.id} {...item} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </CarouselWrapper>
              </div>
            </div>
            <div className="mb-[30px]">
              <Image
                width={870}
                height={126}
                quality={100}
                priority
                style={{ width: "870px", height: "100%" }}
                src={SELLERIMAGE3}
                alt="#"
              />
            </div>
            <div className="timer mb-[30px]">Timer</div>
            <div className=" mb-[30px]">
              <Image
                width={870}
                height={74}
                quality={100}
                priority
                style={{ width: "870px", height: "100%" }}
                src={SELLERIMAGE4}
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
