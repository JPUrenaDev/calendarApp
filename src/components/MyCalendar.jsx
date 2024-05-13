import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback } from "react";
import { Modal } from "../features/modal/Modal";
import { contextApiModal } from "../context/contextApiModal";
import { useContext } from "react";

import { CalendarHeader } from "./CalendarHeader";
import { CalendarFilter } from "./CalendarFilter";
import { v4 as uuidv4 } from "uuid";
import { updatelocale } from "dayjs/plugin/updateLocale";

dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);
const DnDCalendar = withDragAndDrop(Calendar);

export const MyCalendar = (props) => {
  const {
    openModal,
    setOpenModal,
    eventDate,
    setAddEvent,
    //filterEvents,
    setSelectEvent,

    filterEvents,

    //miniCalendarDate,
  } = useContext(contextApiModal);

  const uuid = uuidv4();

  const onAddEvent = useCallback(
    (event) => {
      setOpenModal(!openModal);
      setAddEvent({
        start: dayjs(event.start).toDate(),
        end: dayjs(event.end).toDate(),
        id: uuid,
      });
    },
    [setOpenModal, openModal, setAddEvent, uuid]
  );

  const onSelectEvent = (e) => {
    console.log(e);
    setSelectEvent(e);
    setOpenModal(true);
  };

  console.log(dayjs);
  return (
    <>
      <CalendarHeader />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <CalendarFilter />
      <div
        className={openModal && "blur-sm"}
        style={{
          position: "relative",
          height: "70vh",
          width: "50vw",
          marginTop: "50px",
          // Fondo difuminado con opacidad
        }}
      >
        <DnDCalendar
          localizer={localizer}
          startAccessor="start"
          onNavigate={(e) => console.log(dayjs(e).format("month"))}
          endAccessor="end"
          events={filterEvents[0] == 1 ? eventDate : filterEvents}
          onSelectEvent={onSelectEvent}
          selectable={true}
          onSelectSlot={onAddEvent}
          resizable
          longPressThreshold={20}
          formats={{
            dayHeaderFormat: (date) => {
              return dayjs(date).format("DD/MM/YYYY");
            },
          }}
          //dayPropGetter={obtenerPropiedadesDelDia}
          defaultView="week"
          views={["day", "week", "month", "agenda"]}
        />
      </div>
      {openModal && <Modal />}
    </>
  );
};
