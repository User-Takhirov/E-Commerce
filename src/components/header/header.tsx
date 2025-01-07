import { SecureIcon } from "@/assets/img/secure-icon";
import Link from "next/link";
import React from "react";

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
      id: 1,
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
        <div className="h-[40px] grid items-center ">
          <div className="container">
            <div className="flex items-center justify-between">
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
                <h4 className="text-[12px] text-current ">
                  100% Secure delivery without contacting the courier
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
