import dayjs from "dayjs";
import { CalendarEvent } from "src/services/events.api.type";

const eventsByDate = {} as Record<string, CalendarEvent[]>;

export const getEventsByDate = (date: Date) => {
  const dateFormatted = dayjs(date).format("YYYY-MM-DD");
  return eventsByDate[dateFormatted] || [];
};
