"use client";

import { ButtonFilter } from "@/entities";
import { BusTicket, DirectionFilter, Footer, Header } from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React from "react";

const DirectionBus = () => {
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
          <DirectionFilter route="20 Направлений" passengers="2" />
          <BusTicket />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DirectionBus;
