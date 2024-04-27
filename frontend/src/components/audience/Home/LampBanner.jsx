import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import TestimonyCards from "./TestimonyCards";

export function LampBanner() {
  return (
    <div className="flex-standard-col bg-slate-950 ">
      {" "}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8  py-4 text-gradient-steel text-center text-4xl font-medium tracking-tight  md:text-7xl"
        >
          One right event <br /> can bring light to your life
        </motion.h1>
      </LampContainer>
      <TestimonyCards />
    </div>
  );
}
