import React from "react";
import { ResponceTodoT } from "@/app/page";

import Image from "next/image";
export const Banner: React.FC<ResponceTodoT> = ({ image }) => {
  return (
    <>
      <Image
        style={{
          width: "870px",
          height: "460px",
        }}
        width={870}
        height={460}
        quality={100}
        priority
        src={image}
        alt="#"
      />
    </>
  );
};
