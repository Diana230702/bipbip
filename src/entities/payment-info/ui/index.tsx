import {
  CustomButton,
  CustomSelect,
  DirectionCount,
  FloatingInput,
} from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface PaymentInfo {
  setShowModal: (showModal: boolean) => void;
}
const PaymentInfo: FC<PaymentInfo> = ({ setShowModal }) => {
  const [inputValue, setInputValue] = useState("");
  const genderOptions = ["Мужской", "Женский"];
  const geoOptions = ["Российская федерация", "Казахстан"];
  const documentOptions = ["Паспорт", "Загран"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-baseline mt-[70px]">
      <div className="mr-[50px]">
        <h3 className="text-[16px]">Данные пассажира</h3>
        <p className="text-[12px] font-light mb-[50px]">
          Указанные данные необходимы для совершения бронирования и будут
          проверены при посадке в автобус.
        </p>
        <div className="flex">
          <div className="flex flex-col mr-[12px]">
            <FloatingInput placeholder="Фамилия" />
            <FloatingInput placeholder="Отчество" />
            <CustomSelect placeholder="Пол" options={genderOptions} />
            <CustomSelect placeholder="Документ" options={documentOptions} />
            <FloatingInput
              placeholder="Ваше место в автобусе"
              mockText={`Место: ${4}`}
              readOnly={true}
            />
          </div>
          <div>
            <FloatingInput placeholder="Имя" />
            <FloatingInput placeholder="Дата рождения" />
            <CustomSelect placeholder="Гражданство" options={geoOptions} />
            <FloatingInput
              placeholder="Номер документа"
              mockText="Серия и номер: 10 цифр"
            />
          </div>
        </div>
        <CustomButton
          icon="/user-add.svg"
          title="Добавить пассажира"
          containerStyles=" border-dashed border border-[#95A4BC] w-[410px] left-[100px] "
          textStyles="text-[14px] text-[#95A4BC] ml-2"
          iconStyles="absolute left-[100px]"
        />
        <p className="text-[16px] mt-[30px] mb-[5px]">
          Информация о покупателе
        </p>
        <p className="text-[#676767] text-[12px] text-light mb-[20px]">
          Указывайте корректные e-mail и номер телефона, т.к. они необходимы для
          идентификации пользователя, получения билета, возможности авторизации
          в ЛК и возможности вернуть билет.
        </p>
        <div className="flex">
          <FloatingInput
            placeholder="E-mail"
            mockText={`simplemail@mail.ru`}
            readOnly={true}
            containerStyles="mr-[12px]"
          />
          <FloatingInput
            placeholder="Имя"
            mockText={`Вячеслав`}
            readOnly={true}
          />
        </div>
      </div>
      <div className="bg-[#fff] px-[25px] pt-[20px] pb-[30px] rounded-[10px]">
        <p className="text-[16px]">О маршруте</p>
        <CustomSelect
          placeholder="Казань - Нижнекамск"
          options={genderOptions}
          containerStyles="bg-[#E4E9F0]"
        />
        <div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mb-[15px]">
          <Image src="/receipt.svg" width={20} height={20} alt="receipt" />
          <p className="ml-[8px] text-[#3573F0] text-[12px]">
            Билет можно не печатать
          </p>
        </div>
        <p className="text-[12px] font-semibold mb-[8px]">15:00, 11 мая</p>
        <p className="text-[#676767] text-[12px] mb-[18px]">
          Автостанция Новоясенская, м. Новоясенская, Новоясенский тупик, д. 4
        </p>

        <p className="text-[12px] font-semibold mb-[8px]">08:00, 12 мая</p>
        <p className="text-[#676767] text-[12px] mb-[18px]">
          Автовокзал №2, наб. Обводного Канала, д. 36
        </p>

        <p className="text-[12px] font-semibold mb-[8px]">Место</p>
        <p className="text-[#676767] text-[12px] mb-[18px]">4</p>
        <div className="flex">
          <DirectionCount icon="/car-white.svg" count={"8,7"} />
          <Image
            src="/wifi-off.svg"
            width="20"
            height="20"
            className="mx-[16px]"
            alt="wifi-off"
          />
          <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
        </div>

        <p className="text-[12px] font-semibold mt-[8px]">ООО “Буревестник”</p>
        <p className="text-[#676767] text-[12px] pb-[22px] border-b border-[#DADADA]">
          Перевозчик
        </p>

        <div className="flex items-center justify-between pt-[12px]">
          <p className="text-[16px]">К оплате</p>
          <span className="text-[#21D6B1] text-[20px]">514.80 ₽</span>
        </div>
        <p className="text-[#95A4BC] font-light text-[12px] mt-[16px] mb-[20px]">
          Ваши платежные и личные данные надежно защищены в соответствие с
          международными стандартами безопасности.
        </p>
        <Image src="/multi.png" width="150" height="150" alt="multi" />

        <Link href={"#"} className="text-[#3083FF] text-[12px] mt-[20px] block">
          Условия возврата
        </Link>

        <div className="flex items-center mt-[25px] text-[12px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="h-[45px] w-[45px] cursor-pointer"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-[12px]">
            Я принимаю условия
            <Link href={"#"} className="text-[#3083FF] mx-1 underline-offset-8">
              Пользовательского соглашения
            </Link>
            (публичной оферты) и{" "}
            <Link href={"#"} className="text-[#3083FF] ml-1 underline-offset-8">
              политики конфиденциальности
            </Link>
          </label>
        </div>
        <div className="flex items-center mt-[25px] text-[12px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="h-[20px] w-[20px] cursor-pointer"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-[12px]">
            Я даю
            <Link href={"#"} className="text-[#3083FF] mx-1 underline-offset-8">
              согласие на обработку персональных данных.
            </Link>
          </label>
        </div>
        <div className="flex justify-end mt-[38px]">
          <CustomButton
            onClick={() => setShowModal(true)}
            title="Перейти к оплате"
            containerStyles="text-white w-[213px] px-8 direction-gardient text-[12px] justify-center h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
