import React from "react";
import { useState, useRef, useEffect } from "react";
import { contextApiModal } from "../../context/contextApiModal";
import { useContext } from "react";
import { BasicDateTimePicker } from "../../ui/BasicDateTimePicker";
import { IoMdCloseCircle } from "react-icons/io";
import dayjs from "dayjs";
export const Modal = () => {
  useEffect(() => {
    return () => {
      console.log("El componente se está desmontando...");
      // Coloca aquí cualquier código que desees ejecutar antes de que el componente se destruya
    };
  }, []);

  const modalRef = useRef();
  const { openModal, setOpenModal, setTitlte, setSelectEvent, selectEvent } =
    useContext(contextApiModal);

  const closeModal = () => {
    setOpenModal(false);
    setSelectEvent("");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.key === "Escape") {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setSelectEvent("");
          setOpenModal(false); // Llamar a la función onClose para cerrar el modal
        }
      }
    };

    document.addEventListener("keydown", handleClickOutside);
    setTitlte("");

    return () => {
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, [setOpenModal, setTitlte, setSelectEvent]);

  return (
    <>
      <div
        ref={modalRef}
        className={`${
          !openModal ? "hidden" : ""
        } fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-white  w-[1000px] h-[600px] ml-[500px] mt-[100px] flex-col gap-4 shadow-2xl `}
      >
        <button className="self-end mr-5  " onClick={closeModal}>
          <IoMdCloseCircle size={40} />
        </button>
        <BasicDateTimePicker />
      </div>
    </>
  );
};
