import React, { useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useContext } from "react";
import { contextApiModal } from "../context/contextApiModal";
export const CalendarFilter = () => {
  const { eventDate, setFilterEvents, filterEvents } =
    useContext(contextApiModal);

  const eventosFiltrados = (e) => {
    setFilterEvents(
      eventDate.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  console.log(filterEvents[0]);

  return (
    <div className="relative">
      <FaMagnifyingGlass size={20} className="absolute top-[4px] left-1" />
      <input
        onChange={eventosFiltrados}
        className="h-[30px] border-2 border-red-500 outline outline-offset-2 outline-1  pl-6"
      ></input>
    </div>
  );
};
