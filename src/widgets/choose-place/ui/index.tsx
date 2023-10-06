import Image from "next/image";
import { sortedNumbersPlace } from "../model";

const ChoosePlace = () => {
  const chunkSize = 11;
  const chunkedNumbersPlace = [];

  for (let i = 0; i < sortedNumbersPlace.length; i += chunkSize) {
    chunkedNumbersPlace.push(sortedNumbersPlace.slice(i, i + chunkSize));
  }

  return (
    <div className="border border-[#95A5BC] rounded-[40px] px-[80px] py-[18px] mt-[40px] relative">
      {chunkedNumbersPlace.map((chunk, chunkIndex) => (
        <div className="flex justify-between" key={chunkIndex}>
          {chunk.map((num, i) => (
            <div
              className={`bg-[#E4E9F0] rounded-[6px] w-[45px] h-[45px] text-[#95A4BC] cursor-pointer ${
                i === 10 && chunkIndex === 1 ? "mb-[55px]" : "mb-[12px]"
              }`}
              key={i}
            >
              <p className="flex justify-center py-3 text-[14px]">
                {num.value}
              </p>
            </div>
          ))}
        </div>
      ))}
      <Image
        src="/car-steering-wheel.png"
        width={45}
        height={45}
        alt="car-steering-wheel"
        className="absolute left-[17px] bottom-[30px]"
      />
    </div>
  );
};

export default ChoosePlace;
