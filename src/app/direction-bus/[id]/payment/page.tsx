"use client";
import { Footer, Header, ModalContentPayment } from "@/widgets";
import { PaymentInfo, TreeSite } from "@/entities";
import { BookingState, Modal } from "@/shared";
import { useState } from "react";

const PayBus = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <div className="max-w-[840px] mx-auto">
          <TreeSite />
          <BookingState
            activeStylesOne="bg-[#fff] text-[#22BB9C] after:border-[#22BB9C]"
            activeStylesTwo="bg-[#21D6B1] text-[#fff] after:border-[#a6efe0] after:right-[-24px]"
            activeStylesThree="bg-[#fff] z-[1]"
          />
          <PaymentInfo setShowModal={setShowModal} />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={<ModalContentPayment setShowModal={setShowModal} />}
      />
      <Footer />
    </>
  );
};

export default PayBus;
