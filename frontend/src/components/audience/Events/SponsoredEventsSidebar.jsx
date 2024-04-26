import React from "react";

const SponsoredEventsSidebar = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-2  p-2">
      <p className="text-white">Promoted Events</p>
      <div className="bg-white p-2 rounded-md">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="w-full rounded-md"
        />
        <p className="">Event Name</p>
      </div>
      <div className="bg-white p-2 rounded-md">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="w-full rounded-md"
        />
        <p className="">Event Name</p>
      </div>
    </div>
  );
};

export default SponsoredEventsSidebar;
