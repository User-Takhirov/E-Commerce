import Image from "next/image";

interface commentType {
  name: string;
  id: number;
  title: string;
  image: string | any;
  des: string;
  major: string;
}
export const CommentCard = ({
  title,
  image,
  name,
  des,
  major,
}: commentType) => {
  return (
    <>
      <div className="p-[29px] bg-[#fffbec]">
        <div className="mb-[40px] inline-block w-[210px]">
          <h3 className="font-[600] text-[14px] leading-[120%] text-[#202435] mb-[9px]">
            {title}
          </h3>
          <p className="font-[400] text-[13px] leading-[150%] text-[#71778e]">
            {des}
          </p>
        </div>
        <div className="flex items-center gap-[15px]">
          <div>
            <Image src={image} alt="#" quality={100} width={50} height={50} />
          </div>
          <div>
            <h3 className="font-[600] text-[14px] leading-[120%] text-[#202435] mb-[4px]">
              {name}
            </h3>
            <p className="font-[400] text-[12px] leading-[150%] text-[#202435]">
              {major}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
