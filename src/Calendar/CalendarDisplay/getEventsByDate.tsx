import Events from "../../MockData/Events.json";
import dayjs from "dayjs";

type Event = (typeof Events)[number];
const eventsByDate = Events.reduce(
  (acc, event) => {
    const key = dayjs(event.startDate).format("YYYY-MM-DD");
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  },
  {} as Record<string, Event[]>,
);
export const getEventsByDate = (date: Date) => {
  const dateFormatted = dayjs(date).format("YYYY-MM-DD");
  return eventsByDate[dateFormatted] || [];
};
