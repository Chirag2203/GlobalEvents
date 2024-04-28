import { LocateFixedIcon, LocateIcon, PinIcon } from "lucide-react";
import React from "react";

const SponsoredEventsSidebar = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen flex flex-col gap-2  p-4">
      <p className="text-blue-400 font-medium">Promoted Events</p>
      <div className="bg-white p-2 rounded-md">
        <div className="flex gap-2 items-center">
         <img src="https://source.unsplash.com/400x300/?event" alt="" className="w-16 h-16 rounded-lg"/>
          <div className="flex-standard-col gap-0 justify-start items-start">
            <p className="font-medium text-black dark:text-gray-900">Event Name</p>
            <p className="text-sm text-gray-600 flex-standard-row-2 mt-1"> Dubai</p>
            <p className="text-sm text-gray-600 flex-standard-row-2 "> 22/07/2003</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredEventsSidebar;
