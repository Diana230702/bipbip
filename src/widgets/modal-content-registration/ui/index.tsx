"use client";
import { FC, useState } from "react";
import { ModalContentRegistration } from "@/widgets/modal-content-registration/model";
import Image from "next/image";
import { CustomButton } from "@/shared";
import { registration } from "@/services/registration";
import {
  setPhoneToSessionStorage,
  setTokenToSessionStorage,
} from "@/var/sessionStorage";

const ModalContentRegistration: FC<ModalContentRegistration> = ({
  setShowModal,
  phoneNumber,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleClick = async () => {
    const res = await registration({
      phoneNumber: phoneNumber,
      email,
      firstName: name,
    });
    if (res) {
      setTokenToSessionStorage(res.token);
      setPhoneToSessionStorage(phoneNumber);
    }
    setShowModal(false);
  };

  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[550px] mx-auto bg-white shadow-lg rounded-[20px] px-[20px]">
        <div className="sm:flex items-center">
          <div className="mt-10 flex sm:px-[10px] sm:text-left justify-between w-full border-b border-[#DADADA] pb-[18px]">
            <h1>Введите данные для регистрации</h1>
            <Image
              src="/close-modal.svg"
              alt="Close icon"
              className="w-[18px] h-[18px]"
              width={18}
              height={18}
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex flex-col  mb-5">
            <label htmlFor="email" className="p-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Введите ваш email"
              className="p-2"
              required={true}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="p-2">
              Ваше имя
            </label>
            <input
              type="text"
              placeholder="Введите ваше имя"
              className="p-2"
              required={true}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <CustomButton
            title="Зарегестрироваться"
            containerStyles="bg-[#20DDB7] text-white w-full my-[30px]"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalContentRegistration;
