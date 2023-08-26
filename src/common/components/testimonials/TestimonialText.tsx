import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "src/variants";

const TestimonialText = () => {
  return (
    <>
      {/* title */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="h2 mb-8 xl:mb-0"
      >
        What clients <span className="text-accent">say.</span>
      </motion.h2>
    </>
  );
};

export default TestimonialText;
