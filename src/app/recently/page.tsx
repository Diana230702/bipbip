"use client";
import { ButtonFilter, RecentlyCard } from "@/entities";
import { AppQr, RecentlyInfo } from "@/shared";
import {
  CarTicket,
  DirectionFilter,
  Footer,
  Header,
  SearchSelect,
} from "@/widgets";

const Recently = () => {
  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <ButtonFilter containerStyles="justify-start" />
        <SearchSelect />

        <RecentlyCard />
        <AppQr />
        <RecentlyInfo />
      </div>

      <Footer />
    </>
  );
};

export default Recently;
