import React from "react";
import CategoryEventsConsole from "./CategoryEventsConsole";
import { SparklesCore } from "@/components/ui/sparkles";
import EventCard from "@/components/shared/Cards/EventCard";

const CategoryEvents = () => {
  const eventsData = [
    {
      id: 1,
      title: "Event 1",
      date: "2021-09-20",
      location: "Lagos, Nigeria",
      image: "https://source.unsplash.com/400x300/?event",
      price: 2000,
      desc:"Description"
    },
    {
      id: 2,
      title: "Event 2",
      date: "2021-09-20",
      location: "Lagos, Nigeria",
      image: "https://source.unsplash.com/400x300/?event",
      price: 2000,
      desc:"Description"
    },
    {
      id: 3,
      title: "Event 3",
      date: "2021-09-20",
      location: "Lagos, Nigeria",
      image: "https://source.unsplash.com/400x300/?event",
      price: 2000,
      desc:"Description"
    },
    {
      id: 4,
      title: "Event 4",
      date: "2021-09-20",
      location: "Lagos, Nigeria",
      image: "https://source.unsplash.com/400x300/?event",
      price: 2000,
      desc:"Description"
    },
  ];
  return (
    <CategoryEventsConsole>
      <div className="min-h-screen ">
       <div className="p-8 flex flex-wrap gap-4">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
       </div>
        </div>
    </CategoryEventsConsole>
  );
};

export default CategoryEvents;
