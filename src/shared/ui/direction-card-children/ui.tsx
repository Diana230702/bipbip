import { FC } from "react";
import { DirectionCardChildren } from "./type";

const DirectionCardChildren: FC<DirectionCardChildren> = ({
  imageSrc,
  destination,
  price,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <img src={imageSrc} alt="city" className="w-[70px] rounded-[12px]" />
      </div>
      <div className="w-[223px] mr-[20px]">
        <p className="text-[16px] font-medium">{destination}</p>
        <p className="text-[16px] text-[#676767] font-normal">{price}</p>
      </div>
    </div>
  );
};

export default DirectionCardChildren;
