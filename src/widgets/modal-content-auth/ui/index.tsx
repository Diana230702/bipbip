import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import { getBenefits } from "@/widgets/modal-content-auth/model";
import { CustomButton } from "@/shared";

interface ModalContentAuthProps {
  onClose: () => void;
}

const ModalContentAuth: FC<ModalContentAuthProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("+7 (***) *** **-**");
  const prefixNumber = (str: string) => {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "8 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, ""); // Оставляем только цифры
    const numberLength = 11;

    let result;

    if (event.target.value.includes("+8") || event.target.value[0] === "8") {
      result = "";
    } else {
      result = "+";
    }

    //
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ") ";
          break;
        case 7:
          result += "-";
          break;
        case 9:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }

    setPhoneNumber(result); // Подставляем "+7" и ограничиваем длину для последующих цифр
  };

  return (
    <div className="flex items-center min-h-screen p-8">
      <div className="relative w-full max-w-[730px] mx-auto bg-white shadow-lg rounded-[20px] p-[30px]">
        <div className="sm:flex items-center">
          <p className="text-black text-2xl">Войти</p>
          <div className="mt-10 text-center sm:px-[50px] sm:text-left ">
            <div
              className="absolute right-5 top-6 cursor-pointer"
              onClick={onClose}
            >
              <Image
                src="/close-modal.svg"
                alt="Close Button"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#676767] text-left mb-5">
              В личном кабинете Вы можете:
            </p>
            {getBenefits.map((text) => (
              <div className="flex items-center mb-3">
                <Image
                  src="/tick-circle.svg"
                  width={24}
                  height={24}
                  alt="Tick Circle"
                  className="mr-3"
                />
                <p className="text-black text-[14px] leading-4">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center max-w-[30%]">
            <p className="text-[#95A4BC] text-[10px] text-left mb-1">
              Номер телефона
            </p>
            <input
              type="text"
              value={phoneNumber}
              onChange={handleInputChange}
              className="text-black bg-[#F5F5F5] rounded-xl p-2 mb-5"
              placeholder="+7 (***) *** **-**"
              required={true}
            />
            <CustomButton
              title={"Выслать код в СМС"}
              containerStyles="bg-[#20DDB7] p-3 bg-gradient-to-r from-[#20DDB7] to-[#22BB9C] text-[12px] leading-3 mb-5"
            />
            <p className="text-[#95A4BC] text-[12px] leading-3 text-left">
              Условия <span className="text-[#3083FF]">публичной оферты</span> и
              <span className="text-[#3083FF]">
                {" "}
                политики конфидециальности
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContentAuth;
