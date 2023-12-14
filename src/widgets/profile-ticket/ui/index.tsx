import { DirectionInfo } from "@/entities";
import { CustomButton, DirectionCount, DirectionUser } from "@/shared";
import Image from "next/image";
import { FC } from "react";
import { formatDateWithDots, formatHours } from "@/helpers/formatDate";
import { TicketInfo } from "@/global";

interface ProfileTicketProps {
  setShowModal: (showModal: boolean) => void;
  ticket: TicketInfo
}

function splitRouteName(routeName: string): string[] {
  const result = routeName.split("—").map((part) => part.trim());
  return result;
}

function splitAfterComma(inputString: string): string[] {
  const result = inputString.split(",").map(part => part.trim());

  return result
}
const ProfileTicket: FC<ProfileTicketProps> = ({ setShowModal, ticket }) => {
  return (
    <div className="bg-[#fff] w-[550px] rounded-[10px] items-center justify-between p-8 pt-[50px] pb-[25px] mb-4">
      <p className="mb-5">{formatDateWithDots(ticket.departure_time)}</p>
      <div className="flex items-baseline">
        <DirectionInfo
          departure={ticket.departure_name}
          departureStation={splitRouteName(ticket.route_name)[0]}
          arrival={ticket.destination_name}
          arrivalStation={splitAfterComma(splitRouteName(ticket.route_name)[1])[0]}
          timeOfDeparture={formatHours(ticket.departure_time)}
          timeOfArrival={formatHours(ticket.arrival_time)}
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
