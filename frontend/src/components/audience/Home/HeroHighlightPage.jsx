import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../ui/hero-highlight";
import { Button } from "../../ui/button";
import { MeteorsCard } from "@/components/shared/Cards/Meteors";
import { fadiInVariants } from "@/lib/framer-motion";

export function HeroHighlightPage() {
  const data1 = [
    {
      title: "Get Started",
      desc: "Get started with our services and make your money work for you.",
      link: "/get-started",
    },
    {
      title: "Know More",
      desc: "Get to know more about our services and how we can help you.",
      link: "/know-more",
    },
  ];
  const data2 = [
    {
      title: "Get Started",
      desc: "Get started with our services and make your money work for you.",
      link: "/get-started",
    },
    {
      title: "Know More",
      desc: "Get to know more about our services and how we can help you.",
      link: "/know-more",
    },
  ];
  return (
    <HeroHighlight>
      <motion.h1
         variants={fadiInVariants}
         initial="hidden"
         whileInView="visible"
         transition={{ duration: 1, delay: 0.2 }}
         viewport={{ once: true }}
        className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-gradient-steel  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
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
      <div className="flex flex-col  gap-12 mx-auto mt-12   alig">
        <motion.div
          variants={fadiInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          className="flex  justify-between w-full"
        >
          {data1.map((item, index) => (
            <MeteorsCard
              key={index}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </motion.div>
        <motion.div
          variants={fadiInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          className="flex gap-12 justify-center w-full"
        >
          {data2.map((item, index) => (
            <MeteorsCard
              key={index}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
