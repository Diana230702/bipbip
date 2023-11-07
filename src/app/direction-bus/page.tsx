"use client";

import { ButtonFilter } from "@/entities";
import { BusTicket, DirectionFilter, Footer, Header } from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  sortArrayByArrivalTime,
  sortArrayByCost,
  sortArrayByDepartureTime,
  sortArrayByDestination,
} from "@/helpers/sortArray";

const DirectionBus = () => {
  const trips = useSelector((state: any) => state.trips);
  const [sortedTrips, setSortedTrips] = useState<Trip[]>([]);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleSortByCostClick = () => {
    if (trips && trips.trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByCost(trips.trips);
      } else {
        sortedTrips = sortArrayByCost(trips.trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortByDepartureClick = () => {
    if (trips && trips.trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByDepartureTime(trips.trips);
      } else {
        sortedTrips = sortArrayByDepartureTime(trips.trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortByArrivalClick = () => {
    if (trips && trips.trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByArrivalTime(trips.trips);
      } else {
        sortedTrips = sortArrayByArrivalTime(trips.trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortArrayByDurationClick = () => {
    if (trips && trips.trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByDestination(trips.trips);
      } else {
        sortedTrips = sortArrayByDestination(trips.trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const tripsToDisplay = sortedTrips.length > 0 ? sortedTrips : trips.trips;

  return (
    <>
      <div className="bg-[#fff] relative pb-[130px]">
        <div className="container mx-auto sm:px-10 px-5 ">
          <Header />
        </div>
        <hr />
      </div>

      <div className="container mx-auto sm:px-10 px-5 relative mt-[-150px]">
        <ButtonFilter containerStyles="justify-start mt-[45px]" />
        <SearchSelect />
        <div className="max-w-[840px] mx-auto">
          <DirectionFilter
            route={trips && trips.trips && trips.trips.length}
            passengers="2"
            handleSortByCost={handleSortByCostClick}
            handleSortByDepartureTime={handleSortByDepartureClick}
            handleSortByArrivalTime={handleSortByArrivalClick}
            handleSortByTravelTime={handleSortArrayByDurationClick}
          />
          {tripsToDisplay &&
            tripsToDisplay.map((trip: Trip) => (
              <BusTicket key={trip.Id} trip={trip} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DirectionBus;
