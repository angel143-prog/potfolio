import { motion } from "framer-motion";
import { fadeIn } from "src/variants";
import AboutCountUp from "./AboutCountUp";

const AboutCounter = ({ aboutPersonalData }: any) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mx-0 xl:max-w-none"
    >
      <div className="flex flex-1 xl:gap-x-6">
        {aboutPersonalData.map((about: any) => (
          <AboutCountUp aboutdata={about} />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutCounter;
