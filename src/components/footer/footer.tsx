import React from "react";
import discountImage from "@/assets/img/discount.png";
import discountSM from "@/assets/img/discountSM.png";
import discountLG from "@/assets/img/disountLG.png";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <>
      <div>
        <div className="ads bg-[#233a95] pt-[40px] lg:pt-[70px] px-[15px] ">
          <div className="container">
            <div className="lg:flex justify-between ">
              <div className="">
                <h3 className="font-[300] text-[16px] leading-[120%] text-white mb-[8px]  ">
                  $20 discount for your first order
                </h3>
                <h2 className="font-[600] text-[26px] leading-[120%] text-white  mb-[15px]">
                  Join our newsletter and get...
                </h2>
                <p className="font-[400] text-[13px] leading-[185%] text-white mb-[30px] opacity-50">
                  Join our email subscription now to get updates <br /> on
                  promotions and coupons.
                </p>
                <div className="w-full relative mb-[40px] lg:w-[470px]">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="font-[400] text-[15px] leading-[150%] text-[#202435] bg-white  py-[13px] pl-[50px] pr-[41px]  rounded-[4px] border-[1px] border-[#e4e5ee] w-full"
                  />
                  <div>
                    <button className="bg-[#233a95] font-[500] text-[13px] leading-[150%] text-white py-[10px] px-[15px] rounded-[4px] top-[5px] right-[5px] absolute sm:w-[102px]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center flex justify-center">
                <Image
                  className="text-center sm:hidden"
                  src={discountImage}
                  alt="#"
                />
                <Image
                  className="text-center hidden sm:block lg:hidden"
                  src={discountSM}
                  alt="#"
                />
                <Image
                  className="text-center hidden lg:block"
                  src={discountLG}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top   ">
          <div className="container">
            <div className="hidden lg:flex justify-center items-center py-[20px] border-b">
              <div className="sm:w-[270px] pr-[15px] border-r">
                <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                  <Link
                    className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                    href={"#"}
                  >
                    Everyday fresh products
                  </Link>
                </h3>
              </div>
              <div className="sm:w-[270px] pr-[15px] border-r">
                <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                  <Link
                    className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                    href={"#"}
                  >
                    {" "}
                    Free delivery for order over $70
                  </Link>
                </h3>
              </div>

              <div className="sm:w-[270px] pr-[15px] border-r">
                <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                  <Link
                    className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                    href={"#"}
                  >
                    Daily Mega Discounts
                  </Link>
                </h3>
              </div>
              <div className="sm:w-[270px]">
                <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                  <Link
                    className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                    href={"#"}
                  >
                    Best price on the market
                  </Link>
                </h3>
              </div>
            </div>

              {/* <div className="container py-[20px] border-b"> */}
            <div className="sm:flex justify-between items-center lg:hidden py-[20px] border-b">
                <div className="1">
                  <div className="sm:w-[380px]">
                    <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                      <Link
                        className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                        href={"#"}
                      >
                        Everyday fresh products
                      </Link>
                    </h3>
                  </div>
                  <div className="sm:w-[380px]">
                    <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                      <Link
                        className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                        href={"#"}
                      >
                        {" "}
                        Free delivery for order over $70
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="2">
                  <div className="sm:w-[380px]">
                    <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                      <Link
                        className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                        href={"#"}
                      >
                        Daily Mega Discounts
                      </Link>
                    </h3>
                  </div>
                  <div className="sm:w-[380px]">
                    <h3 className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]">
                      <Link
                        className="font-[500]  text-[13px] leading-[150%] text-black py-[7px] pl-[33px]"
                        href={"#"}
                      >
                        Best price on the market
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
