import React from "react";
import { AllEventsCarousel } from "./AllEventsCarousel";
import AllEventsMiniNavbar from "./AllEventsMiniNavbar";
import AllEventsLatest from "./AllEventsLatest";
import  AllEventsBanner1  from "./AllEventsBanner1";
import { AllEventsCategoriesSections } from "./AllEventsCategoriesSections";

const AllEventsHome = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <AllEventsMiniNavbar />
      <div className="w-[98%] mx-auto">
        <AllEventsCarousel />
      </div>
      <AllEventsLatest/>
      <AllEventsBanner1/>
      <AllEventsCategoriesSections/>
    </div>
  );
};

export default AllEventsHome;
