import { DirectionInfo } from "@/entities";
import { CustomButton, DirectionCount } from "@/shared";
import Image from "next/image";
import { FC } from "react";
interface ModalContentProfileProps {
  setShowModal: (showModal: boolean) => void;
}
const ModalContentProfile: FC<ModalContentProfileProps> = ({
  setShowModal,
}) => {
  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[550px] mx-auto bg-white shadow-lg rounded-[20px] px-[20px]">
        <div className="sm:flex items-center">
          <div className="mt-10 text-center sm:px-[50px] sm:text-left ">
            <div
              className="absolute right-5 top-6 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <Image
                src="/close-modal.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
        <h4 className="text-[20px] font-semibold text-[#171716] mb-[30px]">
          Казань - Нижнекамск
        </h4>
        <div className="border-b border-[#DADADA] pb-[18px]">
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
            <p className="text-[10px] text-[#FF5959]">12 июня, пн</p>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex justify-between">
            <div className="flex">
              <DirectionCount icon="/bus-white.svg" count={"8,7"} />
              <p className="text-[#3573F0] underline">ИП “Сокол”</p>
            </div>
            <div className="flex">
              <Image
                src="/wifi-off.svg"
                width="20"
                height="20"
                className="mx-[16px]"
                alt="wifi-off"
              />
              <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
            </div>
          </div>
          <div className="bg-[#E4E9F0] p-1 flex justify-center rounded-[6px] w-[105px] mt-[12px]">
            <p className="text-[#676767] text-[12px]">
              Место: <span className="text-[#95A4BC]"> 14 мест</span>
            </p>
          </div>
          <div className="flex items-start mt-[30px]">
            <div className="mr-10">
              <div className="v8aa v8aa-no">
                <span className="aav9 aa9v aav9-no"></span>
                <span className="a9va aa9v a9va-no aa9v-no"></span>
                <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>
              </div>
              <div className="v8aa v8aa-no">
                <span className="aav9 aa9v aav9-no"></span>
                <span className="a9va aa9v a9va-no aa9v-no"></span>
                <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[12px]">Казань</p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>11 мая, 15:00 </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p> Автовокзал</p>
              </div>
              <p className="font-semibold text-[12px]">Казань</p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>11 мая, 15:00 </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p> Автовокзал</p>
              </div>
              <p className="font-semibold text-[12px]">Казань</p>
              <div className="text-[#676767] text-[10px] font-light flex items-center">
                <span>11 мая, 15:00 </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;{" "}
                </span>
                <p>Автовокзал</p>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] w-full bg-[#AEC7F954]  flex justify-center py-[12px] my-[25px]">
            <Image src="/receipt.svg" width={20} height={20} alt="receipt" />
            <p className="ml-[8px] text-[#3573F0] text-[12px]">
              Билет можно не печатать
            </p>
          </div>
          <CustomButton
            title="Отменить бронь"
            containerStyles="bg-[#FF3A44] text-white w-full my-[30px]"
          />
        </div>
        {/* <div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mt-[15px] mb-[30px] mx-auto">
          <p className="text-[#3573F0] text-[12px] font-light">
            Изменить номер телефона
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ModalContentProfile;
