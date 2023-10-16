"use client";
import React, { useState, forwardRef, FC, ReactNode } from "react";
import format from "date-fns/format";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ruLocale from "date-fns/locale/ru";
import Image from "next/image";
import { CustomButton } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import fetchDirections from "@/widgets/search-schedule/model";
import { Direction, searchDirections } from "@/helpers/searchDirections";
import Dropdown from "@/shared/ui/dropdown/ui";

interface ExampleCustomInputProps {
  value: string;
  onClick: () => void;
}

const ExampleCustomInput: FC<ExampleCustomInputProps> = forwardRef<
  HTMLButtonElement,
  ExampleCustomInputProps
>(({ value, onClick }, ref) => (
  <div className="bg-[#fff] py-[12px] w-[200px]">
    <p className="text-[#95A5BC] text-[12px] ml-8 mb-1">Дата отправления</p>
    <button className="flex" onClick={onClick} ref={ref}>
      <Image src="/note.svg" width="25" height="25" alt="" className="mr-2" />
      <span className="text-[14px]">{value}</span>
    </button>
  </div>
));

const SearchSelect = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromDirections, setFromDirections] = useState<Direction[]>([]);
  const [toDirections, setToDirections] = useState<Direction[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  registerLocale("ru", ruLocale);
  const { data: directionData } = useQuery({
    queryFn: fetchDirections,
  });

  const formatDate = (date: Date) => {
    const formattedDate = format(date, "d MMM", { locale: ruLocale });
    const dayOfWeek = format(date, "eee", { locale: ruLocale });
    return `${formattedDate}. ${dayOfWeek}`;
  };

  return (
    <div className="relative flex items-center my-10 justify-between px-5 bg-[#fff] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-h-[70px]">
      <div className="relative">
        <Image
          src="/location.svg"
          alt=""
          width="30"
          height="30"
          className="absolute top-[10px] left-[10px]"
        />
        {fromDirections.length !== 0 ? (
          <Dropdown
            content={fromDirections}
            setFrom={setFrom}
            setFromDirections={setFromDirections}
          />
        ) : null}
        <input
          type="text"
          placeholder="Откуда"
          className="w-full py-3 pl-10 pr-10 rounded-r-none border-r border-[#F5F5F5] rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px] "
          value={from}
          onChange={(e) => {
            setFromDirections(
              searchDirections(
                e.target.value,
                directionData.travel_directions,
                from
              )
            );
            setFrom(e.target.value);
          }}
        />
      </div>
      <div className="relative">
        <Image
          src="/location-tick.svg"
          width="30"
          height="30"
          alt=""
          className="absolute top-[10px] left-[5px]"
        />
        {toDirections.length !== 0 ? (
          <Dropdown
            content={toDirections}
            setFrom={setTo}
            setFromDirections={setToDirections}
          />
        ) : null}
        <input
          type="text"
          placeholder="Куда"
          className="w-full py-3 pl-10 pr-10 rounded-l-none rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px]"
          value={to}
          onChange={(e) => {
            setToDirections(
              searchDirections(
                e.target.value,
                directionData.travel_directions,
                from
              )
            );
            setTo(e.target.value);
          }}
        />
      </div>
      <div className="relative flex ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          // customInput={
          //   <ExampleCustomInput
          //     value={formatDate(startDate as Date)}
          //     onClick={() => {}}
          //   />
          // }
          locale={ruLocale}
          dateFormat="dd MMM eee"
          placeholderText="Выберите дату"
        />
      </div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          // customInput={
          //   <ExampleCustomInput
          //     value={formatDate(startDate as Date)}
          //     onClick={() => {}}
          //   />
          // }
          locale={ruLocale}
          dateFormat="dd MMM eee"
          placeholderText="Выберите дату"
        />
      </div>

      <div className="ml-10 py-2">
        <CustomButton
          title="Найти"
          containerStyles="bg-[#FFA723] text-white font-medium text-[15px] min-w-[194px]"
        />
      </div>

      {/* <ul className="absolute top-[100px] left-0 right-0 border border-gray-300 bg-white z-10 rounded-md shadow-md">
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Москва</li>
      </ul> */}
    </div>
  );
};

export default SearchSelect;
