import { useState } from "react";
import { DirectionCount } from "@/shared";
import Image from "next/image";
import {
  formatDate,
  formatDayOfMonth,
  formatHours,
} from "@/helpers/formatDate";
import { LocalStorageTrip } from "@/widgets/bus-ticket/ui";

const MoreTicket = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  let dataForTrip;
  let dataForSeats;
  if (typeof window !== "undefined" && window.localStorage) {
    dataForTrip = localStorage.getItem("dataForBuyTicket");
    dataForSeats = localStorage.getItem("dataForSeats");
  }
  const storedDataForTrip = JSON.parse(dataForTrip ?? "null");
  const storedDataForSeats: LocalStorageTrip = JSON.parse(
    dataForSeats ?? "null",
  );

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className="mt-[40px] bg-[#fff] py-[15px] px-[25px] rounded-[10px] relative">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleDetails}
      >
        <div>
          <p className="text-[14px]">
            {storedDataForTrip.from.locality} - {storedDataForTrip.to.locality}
          </p>
          <p className="text-[#95A4BC] text-[12px]">
            {formatDate(storedDataForTrip.startDate)}, 1 пассажир,{" "}
            {storedDataForSeats.price} ₽
          </p>
        </div>
        <div>
          <Image
            src="/arrow-right-ticket.svg"
            width="20"
            height="20"
            className="cursor-pointer"
            alt="arrow-right"
          />
        </div>
      </div>

      {isDetailsOpen && (
        <div className="flex items-baseline justify-between absolute py-[15px] px-[25px] bg-[#fff] w-full left-0 z-10 rounded-b-[10px]">
          <div>
            <span className="text-[12px] block mt-[30px]  mb-[10px]">
              {formatHours(storedDataForSeats.departureTime)},{" "}
              {formatDayOfMonth(storedDataForSeats.departureTime)}
            </span>
            <p className="text-[#676767] text-[12px] mb-[18px]">
              {storedDataForSeats.departureName}
            </p>

            <span className="text-[12px] text-[#676767] block mb-[10px]">
              {formatHours(storedDataForSeats.arrivalTime)},{" "}
              {formatDayOfMonth(storedDataForSeats.arrivalTime)}
            </span>
            <p className="text-[#676767] text-[12px]">
              {storedDataForSeats.destinationName}
            </p>
          </div>
          <div>
            <div className="flex mb-[8px]">
              <DirectionCount icon="/car-white.svg" count="8,7" />
              <Image
                src="/wifi-off.svg"
                width="20"
                height="20"
                className="mx-[16px]"
                alt="wifi-off"
              />
              <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
            </div>
            <p className="text-[12px]">{storedDataForSeats.carrier}</p>
            <p className="text-[#676767] text-[12px]">Перевозчик</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreTicket;
