import React from "react";
import { Link } from "react-router-dom";

export const RoutesNavigation = () => {
  return (
    <nav>
      <ul className="flex flex-col font-bold gap-4 ml-6 ">
        <Link to={"calendar"} className="font-mono  hover:underline">
          Calendar
        </Link>

        <Link to={"events"} className="font-mono  hover:underline">
          Reports
        </Link>
      </ul>
    </nav>
  );
};
