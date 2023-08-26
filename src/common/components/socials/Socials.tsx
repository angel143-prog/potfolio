import { socialData } from "@/data/data";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social) => {
        return (
          <Link
            key={social.id}
            href={social.link}
            className=" transition-all duration-300 hover:text-accent"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
