import React from "react";
import { useContext } from "react";
import { contextApiModal } from "../context/contextApiModal";
import dayjs from "dayjs";
const Month = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
export const CalendarHeader = () => {
  const { openModal, setOpenModal, eventDate, getCurrentMonth } =
    useContext(contextApiModal);
  return (
    <div className="flex justify-between mt-6">
      <label className="font-bold font-mono text-[40px] flex items-center gap-3 ">
        {Month[getCurrentMonth]}{" "}
        <span className="text-[20px] font-mono ">
          {eventDate.length} Appoiment
        </span>
      </label>

      <button
        onClick={() => setOpenModal(true)}
        className="font-mono  bg-black text-white w-[130px]"
      >
        Add New
      </button>
    </div>
  );
};
