import { DirectionInfo } from "@/entities";
import { DirectionCount, DirectionUser, CustomButton } from "@/shared";
import Image from "next/image";
import { FC } from "react";

const BusTicketBottom = () => {
  return (
    <div className="bg-[#fff] rounded-[6px] flex items-start justify-between pb-[25px] px-[30px] pt-[30px] border-t border-[#DCE1E8]">
      <div className="flex items-start">
        <div className="mr-10">
          <div className="v8aa v8aa-no">
            <span className="aav9 aa9v aav9-no"></span>
            <span className="a9va aa9v a9va-no aa9v-no"></span>
            <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>
          </div>
          <div className="v8aa v8aa-no">
            <span className="aav9 aa9v aav9-no"></span>
            <span className="a9va aa9v a9va-no aa9v-no"></span>
            <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[12px]">Казань</p>
          <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
            <span>11 мая, 15:00 </span>
            <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
              &bull;
            </span>
            <p> Автовокзал</p>
          </div>
          <p className="font-semibold text-[12px]">Казань</p>
          <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
            <span>11 мая, 15:00 </span>
            <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
              &bull;
            </span>
            <p> Автовокзал</p>
          </div>
          <p className="font-semibold text-[12px]">Казань</p>
          <div className="text-[#676767] text-[10px] font-light flex items-center">
            <span>11 мая, 15:00 </span>
            <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
              &bull;{" "}
            </span>
            <p>Автовокзал</p>
          </div>
        </div>
      </div>
      <div className="w-[240px]">
        <div className="flex items-center">
          <Image src="/info.svg" width={20} height={20} alt="info" />
          <p className="font-semibold text-[12px] ml-1">Перевозчик</p>
        </div>
        <p className="font-semibold text-[12px] my-[12px]">
          Бренд:
          <span className="font-light"> ИП Амельченко Антон Сергеевич</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Автобус:
          <span className="font-light"> KING-LONG (56), р449231</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Перевозчик:
          <span className="font-light"> ИП Амельченко Антон Сергеевич</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Адрес:
          <span className="font-light">
            Россия, Пермский кр., Большесосновкий мну.- р, Полозовское г-п, д.
            Гари
          </span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          ОГРН:
          <span className="font-light"> 4343513586492</span>
        </p>
      </div>
      <div className="w-[210px]">
        <p className="font-semibold text-[12px] my-[12px]">
          Бренд:
          <span className="font-light"> ИП Амельченко Антон Сергеевич</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Бренд:
          <span className="font-light"> ИП Амельченко Антон Сергеевич</span>
        </p>
        <p className="font-semibold text-[12px] text-[#23BB9C]">
          Условия возврата
        </p>
      </div>
    </div>
  );
};

export default BusTicketBottom;
