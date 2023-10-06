import { CustomButton } from "@/shared";

const BookingPlaceInfo = () => {
  return (
    <div className="flex items-baseline justify-between mt-[40px] text-[14px]">
      <div>
        <p className="mb-[22px]">
          Свободно: <span className="text-[#95A4BC]">7 мест</span>
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
        <p className="font-semibold text-[18px]">31 и 32 место посадки</p>
        <CustomButton
          title="Далее"
          containerStyles="text-white px-8 w-full direction-gardient text-[12px] justify-center h-[40px] mt-[20px]"
        />
      </div>
    </div>
  );
};

export default BookingPlaceInfo;
