import { CustomButton } from "@/shared";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 ">
      <Link href="/">
        <Image src="/logo-header.svg" width="130" height="130" alt="" />
        <p className="text-[#95A4BC] font-medium pt-1 text-[14px]">
          Покупка автобусных билетов
        </p>
      </Link>
      <CustomButton
        title="+7 (987) 654 32 10"
        containerStyles="bg-[#E4E9F0] min-w-[130px] px-[12px] text-[#3573F0]"
        textStyles="text-[12px]"
      />
    </div>
  );
};
export default Header;
