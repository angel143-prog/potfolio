import { motion } from "framer-motion";
import { fadeIn } from "src/variants";

const ContactText = () => {
  return (
    <>
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="h2 mb-12 text-center"
      >
        Let's <span className="text-accent">connect.</span>
      </motion.h2>
    </>
  );
};

export default ContactText;
