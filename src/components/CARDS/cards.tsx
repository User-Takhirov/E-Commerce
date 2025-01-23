"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/reducers/product-reducer";
import Link from "next/link";
export interface BestSellerTypes {
  title?: string | undefined;
  image: string | undefined | any;
  id: number | string;
  key?: number | string;
  price?: number | any;
}

export const Cards = ({ item }: BestSellerTypes | any) => {
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    const randomRating = Math.random() * 4 + 1;
    setRatingValue(Math.round(randomRating));
  }, []);

  const disptach = useDispatch();

  return (
    <>
      <div className="box relative w-full m-0 p-0 border-l border-r cursor-pointer">
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
        <div className="content h-[196px] px-[20px] pb-[20px] flex flex-col justify-between">
          <div className="others">
            <Link key={item.id} href={`/detail/${item.id}`}>
              <h1 className="font-[500] w-[177px] text-[14px] leading-[140%] text-[#202435] mb-[8px]">
                {item.title}
              </h1>
            </Link>
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
          <div className="btn-container absolute bottom-4 left-0 w-full opacity-0 transition-opacity duration-300 flex justify-center">
            <button
              onClick={() => disptach(addCart(item))}
              className="font-[500] text-[12px] leading-[150%] text-white bg-[#233a95] py-[8px] px-[55px] rounded-[30px] border-[#233a95]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
