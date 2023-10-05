"use client";
import { Header, SearchSelect } from "@/widgets";
import { ButtonFilter, TreeSite } from "@/entities";
import { BookingState } from "@/shared";
import { MoreTicket } from "@/features";

const Booking = () => {
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
        </div>
      </div>
    </>
  );
};

export default Booking;
