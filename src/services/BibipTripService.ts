import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Points = {
  departureCity: string;
  destinationCity: string;
  date: string;
};
export const bibipTripApi = createApi({
  reducerPath: "directionsAPI",
  tagTypes: ["Directions"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bibiptrip.com/api/avibus",
  }), // Define your API base URL
  endpoints: (builder) => ({
    getDirections: builder.query({
      query: () => `/directions/`,
    }),
    searchTripCities: builder.query<Trip[], Points>({
      query: (points: Points) => ({
        url: `search_trips_cities/?departure_city=${points.departureCity}&destination_city=${points.destinationCity}&date=${points.date}`,
      }),
    }),
  }),
});

export const { useGetDirectionsQuery, useLazySearchTripCitiesQuery } =
  bibipTripApi;
