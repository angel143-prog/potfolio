import Image from "next/image";
import React from "react";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 z-10 w-[200px] opacity-50 mix-blend-color-dodge xl:w-[400px]">
      <Image
        src={"/assets/png/top-left-img.png"}
        alt="Left Image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
