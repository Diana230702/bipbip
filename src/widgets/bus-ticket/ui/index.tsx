<<<<<<< HEAD
=======
import { DirectionInfo } from "@/entities";
import { CustomButton } from "@/shared";
import Image from "next/image";

const BusTicket = () => {
  return (
    <div className="bg-[#fff] rounded-[6px] flex items-center justify-between pl-8 pt-[50px] pb-[25px]">
      <div>
        <span className="text-[#21D6B1] font-medium text-[24px]">600 ₽</span>
        <div className="flex">
          <div className="flex items-center py-5">
            <div className="flex items-center bg-[#FFA723] text-white rounded-[6px] p-1 px-2 w-[45px] mr-2">
              <Image
                src="/car-white.svg"
                alt="car"
                className="mr-1 w-[12px] h-[12px]"
              />
              <span className="text-[12px]">10</span>
            </div>
            <div className="flex items-center  mr-2">
              <Image
                src="/user-direction.png"
                alt=""
                className="w-[30px] mr-2"
              />
              <p className="text-[14px]">Алексей Иванов</p>
            </div>
            <div className="bg-[#E4E9F0] flex justify-center rounded-[6px]">
              <p className="text-[#95A4BC] text-[12px] px-1">
                Toyota Land Cruiser
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E4E9F0] w-[130px] flex justify-center rounded-[6px] mb-[30px]">
          <p className="text-[#676767] text-[12px]">
            Свободно: <span className="text-[#95A4BC]">3 места</span>
          </p>
        </div>
        <DirectionInfo
          departure="Казань"
          arrival="Сочи"
          timeOfDeparture="17:50"
          timeOfArrival="09:00"
        />
        <CustomButton
          title="Забронировать место"
          containerStyles="mt-20 text-white px-8 direction-gardient text-[12px]"
        />
      </div>
      <div className="bg-[#FCFCFC] w-[296px]">
        <div className="flex">
          <div>
            <Image src="/line-direction.png" alt="" className="mr-[1px]" />
          </div>
          <div className="px-[23px] py-[50px]">
            <div className="flex">
              <div>
                <div className="flex items-center mb-[20px]">
                  <Image src="/sofa.svg" alt="" className="w-6" />
                  <p className="mx-2 text-[#676767] text-[12px]">
                    2 места на заднем сиденье
                  </p>
                </div>
                <div className="flex">
                  <Image src="/github.svg" alt="" className="w-6" />
                  <p className="mx-2 items-center text-[#676767] text-[12px]">
                    Можно с животными
                  </p>
                </div>
              </div>
              <div className="ml-[10px]">
                <Image src="/check.svg" alt="" className="w-[16px] mb-[30px]" />
                <Image src="/check.svg" alt="" className="w-[16px]" />
              </div>
            </div>
            <p className="mt-[26px] text-[12px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicket;
>>>>>>> 86b47473f8db1352487a5e60fc098e62fcf125eb
