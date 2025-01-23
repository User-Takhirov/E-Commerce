import React from "react";
import { BestSellerTypes } from "../best-seller-cards";
import Image from "next/image";
export const CategoryCard = ({ title, image }: BestSellerTypes) => {
  return (
    <>
      <div className="w-[233px] h-[145px] border text-center mx-auto py-[40px]  px-[20px] flex items-center">
        <Image
          src={image}
          quality={100}
          width={70}
          height={70}
          alt="#"
          className="mx-auto"
        />
        <div className="w-[100px] text-start mb-[8px]">
          <h3 className="font-[600] text-[14px] leading-[120%] text-[#202435]">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};
