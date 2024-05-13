import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useContext } from "react";
import { contextApiModal } from "../context/contextApiModal";

export function Calendar() {
  const { miniCalendarDate, setMinicalendarDate, eventDate } =
    useContext(contextApiModal);

  const handleDateChange = (dates) => {
    // Maneja los cambios en las fechas seleccionadas
    setMinicalendarDate(dates.$d);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem className="font-mono" label="Controlled calendar">
          <DateCalendar
            selected={dayjs(new Date())}
            onChange={handleDateChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
