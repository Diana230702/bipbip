import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    addTickets: builder.query({
      query: (args) => {
        const { orderId, fareName, seatNum, parentSeatNum } = args;
        return {
          url: `add_tickets/?order_id=${orderId}&fare_name=${fareName}&seat_num=${seatNum}&parent_seat_num=${parentSeatNum}`,
        };
      },
    }),
    setTicketData: builder.mutation({
      query: (requestData) => ({
        url: `/set_ticket_data/`,
        method: "POST",
        body: requestData,
      }),
    }),
  }),
});

export const {
  useGetDirectionsQuery,
  useSearchTripCitiesQuery,
  useLazySearchTripCitiesQuery,
  useGetOccupiedSeatsQuery,
  useStartSaleSessionQuery,
  useSetTicketDataMutation,
} = bibipTripApi;
