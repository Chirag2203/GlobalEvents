import { Button } from "@/components/ui/button";
import { FlameIcon, LucideSparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
    {
        name: "Activites",
        path: "/events/category",
    },
    {
        name: "Concerts",
        path: "/events/category",
    },
    {
        name: "CharityEvents",
        path: "/events/category",
    },
    
];

const AllEventsMiniNavbar = () => {
  return (
    <div className="flex-standard-row-2 justify-between px-2 py-1 bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex-standard-row-2">
        {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
                <Button variant="outline" className=" h-7">
                    {item.name}
                </Button>
            </Link>
        ))}
        <Button
          variant="outline"
          className="h-7 gradient-red text-white hover:text-white flex items-center gap-1"
        >
          Top Events <FlameIcon className="text-xs w-4" />
        </Button>
      </div>
      <div className="flex-standard-row-2">
        <Button variant="outline" className=" h-7">
          Nearby
        </Button>
        <Button variant="outline" className=" h-7 ">
          Offers
        </Button>
        <Button
          variant="outline"
          className="h-7 gradient-blue text-white hover:text-white flex-standard-row gap-1"
        >
          AI Help <LucideSparkles className="text-xs w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AllEventsMiniNavbar;
