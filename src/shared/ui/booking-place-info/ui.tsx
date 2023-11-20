import { CustomButton } from "@/shared";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const BookingPlaceInfo = ({
  seatsScheme,
  reserved,
}: {
  seatsScheme: Seat[];
  reserved: BusReserved[];
}) => {
  const selectedSeats = useSelector(
    (state: RootState) => state.selectedSeats.selectedSeats,
  );

  const allSeats: Seat[] = [];
  for (let i = 0; i < seatsScheme.length; i++) {
    if (seatsScheme[i].SeatNum !== 0) {
      allSeats.push(seatsScheme[i]);
    }
  }

  return (
    <div className="flex items-baseline justify-between mt-[40px] text-[14px]">
      <div>
        <p className="mb-[22px]">
          Свободно:{" "}
          <span className="text-[#95A4BC]">
            {allSeats.length - reserved.length} мест
          </span>
        </p>
        <div className="flex items-baseline">
          <div className="flex items-center mb-2 mr-[40px]">
            <span className="w-[22px] h-[22px] border-[#22BB9C] rounded-[4px] border-2 px-[9px] pt-[9px] bg-[#fff]"></span>
            <p className="text-[12px] font-light ml-2">Cвободное</p>
          </div>
          <div className="flex items-center">
            <span className="w-[22px] h-[22px] border-[#95A4BC] rounded-[4px] border-2 px-[9px] pt-[9px] bg-[#E4E9F0]"></span>
            <p className="text-[12px] font-light ml-2">Занятое</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-light">Выбрано:</p>
        <p className="font-semibold text-[18px]">
          {selectedSeats.length === 0
            ? "Места не выбраны"
            : selectedSeats.join(", ") + " места"}
        </p>
        <CustomButton
          title="Далее"
          containerStyles="text-white px-8 w-full direction-gardient text-[12px] justify-center h-[40px] mt-[20px]"
        />
      </div>
    </div>
  );
};

export default BookingPlaceInfo;
