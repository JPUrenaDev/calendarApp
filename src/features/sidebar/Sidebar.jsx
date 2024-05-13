import React from "react";
import { Calendar } from "../../ui/Calendar";
import { RoutesNavigation } from "./RoutesNavigation";

export const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-[330px]">
      <h1 className="font-semibold text-xl mt-4 ml-3">Jean Calendar</h1>
      <div className="ml-2">
        <Calendar />
      </div>
      <RoutesNavigation />
    </div>
  );
};
