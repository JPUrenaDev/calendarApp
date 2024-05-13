import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useContext } from "react";
import { contextApiModal } from "../context/contextApiModal";
import toast from "react-hot-toast";

import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import { add } from "date-fns";
import { v4 as uuidv4 } from "uuid";

dayjs.locale("es");

export function BasicDateTimePicker() {
  const {
    eventDate,
    setEventDate,
    addEvent,

    setOpenModal,
    setSelectEvent,
    selectEvent,
  } = useContext(contextApiModal);

  const uuid = uuidv4();

  const [title, setTitlte] = useState("");
  const [changeDate, setChangeDate] = useState({});

  console.log(selectEvent);

  const onChangeDate = (o) => {
    const name = o.target.name;
    setChangeDate((e) => {
      return {
        start:
          name == "start" && dayjs(o.target.value).format("YYYY-MM-DDTHH:mm"),

        end: name == "end" && dayjs(o.target.value).format("YYYY-MM-DDTHH:mm"),
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const startDate = dayjs(e.target[0].value).toDate();
    const endDate = dayjs(e.target[1].value).toDate();
    const title = e.target[2].value;

    //EDITTING
    if (selectEvent.id) {
      const arrayCopy = [...eventDate];
      const indexItemSelected = arrayCopy.findIndex(
        (item) => item.id == selectEvent.id
      );

      arrayCopy[indexItemSelected] = {
        ...arrayCopy[indexItemSelected],
        start: startDate,
        end: endDate,
        title: title,
      };

      // const prueba = eventDate.filter((value) => value.id !== selectEvent.id);

      setEventDate(arrayCopy);
      toast.success("Evento actualizado");
    } else {
      //ADDING
      setEventDate([
        ...eventDate,
        {
          id: !selectEvent.id
            ? addEvent.id
            : !selectEvent.id
            ? uuid
            : selectEvent.id,
          start: startDate,
          end: endDate,
          title: title ? title : addEvent.title,
        },
      ]);
      toast.success("Evento agregado");
    }

    setSelectEvent("");
    setOpenModal(false);
  };

  const onDelete = () => {
    const filteredEvents = eventDate.filter(
      (value) => value.id !== selectEvent.id
    );
    setEventDate(filteredEvents);
  };

  return (
    <form onSubmit={onSubmit} onChange={(e) => console.log(e)}>
      <div className="flex gap-[40px] flex-col ">
        <div className="flex flex-col  gap-2">
          <label className="font-mono tracking-wide text-[30px]">
            Start date
          </label>
          <input
            className="bg-slate-100 h-[40px]"
            type="datetime-local"
            value={
              selectEvent.id && !changeDate.start
                ? dayjs(selectEvent.start).format("YYYY-MM-DDTHH:mm:ss")
                : !changeDate.start
                ? dayjs(addEvent.start).format("YYYY-MM-DDTHH:mm:ss")
                : dayjs(changeDate.start).format("YYYY-MM-DDTHH:mm:ss")
            }
            // defaultValue={dayjs("2024-01-01 ").format("YYYY-MM-DDTHH:mm")}
            onChange={onChangeDate}
            name="start"
          ></input>
        </div>
        <div className="flex  flex-col  gap-2">
          <label className="font-mono tracking-wide text-[30px]">
            End Date
          </label>
          <input
            value={
              selectEvent.id && !changeDate.end
                ? dayjs(selectEvent.end).format("YYYY-MM-DDTHH:mm:ss")
                : !changeDate.end
                ? dayjs(addEvent.end).format("YYYY-MM-DDTHH:mm:ss")
                : dayjs(changeDate.end).format("YYYY-MM-DDTHH:mm:ss")
            }
            className="bg-slate-100 h-[40px]"
            type="datetime-local" //</div>value={startAndEndDate.end}
            onChange={onChangeDate}
            name="end"
          ></input>
        </div>
      </div>

      <div className="flex flex-col mt-[50px]">
        <label className="text-[30px] font-mono tracking-wide ">Titulo:</label>
        <input
          placeholder="Titulo:"
          name="title"
          className="w-[700px] px-3 border-2 border-rose-600 bg-slate-100 h-[40px]"
          onChange={(e) => setTitlte(e.target.value)}
          value={!title ? selectEvent.title : title}
        ></input>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-8 flex  font-mono tracking-wide  "
        >
          {selectEvent ? "Actualizar Evento" : "Crear Evento"}
        </button>
        {selectEvent && (
          <button
            onClick={onDelete}
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-8 flex  font-mono tracking-wide  "
          >
            Delete Event
          </button>
        )}
      </div>
    </form>
  );
}
