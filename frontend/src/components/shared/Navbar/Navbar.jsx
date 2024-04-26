import React from "react";
import  NavbarGroup  from "./NavbarGroup";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="flex-container-16-4">
      <p className="font-bold text-2xl">Global Events</p>
      <div className="flex gap-16 items-center justify-between" >
      <NavbarGroup />
      <ThemeSwitch  />
      <Button>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
