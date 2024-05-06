import { Day } from "../Day/Day";
import { useCalendarContext } from "../CalendarContext/useCalendarContext";
import { CalendarDisplayWrap, CalendarHeader } from "./CalendarDisplay.styles";
import { useGetEventsQuery } from "../../services/events.api";
import { CalendarEvent } from "src/services/events.api.type";
import dayjs from "dayjs";

export const CalendarDisplay = () => {
  const { date, entities, labels, period, view } = useCalendarContext();
  const {
    data,
    // error,
    isLoading,
  } = useGetEventsQuery();

  if (isLoading) return <div>Loading...</div>;

  const eventsByDate = data!.eventsByDate || [];

  const formatEvent = (date: Date): CalendarEvent[] => {
    const dateFormatted = dayjs(date).format("YYYY-MM-DD");
    return eventsByDate[dateFormatted] || [];
  };

  return (
    <CalendarDisplayWrap $view={view}>
      {labels.map((label) => (
        <CalendarHeader key={label}>{label}</CalendarHeader>
      ))}
      {entities.map((d) => (
        <Day key={d.format("YYYY-MM-DD")} isSamePeriod={d.isSame(date, period)}>
          {d.format("DD")}
          {formatEvent(d.toDate()).map((event) => (
            <div style={{ backgroundColor: event.color }} key={event.id}>
              {event.title}
            </div>
          ))}
        </Day>
      ))}
    </CalendarDisplayWrap>
  );
};
