import { FC } from "react";
import { DirectionCard } from "./type";

const DirectionCard: FC<DirectionCard> = ({ imageSrc, destination, price }) => {
  return (
    <div className="w-[310px] mr-auto last:mr-0">
      <div>
        <img src={imageSrc} alt="city" className="w-full" />
      </div>
      <div className="mt-[18px]">
        <p className="text-[17px] font-medium">{destination}</p>
        <p className="text-[17px] text-[#676767]">{price}</p>
      </div>
    </div>
  );
};

export default DirectionCard;
