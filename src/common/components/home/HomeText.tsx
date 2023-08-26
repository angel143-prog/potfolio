import React from "react";
import HomeTitle from "./HomeTitle";

const HomeText = ({ homedata }: any) => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
        {homedata.map((home: any) => (
          <HomeTitle homedatas={home} />
        ))}
      </div>
    </div>
  );
};

export default HomeText;
