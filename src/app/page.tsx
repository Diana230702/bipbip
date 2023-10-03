"use client";

import {
  ButtonFilter,
  CardsList,
  CustomText,
  DirectionCardsList,
} from "@/entities";
import Hero from "@/app/home/ui";
import { AppQr } from "@/shared";
import { Footer, SearchSelect } from "@/widgets";

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
