import Image from "next/image";

const CustomText = () => {
  return (
    <div className="flex items-center mb-[45px]">
      <Image
        src="/direct-up.png"
        width="40"
        height="40"
        alt="direct-up"
        className="mr-[15px]"
      />
      <h4 className="text-[32px] font-medium">Популярные направления</h4>
    </div>
  );
};

export default CustomText;
