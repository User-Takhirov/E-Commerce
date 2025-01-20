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
import { NewProductCard } from "@/components/new-product-card";
import { DownloadIcon } from "@/assets/icons/download-icon";
import { OrderIcon } from "@/assets/icons/order-icon";
import { ClockIcon } from "@/assets/icons/clock-icon";
import weekendDIS1 from "@/assets/img/weekendDIS1.png";
import weekendDIS2 from "@/assets/img/weekendDIS2.png";

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
  const bestsellerCards = await fetchWrapper<BannerDataType | any>("/product", {
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
              <div className="downloadf border rounded-[7px] w-[268px]">
                <div className="1 border-b flex items-center gap-[15px] py-[23px] px-[20px]  ">
                  <DownloadIcon />
                  <h3 className="font-[400] text-[12px] leading-[150%] text-[#202435]  ">
                    Download the Bacola App to your Phone.
                  </h3>
                </div>
                <div className="2 border-b flex items-center gap-[15px] py-[23px] px-[20px]  ">
                  <OrderIcon />
                  <h3 className="font-[400] text-[12px] leading-[150%] text-[#202435]  ">
                    Order now so you dont miss the opportunities.
                  </h3>
                </div>
                <div className="3 flex  items-center gap-[15px] py-[23px] px-[20px]  ">
                  <ClockIcon />
                  <h3 className="font-[400] text-[12px] leading-[150%] text-[#202435]  ">
                    Your order will arrive at your door in 15 minutes.
                  </h3>
                </div>
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
              <div className="bg-[#ffeef2] flex items-center gap-[15px] py-[20px] justify-center rounded-[7px]  ">
                <h2 className="font-[400] text-[16px] leading-[150%] text-[#ed174a] cursor-pointer">
                  Super discount for your{" "}
                  <span className="font-[600] underline cursor-pointer">
                    first purchase.
                  </span>
                </h2>
                <h2 className="font-[600] cursor-pointer text-[16px] leading-[150%] uppercase border border-[#ed174a] text-[#ed174a] py-[5px] px-[20px] border-dashed rounded-[30px] ">
                  FREE25BAC
                </h2>
                <p className="font-[400] cursor-pointer text-[12px] leading-[150%] text-[#9b9bb4]">
                  Use discount code in checkout!
                </p>
              </div>
            </div>
            <div className="cards mb-[30px]">
              <div className="cards-title mb-[30px] ">
                <h2 className="font-[600] text-[20px] leading-[120%] uppercase text-[#202435]">
                  NEW PRODUCTS
                </h2>
                <h3 className="font-[400] text-[12px] leading-[150%] text-[#9b9bb4]">
                  New products with updated stocks.
                </h3>
              </div>
              <div className="grid grid-cols-4 border-t ">
                {bestsellerCards?.results?.map((item: ResponceTodoT) => (
                  <div key={item.id} className="grid border-b">
                    <BestSellerCards key={item.id} {...item} />
                  </div>
                ))}
                {/* {[...bestsellerCards?.results, bestsellerCards?.results[0]].map(
                  (item, index) => (
                    <div key={index} className="grid border-b">
                      <BestSellerCards key={item.id} {...item} />
                    </div>
                  )
                )} */}
              </div>
            </div>
            <div className="discounts flex items-center justify-between ">
              <div className="cursor-pointer">
                <Image
                  src={weekendDIS1}
                  width={420}
                  height={229}
                  quality={100}
                  alt="#"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={weekendDIS2}
                  width={420}
                  height={229}
                  quality={100}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
