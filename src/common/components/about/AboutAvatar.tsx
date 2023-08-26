"use client";
import { motion } from "framer-motion";
import { fadeIn } from "src/variants";
import Avatar from "../avatar";

const AboutAvatar = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      className="absolute -left-[370px] bottom-0 hidden xl:flex"
    >
      <Avatar />
    </motion.div>
  );
};

export default AboutAvatar;
