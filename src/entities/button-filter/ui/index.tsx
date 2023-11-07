import bus_white from "../../../../public/bus-white.svg";
import car_white from "../../../../public/car-black.svg";
import bus_gray from "../../../../public/bus-gray.svg";
import car_gray from "../../../../public/car-gray.svg";
import { FC, useState } from "react";
import { ButtonFilterProps } from "../type";
import { CustomButton } from "@/shared";

const ButtonFilter: FC<ButtonFilterProps> = ({ containerStyles }) => {
  const [activeButton, setActiveButton] = useState("bus");

  const getIcon = (buttonType: string) => {
    return buttonType === "bus"
      ? activeButton === "bus"
        ? bus_white
        : bus_gray
      : activeButton === "car"
      ? car_white
      : car_gray;
  };

  return (
    <div className={`flex my-5 ${containerStyles}`}>
      <CustomButton
        icon={getIcon("bus")}
        title="Автобусные билеты"
        containerStyles={`p-[10px] py-[9px] mr-5  text-[12px] min-w-[120px] ${
          activeButton === "bus"
            ? "bg-[#BD21D6] text-white"
            : "bg-[#E4E5EF] text-black"
        }`}
        textStyles="ml-2 text-left"
        onClick={() => {
          setActiveButton("bus");
        }}
      />
      <CustomButton
        icon={getIcon("car")}
        title="Автомобили"
        containerStyles={`min-w-[100px] p-[10px] py-[9px] text-[12px] font-semibold ${
          activeButton === "car"
            ? "bg-[#ffa722] text-black"
            : "bg-[#E4E5EF] text-black"
        }`}
        textStyles="ml-2 text-left"
        onClick={() => {
          setActiveButton("car");
        }}
      />
    </div>
  );
};

export default ButtonFilter;
