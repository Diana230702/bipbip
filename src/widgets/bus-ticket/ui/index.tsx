import { DirectionInfo } from "@/entities";
import { CustomButton } from "@/shared";
import { BusTicketBottom } from "@/widgets";
import Image from "next/image";
import { useState } from "react";
import { formatDayOfMonth, formatHours } from "@/helpers/formatDate";
import { formatDuration } from "@/helpers/formatDuration";
import Link from "next/link";
import { updateLocalStorage } from "@/helpers/updateLocalStorage";

const BusTicket = ({ trip }: { trip: Trip }) => {
  const [showBottom, setShowBottom] = useState(false);

  const toggleBottom = () => {
    setShowBottom((prevShowBottom) => !prevShowBottom);
  };

  return (
    <div className="bg-[#fff] rounded-[6px] pt-[30px] overflow-hidden mb-3">
      <div className="flex items-start justify-between pl-8">
        <div className="">
          <div className="flex items-baseline">
            <DirectionInfo
              departure={trip.Departure.Name}
              arrival={trip.Destination.Name}
              timeOfDeparture={formatHours(trip.DepartureTime)}
              timeOfArrival={formatHours(trip.ArrivalTime)}
              timeInWay={formatDuration(Number(trip.Duration))}
            />
            <p className="text-[10px] text-[#FF5959]">
              {formatDayOfMonth(trip.ArrivalTime)}
            </p>
          </div>

          <div className="flex items-center mt-[55px]">
            <div
              className="flex mr-[30px] cursor-pointer"
              onClick={toggleBottom}
            >
              <p className="text-[#3573F0] text-[12px]">Подробнее о рейсе</p>
              <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#FCFCFC] w-[296px] relative ">
          <div className="absolute mt-[-55px]">
            <Image
              src="/line-direction.png"
              width={1}
              height={100}
              alt=""
              className="mr-[1px]"
            />
          </div>
          <div className="flex">
            <div className="px-[23px] pb-5">
              <div className="flex items-center mb-[20px]">
                <Image
                  src="/bus-gray.svg"
                  width="25"
                  height="25"
                  alt=""
                  className="w-6"
                />
                <p className="mx-2 font-semibold text-[14px]">
                  {trip.CarrierData.CarrierName}
                </p>
              </div>
              <div className="bg-[#F5F6F8] rounded-[6px] width-[135px]">
                <p className="mx-2 items-center text-[#676767] text-[12px]">
                  Свободно:
                  <span className="text-[#95A4BC]">
                    {trip.FreeSeatsAmount} мест
                  </span>
                </p>
              </div>
              <span className="mx-2 block text-[24px] mt-[35px] font-semibold">
                {trip.PassengerFareCost} <span className="font-li"></span>
              </span>
              <Link href={`/direction-bus/${trip.Id}`}>
                <CustomButton
                  title="Выбрать билет"
                  containerStyles="text-white px-8 direction-gardient text-[12px] justify-center h-[40px] mt-[20px]"
                  onClick={() => updateLocalStorage(trip)}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showBottom && <BusTicketBottom trip={trip} />}
    </div>
  );
};

export default BusTicket;
