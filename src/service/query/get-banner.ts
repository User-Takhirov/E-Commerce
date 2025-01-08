"use server";

const url = process.env.URL;

export const getBanner = async () => {
  const res = await fetch(`${url}/banner`, { next: { tags: ["banners"] } });
  if (!res.ok) {
    throw new Error("error");
  }
  const data = await res.json();

  return data;
};
