"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/reducers/product-reducer";

export interface BestSellerTypes {
  title?: string | undefined;
  image: string | undefined | any;
  id: number | string;
  key?: number | string;
  price?: number | any;
}

export const BestSellerCards = ({ item }: BestSellerTypes | any) => {
  const [ratingValue, setRatingValue] = useState(0);
  const disptach = useDispatch();

  useEffect(() => {
    const randomRating = Math.random() * 4 + 1;
    setRatingValue(Math.round(randomRating));
  }, []);
  return (
    <>
      <div className="w-full m-0  p-0 border-l border-r ">
        <div className="text-center flex justify-center">
          <Image
            style={{ textAlign: "center" }}
            width={177}
            height={158}
            quality={100}
            priority
            src={item.image}
            alt="#"
          />
        </div>
        <div className=" h-[196px] px-[20px] pb-[20px]  flex flex-col justify-between">
          <div className="others">
            <h1 className="font-[500] w-[177px] text-[14px] leading-[140%] text-[#202435] mb-[8px]">
              {item.title}
            </h1>
            <h3 className="rounded-[30px] font-[600] text-[11px] leading-[150%] uppercase text-[#00b853] mb-[10px]">
              In Stock
            </h3>
            <div>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    color: index < Math.round(ratingValue) ? "gold" : "gray",
                  }}
                >
                  ★
                </span>
              ))}
              <h2 className="font-[600] text-[18px] leading-[150%] text-[#d51243] mb-[15px]">
                ${item.price}
              </h2>
            </div>
          </div>
          <div onClick={() => disptach(addCart(item))} className="btn">
            <Button className="font-[500] text-[12px] leading-[150%] text-[#2bbef9] py-[8px] px-[55px] rounded-[30px] border-[#2bbef9] border hover:bg-[#2bbef9] hover:text-white ">
              Add to cart1
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
