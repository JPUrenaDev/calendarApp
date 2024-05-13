import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Calendar } from "../../ui/Calendar";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <>
      <div className="flex gap-[100px] ">
        <Sidebar />
        <div>
          <Outlet />{" "}
        </div>
      </div>
    </>
  );
};
