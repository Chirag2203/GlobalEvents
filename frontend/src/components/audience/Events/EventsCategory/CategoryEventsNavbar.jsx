import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { addDays, format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Columns2Icon,
  Grid,
  Rows2Icon,
  SearchIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import CategoryEventsMiniNavbar from "./CategoryEventsMiniNavbar";

const AllEventsNavbar = () => {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <div className="flex flex-col ">
      <CategoryEventsMiniNavbar />
      <div className="bg-gray-200 dark:bg-gray-900 w-full p-4 flex-standard-row-2">
        <div className="flex items-start  gap-2 w-full">
          <div className="w-1/6">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">0-500</SelectItem>
                <SelectItem value="system">500-1000</SelectItem>
                <SelectItem value="system">1000-2000</SelectItem>
                <SelectItem value="system">Above 2000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/6">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className=" flex items-center pl-12 w-1/3">
            <Input type="text" className="w-full" placeholder="Search...." />
            <SearchIcon className="h-full -ml-10" />
          </div>
        </div>
        <div className="flex-standard-row-2">
          {/* <p className="text-white uppercase text-xs">View Mode</p> */}
          <div className="text-white flex gap-2">
            <p>
              <Grid />
            </p>
            <Switch />
            <p>
              <Rows2Icon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventsNavbar;
