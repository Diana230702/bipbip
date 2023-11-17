let storedDataForTripsString;
if (typeof window !== "undefined" && window.localStorage) {
  storedDataForTripsString = localStorage.getItem("dataForBuyTicket") || "";
}

// export const storedDataForTrips = JSON.parse(
//   storedDataForTripsString ?? "null",
// );

let dataForSeats;
if (typeof window !== "undefined" && window.localStorage) {
  dataForSeats = localStorage.getItem("dataForSeats");
}
// export const storedSeatsDataForTrips: LocalStorageTrip = JSON.parse(
//   dataForSeats ?? "null",
// );

export const storedDataForTrips = {
  from: {
    id: "2d974a08-ef00-11ed-778b-d00d5ddf9041",
    name: "Казань",
    locality: "Казань",
  },
  to: {
    id: "f5ff0995-dfa0-11e5-80db-001c429bd626",
    name: "Альметьевск автовокзал",
    locality: "Альметьевск",
  },
  startDate: "2023-12-05T11:17:51.000Z",
};

export const storedSeatsDataForTrips = {
  tripId:
    "b3a2e1f2-d32d-11eb-468d-0a0066f512e0be1004c5-7b5d-11ee-a373-38d54775616f",
  departureId: "d3303d17-aa35-11e5-9455-001c422ccb08",
  destinationId: "f5ff0995-dfa0-11e5-80db-001c429bd626",
  bus: "HYUNDAI (43), р121рр116",
  busModel: "HYUNDAI",
  departureTime: "2023-12-05T06:20:00",
  arrivalTime: "2023-12-05T11:20:00",
  departureName: "Казань Центральный АВ",
  destinationName: "Альметьевск АВ",
  price: "934",
  carrier: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ",
};

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
