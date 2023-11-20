const getStoredDataForTrips = () => {
  let storedDataForTripsString;

  if (typeof window !== "undefined" && window.localStorage) {
    storedDataForTripsString = localStorage.getItem("dataForBuyTicket") || "";
  }

  let storedDataForTrips;

  try {
    storedDataForTrips = storedDataForTripsString
      ? JSON.parse(storedDataForTripsString)
      : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    storedDataForTrips = null;
  }

  return storedDataForTrips;
};

export { getStoredDataForTrips };

// seatStorageUtils.js

const getStoredSeatsDataForTrips = () => {
  let dataForSeats;

  if (typeof window !== "undefined" && window.localStorage) {
    dataForSeats = localStorage.getItem("dataForSeats");
  }

  let storedSeatsDataForTrips;

  try {
    storedSeatsDataForTrips = dataForSeats ? JSON.parse(dataForSeats) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    storedSeatsDataForTrips = null;
  }

  return storedSeatsDataForTrips;
};

export { getStoredSeatsDataForTrips };

export interface LocalStorageTrip {
  tripId: string;
  departureId: string;
  destinationId: string;
  bus: string;
  busModel: string;
  departureTime: string;
  arrivalTime: string;
  departureName: string;
  destinationName: string;
  price: string;
  carrier: string;
}

export interface LocalStorageDirection {
  from: {
    id: string;
    name: string;
    locality: string;
  };
  to: {
    id: string;
    name: string;
    locality: string;
  };
  startDate: string;
}
