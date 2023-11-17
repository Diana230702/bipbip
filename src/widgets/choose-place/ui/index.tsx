import Image from "next/image";

const ChoosePlace = ({ seatsScheme }: { seatsScheme: Seat[] }) => {
  const totalSeats = seatsScheme.length;
  const chunkSize = Math.ceil(totalSeats / 4); // 4 - это произвольное количество рядов

  const chunkedSeats = [];
  for (let i = 0; i < totalSeats; i += chunkSize) {
    chunkedSeats.push(seatsScheme.slice(i, i + chunkSize));
  }

  return (
    <div className="border border-[#95A5BC] rounded-[40px] px-[80px] py-[18px] mt-[40px] relative">
      {chunkedSeats.map((chunk, chunkIndex) => (
        <div className="flex justify-between" key={chunkIndex}>
          {chunk.map((seat, i) =>
            seat.SeatNum === 0 ? (
              <div
                className={`bg-[#E4E9F0] rounded-[6px] w-[45px] h-[45px] text-[#95A4BC] cursor-pointer mb-[12px] `}
                key={i}
              ></div>
            ) : (
              <div
                className={`w-[45px] h-[45px] border-[#22BB9C] rounded-[6px] border-2 px-[9px] pt-[9px] bg-[#fff] mb-[12px]`}
                key={i}
              >
                <p className="flex justify-center text-[14px] text-[#95A4BC]">
                  {seat.SeatNum}
                </p>
              </div>
            ),
          )}
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
