import React from "react";
import { EventBanner } from "./EventBanner";
import { Button } from "@/components/ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import MoreEvents  from "./MoreEvents";
import { Link } from "react-router-dom";

const EventHome = () => {
  return (
    <div className="px-4 py-8">
      <EventBanner />
      <div className="bg-gray-900 px-4  mx-8 py-2">
        <div className="flex-standard-row justify-between">
          <div className="flex-standard-col-2 gap-p items-start">
            <p className="text-gradient-blue text-3xl font-bold py-1">
              Arjit Singh All Stars Tour, Bangalore
            </p>
            <p>Instrumental, All India, Vocals</p>
          </div>
          <Link to="/events/category/event/booking">
          <Button size={"lg"} className="text-lg gradient-red2 text-white">
            Book Now
          </Button>{" "}
            </Link>
        </div>
        <div className="flex items-start justify-between mt-4 ">
          <div className="flex flex-col items-start  gap-1">
            <p className="flex-standard-row-2">
              <FaLocationDot />
              Bangalore
            </p>
            <p className="flex-standard-row-2">
              <FaCalendarAlt />
              12th August 2022
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-200"> ₹499/- onwards</p>
          </div>
        </div>
      </div>
      <div className="flex-standard-row items-start m-8 gap-4">
        <div className="flex-standard-col-2 items-start w-1/2">
          <p className="section-heading">About the Event</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            convallis, odio nec ultricies ultricies, urna nunc luctus purus, vel
            fermentum nulla tellus vel ipsum. Donec nec quam nec nunc
            ullamcorper lacinia. Donec nec quam nec nunc ullamcorper lacinia.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            convallis, odio nec ultricies ultricies, urna nunc luctus purus, vel
            fermentum nulla tellus vel ipsum. Donec nec quam nec nunc
            ullamcorper lacinia. Donec nec quam nec nunc ullamcorper lacinia.
          </p>
        </div>
        <div className="flex-standard-col items-start w-1/2">
          <p className="section-heading">Key Highlights</p>
          <ul className="text-lg">
            <li>1. Live Performance</li>
            <li>2. Instrumental</li>
            <li>3. All India</li>
            <li>4. Vocals</li>
          </ul>
        </div>
      </div>
      <MoreEvents/>
    </div>
  );
};

export default EventHome;
