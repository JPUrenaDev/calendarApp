import { useState } from "react";

import "./App.css";
import { MyCalendar } from "./components/MyCalendar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./features/Layout/Root";
import { NotFound } from "./features/NotFound";
import { EventTable } from "./components/EventTable";
import { contextApiModal } from "./context/contextApiModal";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "calendar",
        element: <MyCalendar />,
      },
      {
        path: "events",
        element: <EventTable />,
      },
    ],
  },
]);
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [myEvents, setNewEvents] = useState([]);
  const [eventDate, setEventDate] = useState([]);
  const [addEvent, setAddEvent] = useState({});
  const [filterEvents, setFilterEvents] = useState([1]);
  const [title, setTitlte] = useState();
  const [miniCalendarDate, setMinicalendarDate] = useState("");
  const [selectEvent, setSelectEvent] = useState("");
  const [getCurrentMonth, setGetCurrentMonth] = useState(dayjs().month());
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
      <contextApiModal.Provider
        value={{
          openModal,
          setOpenModal,
          myEvents,
          setNewEvents,
          eventDate,
          setEventDate,
          addEvent,
          setAddEvent,
          filterEvents,
          setFilterEvents,
          title,
          setTitlte,
          miniCalendarDate,
          setMinicalendarDate,
          setSelectEvent,
          selectEvent,
          setGetCurrentMonth,
          getCurrentMonth,
        }}
      >
        <RouterProvider router={router} />
      </contextApiModal.Provider>
    </>
  );
}

export default App;
