import Link from "next/link";
import { FC } from "react";
interface ModalContentPayment {
  setShowModal: (showModal: boolean) => void;
}
const ModalContentPayment: FC<ModalContentPayment> = ({ setShowModal }) => {
  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[430px] mx-auto bg-white shadow-lg rounded-[20px] text-center px-[30px]">
        <div className="sm:flex items-center">
          <div className="mt-10 text-center sm:px-[50px] sm:text-left ">
            <div
              className="absolute right-5 top-6 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img
                src="/close-modal.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
        <h4 className="text-[20px] font-semibold">
          Подтверждение бронирования
        </h4>
        <p>Введите код, отправленный на Ваш номер</p>

        <p className="font-semibold text-[18px] mt-[35px] mb-[25px]">
          +7 (987) 654 32-10
        </p>
        <p className="font-light">
          Билеты из заказа будут автоматически привязаны к вашему номера
          телефона
        </p>
        <div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mt-[15px] mb-[30px] mx-auto">
          <p className="text-[#3573F0] text-[12px] font-light">
            Изменить номер телефона
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalContentPayment;
