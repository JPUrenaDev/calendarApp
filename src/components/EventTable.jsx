import React from "react";
import { useContext } from "react";
import { contextApiModal } from "../context/contextApiModal";
import { RenderEvents } from "./RenderEvents";
import { Pagination } from "../ui/Pagination";
import { useSearchParams } from "react-router-dom";
const ITEMS_X_PAGE = 5;

export const EventTable = () => {
  const { eventDate } = useContext(contextApiModal);
  const [searchParams] = useSearchParams();
  const actualPage = searchParams.get("page");

  const TotalItems = Math.ceil(eventDate.length / ITEMS_X_PAGE);

  const lastElementPosition = ITEMS_X_PAGE * (!actualPage ? 1 : actualPage); //5 * 2 (10)

  const firstElementPosition = lastElementPosition - ITEMS_X_PAGE;
  0;

  console.log(firstElementPosition, lastElementPosition);
  const paginatedElement = eventDate.slice(
    firstElementPosition,
    lastElementPosition
  );

  console.log(eventDate);

  console.log(paginatedElement);
  return (
    <>
      <h1 className="text-[40px]">EVENTOS</h1>
      <div className="flex flex-col">
        <div className="mt-[180px] ml-[120px]">
          <div className="bg-gray-100 grid grid-cols-5 gap-6 w-[1300px] h-[40px] pb-3 pt-3">
            <div>Id</div>

            <div>Event Name</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Duration</div>

            {paginatedElement.map((value, index) => (
              <>
                <RenderEvents value={value} index={index} />
              </>
            ))}
            {TotalItems > 0 && <Pagination TotalItems={TotalItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
