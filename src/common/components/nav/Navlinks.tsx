"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navtooltip from "./Navtooltip";

const Navlinks = ({ navdatas }: any) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        navdatas.path === pathname && "text-accent"
      } group relative flex items-center transition-all duration-300 hover:text-accent`}
      href={navdatas.path}
      key={navdatas.id}
    >
      {/* tooltip */}
      <Navtooltip tooltip={navdatas} />
      {/* icon */}
      <div>{navdatas.icon}</div>
    </Link>
  );
};

export default Navlinks;
