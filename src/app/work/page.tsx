"use client";
import Bulb from "@/components/bulb";
import Circles from "@/components/circles";
import { workSlides, workDetails } from "@/data/data";
import { WorkSlider, WorkText } from "@/components/work";

const page = () => {
  return (
    <div className="flex h-full items-center bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <WorkText workdata={workDetails} />
          {/* slider */}
          <WorkSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default page;
