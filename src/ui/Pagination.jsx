import { setSeconds } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
const itemsxPage = 4;

export const Pagination = ({ TotalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [actualPage, setActualPage] = useState(1);
  const [nextOrPrevius, setNextOrPrevius] = useState("");

  const startDate = dayjs("04/12/2024 12:00 AM");

  useEffect(() => {
    console.log(actualPage, TotalItems);
    if (nextOrPrevius == "next") {
      if (actualPage <= TotalItems) {
        setSearchParams({ page: actualPage });
      }

      // if (actualPage == TotalItems) {
      //   return;
      // }
    }
    if (nextOrPrevius == "previous") {
      setSearchParams({ page: actualPage });
    }
  }, [nextOrPrevius, actualPage, setSearchParams, TotalItems]);

  const previousButtom = () => {
    console.log(actualPage);
    setNextOrPrevius("previous");
    if (actualPage == 1) {
      setActualPage(1);
    } else {
      setActualPage((prevPage) => prevPage - 1);
    }
  };
  const nextButtom = () => {
    setNextOrPrevius("next");
    if (actualPage <= TotalItems && TotalItems >= 1) {
      console.log(12);
      setActualPage((prevValue) => prevValue + 1);
    }
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <div>
            <div
              onClick={previousButtom}
              className="flex items-center cursor-pointer justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </div>
          </div>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              onClick={nextButtom}
              className="flex items-center cursor-pointer justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
