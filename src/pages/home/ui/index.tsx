import { CustomButton } from "@/shared";
import user from "../../../../public/user.svg";
export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white bg-hero-bg h-[429px] bg-no-repeat">
      <CustomButton
        title="Войти"
        containerStyles="bg-[#fff]  text-[#000] min-w-[115px] absolute right-[200px] top-6 pr-2 min-w-[96px] text-[12px]"
        iconLeft={user}
      />
      <h1 className="text-[55px] font-bold italic">BiBipTrip</h1>
      <h2 className="text-[36px] italic">Покупка автобусных билетов</h2>
    </div>
  );
};
export default Hero;
