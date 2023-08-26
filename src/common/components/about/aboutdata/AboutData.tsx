"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "src/variants";
import AboutDataTitle from "./AboutDataTitle";
import AboutInfo from "./AboutInfo";

const AboutData = ({ aboutdata }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      animate="show"
      className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
    >
      <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
        {aboutdata.map((item: any, itemIndex: any) => {
          return (
            <AboutDataTitle
              aboutdata={item}
              aboutIndex={itemIndex}
              toggleIndex={index}
              onClick={() => setIndex(itemIndex)}
            />
          );
        })}
      </div>
      <AboutInfo aboutdetails={aboutdata} aboutIndex={index} />
    </motion.div>
  );
};

export default AboutData;
