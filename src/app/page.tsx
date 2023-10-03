"use client";

import {
  ButtonFilter,
  CardsList,
  CustomText,
  DirectionCardsList,
} from "@/entities";
import Hero from "@/pages/home/ui";
import { AppQr, CustomButton, Card } from "@/shared";
import DirectionCard from "@/shared/ui/direction-card/ui";
import { Footer, SearchSelect } from "@/widgets";

import { useState } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto sm:px-10 px-5 mb-8">
        <ButtonFilter containerStyles="justify-center" />
        <SearchSelect />
        <CardsList />

        <div className="w-[90%] mx-auto">
          <CustomText />

          <DirectionCardsList />
          <AppQr />
        </div>
      </div>
      <Footer />
    </>
  );
}
