import Image from "next/image";

const DirectionFilter = () => {
  return (
    <div className="mb-[43px]">
      <p className="text-[#171716] font-semibold mb-5 text-[16px]">4 поездки</p>
      <div className="flex justify-between items-center">
        <p className="text-[#676767] text-[12px]">
          Время местное. Цены за 1 пассажира
        </p>

        <div className="flex items-center">
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" alt="" />
            <p className="ml-1 text-[#3573F0] text-[12px]">Стоимость</p>
          </div>
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время отправления</p>
          </div>
          <div className="flex mr-[30px] cursor-pointer">
            <Image src="/arrow-down.svg" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время прибытия</p>
          </div>
          <div className="flex cursor-pointer">
            <Image src="/arrow-down.svg" alt="" />
            <p className="ml-1 text-[#95A4BC] text-[12px]">Время в пути</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionFilter;
