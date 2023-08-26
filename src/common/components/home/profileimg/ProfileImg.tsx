import { motion } from "framer-motion";
import { fadeIn } from "src/variants";
import Avatar from "../../avatar";

const ProfileImg = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]"
    >
      <Avatar />
    </motion.div>
  );
};

export default ProfileImg;
