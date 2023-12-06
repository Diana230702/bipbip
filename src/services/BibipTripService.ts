import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = `https://bibiptrip.com/api/avibus/`;
export const bibipTripApi = createApi({
  reducerPath: "directionsAPI",
  tagTypes: ["Directions"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bibiptrip.com/api/avibus",
  }), // Define your API base URL
  endpoints: (builder) => ({
    getDirections: builder.query<DirectionsResponse, void>({
      query: () => `/directions/`,
    }),
    searchTripCities: builder.query<
      TripsResponse,
      { departureCity: string; destinationCity: string; date: string }
    >({
      query: (args) => {
        const { departureCity, destinationCity, date } = args;
        return {
          url: `search_trips_cities/?departure_city=${departureCity}&destination_city=${destinationCity}&date=${date}`,
        };
      },
    }),

    getOccupiedSeats: builder.query<
      ResponseBusSchemeData,
      { tripId: string; departureId: string; destinationId: string }
    >({
      query: (args) => {
        const { tripId, departureId, destinationId } = args;
        return {
          url: `occupied_seats/?trip_id=${tripId}&departure=${departureId}&destination=${destinationId}`,
        };
      },
    }),
    startSaleSession: builder.query<
      Order,
      { tripId: string; departureId: string; destinationId: string }
    >({
      query: (args) => {
        const { tripId, departureId, destinationId } = args;
        return {
          url: `start_sale_session/?trip_id=${tripId}&departure=${departureId}&destination=${destinationId}`,
        };
      },
    }),
    addTickets: builder.query<
      any,
      {
        orderId: string;
        fareName: string;
        seatNum: string;
        parentSeatNum: string;
      }
    >({
      query: (args) => {
        const { orderId, fareName, seatNum, parentSeatNum } = args;
        return {
          url: `add_tickets/?order_id=${orderId}&fare_name=${fareName}&seat_num=${seatNum}&parent_seat_num=${parentSeatNum}`,
        };
      },
    }),
    setTicketData: builder.mutation({
      query: (requestData) => {
        console.log("Request Data", requestData);
        return {
          url: `/set_ticket_data/`,
          method: "POST",
          body: requestData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    reserveOrder: builder.query({
      query: (args) => {
        const { orderId, customerEmail } = args;
        return {
          url: `reserve_order/?order_id=${orderId}&customer_email=${customerEmail}`,
        };
      },
    }),
    makePayment: builder.mutation({
      query: (args) => {
        const { orderId, amount } = args;
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Ikl2YW4iLCJ0aW1lc3RhbXAiOiIxNzAxMzQwMzY2LjgzODQyMTgifQ.nOK5TYY-a4uKU_l1DReOQyfqa-ghMcWD-J1BDJw3RKM";
        return {
          url: `make_payment/?order_id=${orderId}&amount=${amount}`,
          headers: {
            Authorization: `${token}`,
          },
        };
      },
    }),
    cancelPayment: builder.query({
      query: (args) => {
        const { orderId, amount, fareName, seatNum } = args;
        return {
          url: `api/avibus/cancel_payment/?order_id=${orderId}&amount=${amount}&fare_name=${fareName}&seat_num=${seatNum}`,
        };
      },
    }),
    checkBalance: builder.mutation({
      query: (userData) => {
        return {
          url: "/balance/",
          method: "GET",
          body: userData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useGetDirectionsQuery,
  useSearchTripCitiesQuery,
  useLazySearchTripCitiesQuery,
  useGetOccupiedSeatsQuery,
  useStartSaleSessionQuery,
  useLazyAddTicketsQuery,
  useSetTicketDataMutation,
  useLazyReserveOrderQuery,
  useMakePaymentMutation,
} = bibipTripApi;
