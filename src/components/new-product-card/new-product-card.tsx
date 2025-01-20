import Image from "next/image";
import { BestSellerTypes } from "../best-seller-cards";
export const NewProductCard = ({ title, image }: BestSellerTypes) => {
  return (
    <>
      <div>
        <div>
          <Image
            style={{ textAlign: "center" }}
            width={177}
            height={158}
            quality={100}
            priority
            src={image}
            alt="#"
          />
        </div>
        <h1>{title}</h1>
      </div>
    </>
  );
};
