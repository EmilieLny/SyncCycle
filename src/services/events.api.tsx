import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CalendarEvent, GetEventsResponse } from "./events.api.type";
import dayjs from "dayjs";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5173",
  }), // TODO: change this to the actual API URL
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventsResponse, void>({
      query: () => `/CalendarEvents.json`,
      transformResponse: (response: CalendarEvent[]) => ({
        events: response,
        eventsByDate: response.reduce(
          (acc, event) => {
            const key = dayjs(event.startDate).format("YYYY-MM-DD");
            if (!acc[key]) acc[key] = [];
            acc[key].push(event);
            return acc;
          },
          {} as Record<string, CalendarEvent[]>,
        ),
      }),
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
