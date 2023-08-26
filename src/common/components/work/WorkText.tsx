import { motion } from "framer-motion";
import { fadeIn } from "src/variants";

const WorkText = ({ workdata }: any) => {
  return (
    <>
      {workdata.map((work: any) => (
        <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 xl:mt-12"
          >
            {work.title} <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-4 max-w-[400px] lg:mx-0"
          >
            {work.desc}
          </motion.p>
        </div>
      ))}
    </>
  );
};

export default WorkText;
