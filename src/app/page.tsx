"use client";
import Particlescontainer from "@/components/particlescontainer";
import { ProfileImg, HomeText, BgImg } from "@/components/home";
import { homeData } from "@/data/data";

const page = () => {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <HomeText homedata={homeData} />
      {/* image */}
      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        {/* bg img */}
        <BgImg />
        {/* particles */}
        <Particlescontainer />
        {/* avatar img */}
        <ProfileImg />
      </div>
    </div>
  );
};

export default page;
