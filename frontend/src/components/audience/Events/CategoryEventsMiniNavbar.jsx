import { Button } from "@/components/ui/button";
import {
  LucideSparkles,
} from "lucide-react";
import React from "react";

const CategoryEventsMiniNavbar = () => {
  return (
    <div className="flex-standard-row-2 justify-end px-2 py-1 bg-gray-100">
      <Button variant="outline" className=" h-7">
        Nearby
      </Button>
      <Button variant="outline" className=" h-7 ">
        Offers
      </Button>
      <Button
        variant="outline"
        className="h-7 gradient-blue text-white flex items-center gap-1  hover:text-white "
      >
        AI Help <LucideSparkles className="text-xs w-4" />
      </Button>
    </div>
  );
};

export default CategoryEventsMiniNavbar;
