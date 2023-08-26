"use client";
import { aboutPersonalData, aboutPersonalDetails } from "@/data/data";
import { motion } from "framer-motion";
import { fadeIn } from "src/variants";
import AboutCounter from "./AboutCounter";

const AboutText = () => {
  return (
    <>
      {/* text */}
      <div className="flex flex-1 flex-col justify-center">
        {aboutPersonalDetails.map((item, itemIndex) => (
          <>
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              className="h2"
              key={itemIndex}
            >
              {item.abouttitle}{" "}
              <span className="text-accent">{item.abouttitleone}</span>
              {item.abouttitletwo}
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
            >
              {item.aboutdesc}
            </motion.p>
          </>
        ))}

        {/* counters */}
        <AboutCounter aboutPersonalData={aboutPersonalData} />
      </div>
    </>
  );
};

export default AboutText;
