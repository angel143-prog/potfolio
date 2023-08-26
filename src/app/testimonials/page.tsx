"use client";
import { TestimonialSlider, TestimonialText } from "@/components/testimonials";
import { motion } from "framer-motion";
import { fadeIn } from "src/variants";

const page = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto flex h-full flex-col justify-center">
        {/* title */}
        <TestimonialText />
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
