import { DirectionInfo } from "@/entities";
import { CustomButton, DirectionCount, DirectionUser } from "@/shared";
import Image from "next/image";
import { FC } from "react";

interface ProfileTicketProps {
  setShowModal: (showModal: boolean) => void;
}
const ProfileTicket: FC<ProfileTicketProps> = ({ setShowModal }) => {
  return (
    <div className="bg-[#fff] w-[550px] rounded-[10px] items-center justify-between p-8 pt-[50px] pb-[25px]">
      <div className="flex items-baseline">
        <DirectionInfo
          departure="Казань"
          departureStation="Казанский вокзал, Казань"
          arrival="Нижнекамск"
          arrivalStation="Автовокзал, Нижнекамск"
          timeOfDeparture="17:50"
          timeOfArrival="09:00"
          containerStyles="profile-line"
        />
      </div>
      <div className="flex items-end justify-between mt-[80px]">
        <div>
          <div className="flex mb-[12px]">
            <Image src="/bus-gray.svg" width={20} height={20} alt="Bus" />
            <p className="text-[14px] ml-[8px] font-semibold">ИП “Сокол”</p>
          </div>
          <div className="bg-[#E4E9F0] p-1  flex justify-center rounded-[6px]">
            <p className="text-[#676767] text-[12px]">
              Место: <span className="text-[#95A4BC]"> 14 мест</span>
            </p>
          </div>
        </div>
        <div>
          <CustomButton
            title="Открыть билет"
            onClick={() => setShowModal(true)}
            containerStyles="bg-[transparent] border-[1.5px] text-[#21D6B1] border-[#21D6B1] px-8 text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileTicket;
