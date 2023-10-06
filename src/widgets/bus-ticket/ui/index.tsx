import { DirectionInfo } from "@/entities";
import { DirectionCount, DirectionUser, CustomButton } from "@/shared";
import { BusTicketBottom } from "@/widgets";
import Image from "next/image";
import { FC, useState } from "react";

const BusTicket: FC = () => {
  const [showBottom, setShowBottom] = useState(false);

  const toggleBottom = () => {
    setShowBottom((prevShowBottom) => !prevShowBottom);
  };

  return (
    <div className="bg-[#fff] rounded-[6px] pt-[30px] overflow-hidden">
      <div className="flex items-start justify-between pl-8">
        <div className="">
          <div className="flex items-baseline">
            <DirectionInfo
              departure="Казанский вокзал, Казань"
              arrival="Автовокзал, Нижнекамск"
              timeOfDeparture="01:50"
              timeOfArrival="09:00"
            />
            <p className="text-[10px] text-[#FF5959]">12 июня, пн</p>
          </div>

          <div className="flex items-center mt-[100px]">
            <div
              className="flex mr-[30px] cursor-pointer"
              onClick={toggleBottom}
            >
              <p className="text-[#3573F0] text-[12px]">Подробнее о рейсе</p>
              <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#FCFCFC] w-[296px] relative overflow-hidden">
          <div className="flex">
            <div className="absolute">
              <Image
                src="/line-direction.png"
                width={1}
                height={100}
                alt=""
                className="mr-[1px]"
              />
            </div>
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
                  ООО “Буревестник”
                </p>
              </div>
              <div className="bg-[#F5F6F8] rounded-[6px]">
                <p className="mx-2 items-center text-[#676767] text-[12px]">
                  Свободно: <span className="text-[#95A4BC]">14 мест</span>
                </p>
              </div>
              <span className="mx-2 block text-[24px] mt-[35px] font-semibold">
                1 200 ₽
              </span>
              <CustomButton
                title="Выбрать билет"
                containerStyles="text-white px-8 direction-gardient text-[12px] justify-center h-[40px] mt-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
      {showBottom && <BusTicketBottom />}
    </div>
  );
};

export default BusTicket;
