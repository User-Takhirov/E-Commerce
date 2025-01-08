import React from "react";

export const Banner = ({ title, image }) => {
  return (
    <>
      <div>{title}</div>
      <img src={image} alt="#" />
    </>
  );
};
