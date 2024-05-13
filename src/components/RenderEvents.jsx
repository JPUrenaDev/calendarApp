import React from "react";
import dayjs from "dayjs";

export const RenderEvents = ({ value, index }) => {
  return (
    <>
      <div>{value?.id}</div>
      <div>{value?.title}</div>
      <div>{dayjs(value?.start).format()}</div>
      <div>{dayjs(value?.end).format()}</div>
      <div>{dayjs(value?.end).diff(dayjs(value?.start), "day")} DAYS</div>
    </>
  );
};
