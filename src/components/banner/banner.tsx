import React from "react";
import { ResponceTodoT } from "@/app/page";

import Image from "next/image";
export const Banner: React.FC<ResponceTodoT> = ({ title, image }) => {
  return (
    <>
      <Image
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
