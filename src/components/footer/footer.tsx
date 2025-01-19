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
        <div className="bg-[#F7F8FD] ">
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
            </div>
          </div>
          <div className="urls">
            <div className="container">
              <nav className="lg:flex  py-[100px] lg:justify-between block">
                <div className="1 mb-[30px]">
                  <h3>
                    <Link
                      className="font-[600] text-[16px] leading-[120%] uppercase text-[#202435] mb-[20px] "
                      href={"#"}
                    >
                      FRUIT & VEGETABLES
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Fresh Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Herbs & Seasonings
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Fresh Fruits
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Cuts & Sprouts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Exotic Fruits & Veggies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Packaged Produce
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e]  "
                        href={"#"}
                      >
                        Party Trays
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="2 mb-[30px]">
                  <h3>
                    <Link
                      className="font-[600] text-[16px] leading-[120%] uppercase text-[#202435] mb-[20px] "
                      href={"#"}
                    >
                      Breakfast & Dairy
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Milk & Flavoured Milk
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Butter and Margarine
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Cheese
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Eggs Substitutes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Honey
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Marmalades
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Yogurt
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="3 mb-[30px]">
                  <h3>
                    <Link
                      className="font-[600] text-[16px] leading-[120%] uppercase text-[#202435] mb-[20px] "
                      href={"#"}
                    >
                      Meat & Seafood
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Breakfast Sausage
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Dinner Sausagee
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Beef
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Chicken
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Sliced Deli Meat
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Shrimp
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Crab and Shellfish
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Farm Raised Fillets
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="4 mb-[30px]">
                  <h3>
                    <Link
                      className="font-[600] text-[16px] leading-[120%] uppercase text-[#202435] mb-[20px] "
                      href={"#"}
                    >
                      Beverages
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Water
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Sparkling Water
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Soda & Pop
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Coffee
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Milk & Plant-Based Milk
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Tea & Kombucha
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Drink Boxes & Pouches
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Craft Beer
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="5 mb-[30px]">
                  <h3>
                    <Link
                      className="font-[600] text-[16px] leading-[120%] uppercase text-[#202435] mb-[20px] "
                      href={"#"}
                    >
                      Breads & Bakery
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Milk & Flavoured Milk
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Butter and Margarine
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Cheese
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Eggs Substitutes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Honey
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Marmalades
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Sour Cream and Dips
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-[400] text-[13px] leading-[150%] text-[#71778e] mb-[8px] "
                        href={"#"}
                      >
                        Yogurt
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="hello-block container">
          <div>hello 1</div>
          <div>hello2</div>
        </div>
      </div>
    </>
  );
};
