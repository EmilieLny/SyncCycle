import { DayWrap } from "./Day.styles";
import { Dayjs } from "dayjs";
import { CalendarEvent } from "src/services/events.api.type";

export const Day = ({
  isSamePeriod,
  date,
  events,
}: {
  isSamePeriod: boolean;
  date: Dayjs;
  events: CalendarEvent[];
}) => {
  return (
    <DayWrap $isSamePeriod={isSamePeriod}>
      {date.format("DD")}
      {events.map((event) => (
        <div style={{ backgroundColor: event.color }} key={event.id}>
          {event.title}
        </div>
      ))}
    </DayWrap>
  );
};
