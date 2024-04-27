import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

export function SpotlightSection() {
  return (
    <div className="min-h-screen w-full  flex-standard-col md:items-center md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-5"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className=" py-4 text-4xl md:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Your events deserve the <br /> Spotlight
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            We provide a platform for you to showcase your events to the world, get the attention they deserve and reach a wider audience.
        </p>
      </div>
        <div>
            <Button className=" flex-standard-row-2 gradient-blue text-white rounded-full p-6"> Lauch your Events
                <RocketIcon className="w-5 h-5 " />
            </Button>
        </div>
      <div>
      </div>
    </div>
  );
}
