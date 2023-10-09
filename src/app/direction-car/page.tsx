"use client";

import { ButtonFilter } from "@/entities";
import {
  CarTicket,
  DirectionFilter,
  Footer,
  Header,
  ModalContentCarTicket,
} from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React, { useState } from "react";
import { Modal } from "@/shared";

const DirectionCar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <ButtonFilter containerStyles="justify-start" />
        <SearchSelect />
        <div className="max-w-[840px] mx-auto">
          <DirectionFilter route="4 поездки" passengers="1" />
          <CarTicket setShowModal={setShowModal} />
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          content={<ModalContentCarTicket setShowModal={setShowModal}/>}
        />
      </div>

      <Footer />
    </>
  );
};

export default DirectionCar;
