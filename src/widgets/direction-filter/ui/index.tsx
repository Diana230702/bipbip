import Image from "next/image";
import { FC } from "react";

interface DirectionFilterProps {
  route: string;
  passengers: string;
}

const DirectionFilter: FC<DirectionFilterProps> = ({ route, passengers }) => {
  return (
    <div className="mb-[43px]">
      <p className="text-[#171716] font-semibold mb-5 text-[16px]">{route}</p>
      <div className="flex justify-between items-center">
        <p className="text-[#676767] text-[12px]">
          Время местное. Цены за {passengers} пассажира
        </p>

        <div className="flex items-center">
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            <p className="ml-1 text-[#3573F0] text-[12px]">Стоимость</p>
          </div>
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время отправления</p>
          </div>
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время прибытия</p>
          </div>
          <div className="flex cursor-pointer">
            <Image src="/arrow-down.svg" width="20" height="20" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время в пути</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionFilter;
