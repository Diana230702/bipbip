import { CustomButton } from "@/shared";

const BookingState = () => {
  return (
    <div className="flex justify-between w-[630px] mx-auto mt-[35px]">
      <CustomButton
        title="1 Выбор места"
        containerStyles="relative z-1 bg-[#21D6B1] text-[#fff] rounded-[44px] w-[170px] h-[45px]  booking-state-button"
        textStyles="font-bold text-[14px] "
      ></CustomButton>
      <CustomButton
        title="2  Оформление"
        textStyles="font-bold text-[14px] "
        containerStyles="relative bg-[#fff] text-[#95A4BC] rounded-[44px]  booking-state-button-two"
      />
      <CustomButton
        title="3  Оплата"
        textStyles="font-bold text-[14px]"
        containerStyles="bg-[#fff] text-[#95A4BC] rounded-[44px]  z-1"
      />
    </div>
  );
};

export default BookingState;
