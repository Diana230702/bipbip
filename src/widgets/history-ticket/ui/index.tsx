import { CustomButton } from "@/shared";

const HistoryTicket = () => {
  return (
    <div className="bg-[#fff] flex justify-between items-center  rounded-[10px] p-[24px] mb-[10px]">
      <div>
        <div className="flex">
          <p className="text-[#95A4BC] text-[12px] mr-[12px]">11 июня</p>
          <p className="text-[#95A4BC] text-[12px] font-light">1 пассажир</p>
        </div>
        <div>
          <p>Казань - Нижнекамск</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-[#95A4BC] text-[16px] font-semibold">950 ₽</span>
        <CustomButton
          title="Искать похожие"
          containerStyles="bg-[transparent] border-[1.5px] border-[#FFA723] text-[#FFA723] ml-[20px]"
        />
      </div>
    </div>
  );
};

export default HistoryTicket;
