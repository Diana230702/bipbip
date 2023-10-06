import { FC } from "react";

interface DirectionInfoProps {
  departure: string;
  arrival: string;
  timeOfDeparture: string;
  timeOfArrival: string;
}

const DirectionInfo: FC<DirectionInfoProps> = ({
  departure,
  arrival,
  timeOfDeparture,
  timeOfArrival,
}) => {
  const timeInWay: string = "1д 7ч В пути";

  return (
    <div className="flex justify-between items-baseline w-[410px]">
      <div className="w-[100px]">
        <span className="font-semibold text-[18px]">{timeOfDeparture}</span>
        <p className="text-[#676767] font-normal text-[12px]">{departure}</p>
      </div>
      <div className="w-[125px]">
        <span className="text-[#95A4BC] text-[12px]">~ {timeInWay}</span>
      </div>
      <div className="relative">
        <div className="absolute left-[-108px] top-[-40px]">
          <div className="v8aa ">
            <span className="aav9 aa9v"></span>
            <span className="a9va aa9v"></span>
            <span className="aav9 aa9v1"></span>
          </div>
        </div>
      </div>
      <div className="w-[100px]">
        <span className="font-semibold text-[18px]">{timeOfArrival}</span>
        <p className="text-[#676767] font-normal text-[12px]">{arrival}</p>
      </div>
    </div>
  );
};
export default DirectionInfo;
