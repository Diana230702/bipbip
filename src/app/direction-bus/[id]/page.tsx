"use client";
import { ChoosePlace, Footer, Header, SearchSelect } from "@/widgets";
import { ButtonFilter, TreeSite } from "@/entities";
import { BookingPlaceInfo, BookingState } from "@/shared";
import { MoreTicket } from "@/features";
import Image from "next/image";

const BookingBus = () => {
  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <div className="max-w-[840px] mx-auto">
          <TreeSite />
          <BookingState />
          <MoreTicket />
          <p className="text-center mt-[40px] mb-[15px] text-[14px] text-[#95A4BC]">
            Выберите места на схеме автобуса
          </p>
          <div className="flex justify-center">
            <Image width={25} height={25} src="/bus-gray.svg" alt="" />
            <p className="text-[#22BB9C] ml-1 text-[16px]">
              Автобус:
              <span className="uppercase text-[#000]"> ХЕНДАЙ (43)</span>
            </p>
          </div>
          <ChoosePlace />
          <BookingPlaceInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingBus;
