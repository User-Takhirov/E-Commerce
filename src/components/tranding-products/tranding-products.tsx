import Image from "next/image";
import { BestSellerTypes } from "../best-seller-cards";

export const TrandingProducts = ({ title, image, price }: BestSellerTypes) => {
  return (
    <>
      <div className="flex items-center py-[15px] px-[15px] border-b  gap-[5px] ">
        <div>
          <Image src={image} alt="#" quality={100} width={70} height={63} />
        </div>
        <div className="flex flex-col w-[158px] ">
          <h3 className="font-[500] text-[13px] leading-[140%] text-[#202435] mb-[11px]">
            {title}
          </h3>
          <h4 className="font-[600] text-[16px] leading-[150%] text-[#d51243]">
            ${price}
          </h4>
        </div>
      </div>
    </>
  );
};
