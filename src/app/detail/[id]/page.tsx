// import { DeliveryIcon } from "@/assets/icons/delivery-icon";
// import { DollarIcon } from "@/assets/icons/dollar-icon";
// import { LikeIcon } from "@/assets/icons/like-icon";
import { BannerDataType, HomeDetailType } from "@/app/page";
import { Button } from "@/components/ui/button";
import fetchWrapper from "@/config/fetch-wrapper";

import Image from "next/image";

async function getProduct(id: string): Promise<HomeDetailType | any> {
  const detail = await fetchWrapper<HomeDetailType | any>(`/product/${id}`, {
    next: { tags: ["products"] },
  });
  return detail;
}

const HomeDetail = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <div className="bg-[#F7F8FD] py-[50px]">
      <div className="container">
        <div className="bg-[#fff] rounded-sm py-[40px] px-[40px]">
          <h1 className="text-[24px] font-bold mb-[20px]">{product.title}</h1>
          <div className="flex justify-between items-center">
            <div>
              <Image
                width={436}
                height={392}
                priority
                style={{
                  width: "436px",
                  height: "392px",
                }}
                quality={100}
                src={product.image}
                alt={product.title}
                className="mb-[20px] object-cover"
              />
            </div>
            <div className="w-[308px]">
              <p className="text-[26px] font-semibold text-[#D51243] mb-[20px]">
                {product.price} SUM
              </p>
              <p className="mb-[20px]">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent
              </p>
              <div className="mb-[30px]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]">
                      −
                    </Button>
                    <span className="px-4 py-1 text-lg">1</span>
                    <Button className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]">
                      +
                    </Button>
                  </div>
                  <Button className="px-8 py-2 text-white bg-[#233A95] rounded-[30px] hover:bg-blue-800 transition-colors">
                    Add to cart
                  </Button>
                </div>
              </div>
              {/* <Button
                className="text-[#71778E] rounded-[30px]"
                variant={"outline"}
              >
                {" "} */}
              {/* <LikeIcon /> ADD TO WISHLIST */}
              {/* </Button> */}
            </div>
            <div className="w-[260px] p-[30px] rounded bg-[#F7F8FD]">
              <div className="flex items-center gap-4 mb-[30px]">
                {/* <DeliveryIcon /> */}
                <p className="text-[12px]">
                  Free Shipping apply to all orders over $100
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* <DollarIcon /> */}
                <p className="text-[12px]">
                  1 Day Returns if you change your mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
