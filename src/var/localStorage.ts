let storedDataForTripsString;
if (typeof window !== "undefined" && window.localStorage) {
  storedDataForTripsString = localStorage.getItem("dataForBuyTicket") || "";
}

export const storedDataForTrips = JSON.parse(
  storedDataForTripsString ?? "null",
);

let dataForSeats;
if (typeof window !== "undefined" && window.localStorage) {
  dataForSeats = localStorage.getItem("dataForSeats");
}
export const storedSeatsDataForTrips: LocalStorageTrip = JSON.parse(
  dataForSeats ?? "null",
);

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
