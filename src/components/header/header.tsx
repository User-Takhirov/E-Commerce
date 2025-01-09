import { SecureIcon } from "@/assets/img/secure-icon";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, SheetIcon } from "lucide-react";
import { CartIcon } from "@/assets/img/cart-icon";
import { CartEmptyIcon } from "@/assets/img/cart-empty-icon";
import { ProfilePic } from "@/assets/img/profile-pic";

export const Header = () => {
  const pages = [
    {
      id: 1,
      title: "About Us",
      path: "about-us",
    },
    {
      id: 2,
      title: "My Account",
      path: "my-account",
    },
    {
      id: 3,
      title: "Wishlist",
      path: "wishlist",
    },
    {
      id: 4,
      title: "Order Tracking",
      path: "order-tracking",
    },
  ];
  return (
    <>
      <div>
        <div className=" bg-[#233a95] w-[100%]">
          <div className="container">
            <h3 className="text-[12px] text-center py-[9px]  text-white ">
              Due to the <strong className="font-bold"> COVID 19</strong>
              epidemic, orders may be processed with a slight delay
            </h3>
          </div>
        </div>
        <div className="h-[40px] lg:grid items-center border-b hidden ">
          <div className="container">
            <div className="lg:flex items-center justify-between  ">
              <ul className="flex items-center gap-[15px]">
                {pages?.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="text-[12px] text-current hover:text-[#2bbef9] "
                      key={item.id}
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center">
                <SecureIcon />
                <h4 className="text-[12px] text-current pr-[20px] border-r ">
                  100% Secure delivery without contacting the courier
                </h4>
                <h4 className="font-[400] leading-[150%] text-[12px] text-current ml-[20px]">
                  <Link href={"#"} className="mr-[5px]">
                    Need help?
                  </Link>
                  <Link href={"tel:+0020500"}>
                    Call Us:
                    <span className="font-[700] text-[#2bbef9]">
                      + 0020 500
                    </span>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[17px]">
          <div className="container">
            <div className="flex items-center justify-between gap-[30px]">
              <div className="w-[164px] sm:hidden hidden lg:block">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                  alt="#"
                />
                <span className="block text-[11px] opacity-50 mt-[2px]">
                  Online Grocery Shopping Center
                </span>
              </div>
              <div className="lg:hidden sm:hidden">
                <Sheet>
                  <SheetTrigger className="w-[42px] h-[42px] flex justify-center items-center">
                    <MenuIcon />
                  </SheetTrigger>
                  <SheetContent side={"left"} className="w-[100%]">
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>hello</SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div className=" w-[93px] h-[22px] lg:hidden flex-nowrap ">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png"
                  alt="#"
                />
              </div>
              <div className="lg:w-[50%]  mx-auto text-center  sm:w-[70%] sm:block hidden  ">
                <div>
                  <input
                    type="text"
                    className="bg-[#f3f4f7] py-[19px] px-[30px] leading-[150%] font-[400] text-[15px] rounded-[7px] w-[100%] "
                    placeholder="Search for products..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-[15px] ">
                <div className="w-[42px] h-[42px] border border-[#e1e4ea] border-2px rounded-[50%] sm:flex justify-center items-center  hidden">
                  <div className="cursor-pointer">
                    <ProfilePic />
                  </div>
                </div>
                <div>
                  <h3>Price $0.00</h3>
                </div>
                <div className="bg-[#FFF1EE] p-[10px] rounded-[50%] w-[42px] h-[42px] flex justify-center items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="cursor-pointer">
                        <CartIcon />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 mt-[20px] ml-[-315px]">
                      {"0" === "0" ? (
                        <div className="text-center">
                          <div className="bg-[#DCDEE1] overflow-hidden w-[60px] h-[60px]  text-center mx-auto rounded-[50%]  items-end inline-flex  justify-center  mb-[15px]">
                            <CartEmptyIcon />
                          </div>
                          <h2 className="font-[500] text-[13px] mb-[50px]">
                            No products in the cart.
                          </h2>
                          <div className="text-center pt-[20px] border-t-[1px] border-[#edeef5] text-[12px]">
                            We reduce shipping prices to only 2.49 €!
                          </div>
                        </div>
                      ) : (
                        <h1>hello</h1>
                      )}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[20px] border-b mb-[20px]">
          <div className="container">
            <Popover>
              <PopoverTrigger asChild>
                <div className="relative">
                  <button className="bg-[#2bbef9] py-[14px] pl-[48px] pr-[64px] rounded-[50px] font-[600] text-[15px] leading-[150%] text-white ">
                    ALL CATEGORIES
                  </button>
                  <span className="block text-[10px] uppercase text-[#71778e] font-[600] py-[2px] px-[9px]  border-[1px] rounded-[18px]  bg-[#edeef5] w-[121px] absolute top-[40px] left-[38px]">
                    TOTAL 63 PRODUCTS
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[270px]  mt-[15px]" align="start">
                hello world
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
