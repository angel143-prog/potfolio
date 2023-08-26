"use client";
import Transition from "@/components/transition";
import Header from "./header";
import Nav from "./nav";
import Topleftimg from "./topleftimg";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const route = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={route} className="h-full">
          <Transition />
          <Topleftimg />
          <Nav />
          <Header />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
