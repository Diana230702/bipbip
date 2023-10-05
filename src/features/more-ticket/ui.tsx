import { useState } from "react";
import { DirectionCount } from "@/shared";
import Image from "next/image";

const MoreTicket = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className="mt-[40px] bg-[#fff] py-[15px] px-[25px] rounded-[10px]">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleDetails}
      >
        <div>
          <p className="text-[14px]">Казань - Нижнекамск</p>
          <p className="text-[#95A4BC] text-[12px]">
            14.05.2023, 1 пассажир, 514.80 ₽
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
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[12px] block mt-[30px]  mb-[10px]">
              15:00, 11 мая
            </span>
            <p className="text-[#676767] text-[12px] mb-[18px]">
              Автостанция Новоясенская, м. Новоясенская, Новоясенский тупик, д.
              4
            </p>

            <span className="text-[12px] text-[#676767] block mb-[10px]">
              08:00, 12 мая
            </span>
            <p className="text-[#676767] text-[12px]">
              Автовокзал №2, наб. Обводного Канала, д. 36
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
                alt='wifi-off'
              />
              <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
            </div>
            <p className="text-[12px]">ООО “Буревестник”</p>
            <p className="text-[#676767] text-[12px]">Перевозчик</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreTicket;
