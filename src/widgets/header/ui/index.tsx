import { CustomButton, Modal } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalContentAuth from "@/widgets/modal-content-auth/ui";
import {
  getPhoneFromSessionStorage,
  getTokenFromSessionStorage,
} from "@/var/sessionStorage";
import { ModalContentPayment } from "@/widgets";
import ModalContentRegistration from "@/widgets/modal-content-registration/ui";

export const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [code, setCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [login, setLogin] = useState<null | string>("");
  const [token, setToken] = useState<null | string>("");
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    setLogin(getPhoneFromSessionStorage());
    setToken(getTokenFromSessionStorage());
  }, []);

  return (
    <div className="flex items-center justify-between py-5 ">
      <Link href="/">
        <Image src="/logo-header.svg" width="130" height="130" alt="" />
        <p className="text-[#95A4BC] font-medium pt-1 text-[14px]">
          Покупка автобусных билетов
        </p>
      </Link>
      <CustomButton
        title={token ? `${login}` : "Войти"}
        containerStyles="bg-[#E4E9F0] min-w-[130px] px-[12px] text-[#3573F0]"
        textStyles="text-[12px]"
        onClick={() => {
          if (token) {
            window.location.href = `/profile`;
          }
          setIsAuthModalOpen(true);
        }}
      />
      <Modal
        showModal={isAuthModalOpen}
        setShowModal={() => setIsAuthModalOpen(false)}
        content={
          <ModalContentAuth
            setShowModal={setIsAuthModalOpen}
            setIsCodeModalOpen={setIsCodeModalOpen}
            setCleanedPhoneNumber={setPhoneNumber}
            setCode={setCode}
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
          />
        }
      />
      <Modal
        showModal={isRegistrationModalOpen}
        setShowModal={setIsRegistrationModalOpen}
        content={
          <ModalContentRegistration
            setShowModal={setIsRegistrationModalOpen}
            phoneNumber={phoneNumber}
          />
        }
      />
    </div>
  );
};
export default Header;
