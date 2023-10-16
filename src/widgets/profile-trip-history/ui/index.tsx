import Image from "next/image";

const ProfileTripHistory = () => {
  return (
    <div>
      <div className="bg-[#fff] w-[270px] p-[24px] rounded-[10px] mt-[35px]">
        <div className="flex items-center justify-between border-b pb-[25px] cursor-pointer">
          <div>
            <Image src="/profile-car.svg" width={20} height={20} alt="car" />
          </div>
          <div>
            <p className="text-[14px]">Предстоящие поездки</p>
          </div>
          <div>
            <Image
              src="/profile-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-[25px] mt-[20px] cursor-pointer">
          <div>
            <Image
              src="/profile-calendar.svg"
              width={20}
              height={20}
              alt="car"
            />
          </div>
          <div>
            <p className="text-[14px]">Предстоящие поездки</p>
          </div>
          <div>
            <Image
              src="/profile-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pb-[25px] mt-[20px] cursor-pointer">
          <div>
            <Image src="/profile-check.svg" width={20} height={20} alt="car" />
          </div>
          <div>
            <p className="text-[14px]">Предстоящие поездки</p>
          </div>
          <div>
            <Image
              src="/profile-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTripHistory;
