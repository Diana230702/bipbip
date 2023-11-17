"use client";
import { ChoosePlace, Footer, Header } from "@/widgets";
import { TreeSite } from "@/entities";
import { BookingPlaceInfo, BookingState } from "@/shared";
import { MoreTicket } from "@/features";
import Image from "next/image";
import { useGetOccupiedSeatsQuery } from "@/services/BibipTripService";

const BookingBus = () => {
  let dataForSeats;
  if (typeof window !== "undefined" && window.localStorage) {
    dataForSeats = localStorage.getItem("dataForSeats");
  }
  const storedSeatsDataForTrips = JSON.parse(dataForSeats ?? "null");

  const { data: seats } = useGetOccupiedSeatsQuery({
    tripId: storedSeatsDataForTrips.tripId,
    destinationId: storedSeatsDataForTrips.destinationId,
    departureId: storedSeatsDataForTrips.departureId,
  });

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
            activeStylesOne="bg-[#21D6B1] text-[#fff] w-[180px]"
            activeStylesTwo="bg-[#fff] w-[180px]"
            activeStylesThree="bg-[#fff] w-[180px]"
          />
          <MoreTicket />
          <p className="text-center mt-[40px] mb-[15px] text-[14px] text-[#95A4BC]">
            Выберите места на схеме автобуса
          </p>
          <div className="flex justify-center">
            <Image width={25} height={25} src="/bus-gray.svg" alt="" />
            <p className="text-[#22BB9C] ml-1 text-[16px]">
              Автобус:
              <span className="uppercase text-[#000]">
                {storedSeatsDataForTrips.busModel}
              </span>
            </p>
          </div>
          <ChoosePlace seatsScheme={seats?.Bus?.SeatsScheme ?? []} />
          <BookingPlaceInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingBus;
