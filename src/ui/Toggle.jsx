import React from "react";

export const Toggle = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer w-2 h-3" />
      <div className="relative w-5 h-3 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[1px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-2 after:w-2 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">
        All day
      </span>
    </label>
  );
};
