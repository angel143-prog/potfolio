"use client";
import Projectsbtn from "@/components/projectsbtn";
import { motion } from "framer-motion";

// variants
import { fadeIn } from "src/variants";

const HomeTitle = ({ homedatas }: any) => {
  return (
    <>
      {/* title */}
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="h1"
      >
        {homedatas.title1} <br /> {homedatas.title2}{" "}
        <span className="text-accent">{homedatas.title3}</span>
      </motion.h1>
      {/* subtitle */}
      <motion.p
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
      >
        {homedatas.subtitle}
      </motion.p>
      {/* button */}
      <div className="flex justify-center xl:hidden">
        <Projectsbtn />
      </div>
      {/* exit="hidden" */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        className="hidden xl:flex"
      >
        <Projectsbtn />
      </motion.div>
    </>
  );
};

export default HomeTitle;
