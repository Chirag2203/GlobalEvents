import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../ui/hero-highlight";
import { Button } from "../../ui/button";

export function HeroHighlightPage() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        It is time to live your life, money can be refreshed {""}
        <Highlight className="text-black dark:text-white">
          life can't be.
        </Highlight>
        <div className="flex gap-4 justify-center items-center mt-8">
          <Button className="flex-standard-row-2 gradient-blue text-white rounded-full px-5">
            {" "}
            Get started 
          </Button>
          <Button className="flex-standard-row-2 border border-blue-500 bg-transparent hover:bg-transparent text-white rounded-full px-5">
            {" "}
            Know more
          </Button>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
