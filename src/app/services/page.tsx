"use client";
import Bulb from "@/components/bulb";
import Circles from "@/components/circles";
import { serviceDetails } from "@/data/data";
import { ServiceText, ServiceSlider } from "@/components/services";

const page = () => {
  return (
    <div className="flex h-full items-center bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <ServiceText servicedata={serviceDetails} />
          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default page;
