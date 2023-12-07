"use client";

import { CustomButton, Modal } from "@/shared";
import user from "../../../../public/user.svg";
import { useEffect, useState } from "react";
import ModalContentAuth from "@/widgets/modal-content-auth/ui";
import { ModalContentPayment } from "@/widgets";
import { getPhoneFromSessionStorage, getTokenFromSessionStorage } from "@/var/sessionStorage";
export const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [code, setCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [login, setLogin] = useState< string>("");
  const [token, setToken] = useState< string>("");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setToken(getTokenFromSessionStorage())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setLogin(getPhoneFromSessionStorage())
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center text-white bg-hero-bg h-[429px] bg-no-repeat bg-cover">
      <CustomButton
        title={token ? `${login}` : "Войти"}
        containerStyles="bg-[#fff]  text-[#000] min-w-[115px] absolute right-[200px] top-6 pr-2 min-w-[96px] text-[12px]"
        iconLeft={user}
        onClick={() => {
          if (token) {
            return (window.location.href = `/profile`);
          } else {
            setIsAuthModalOpen(true);
          }
        }}
      />
      <h1 className="text-[55px] font-bold italic">BiBipTrip</h1>
      <h2 className="text-[36px] italic">Покупка автобусных билетов</h2>
      <Modal
        showModal={isAuthModalOpen}
        setShowModal={() => setIsAuthModalOpen(false)}
        content={
          <ModalContentAuth
            setShowModal={setIsAuthModalOpen}
            setIsCodeModalOpen={setIsCodeModalOpen}
            setCode={setCode}
            setCleanedPhoneNumber={setPhoneNumber}
          />
        }
      />
      <Modal
        showModal={isCodeModalOpen}
        setShowModal={setIsCodeModalOpen}
        content={
          <ModalContentPayment
            setShowModal={setIsCodeModalOpen}
            code={code}
            phoneNumber={phoneNumber}
            setShowRegistrationModal={setIsRegistrationModalOpen}
            setToken={setToken}
            setLogin={setLogin}
          />
        }
      />
    </div>
  );
};
export default Hero;
