"use client";

import { ButtonFilter } from "@/entities";
import { DirectionFilter, Footer, Header } from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React, { useState } from "react";
import { Modal } from "@/shared";

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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DirectionBus;
