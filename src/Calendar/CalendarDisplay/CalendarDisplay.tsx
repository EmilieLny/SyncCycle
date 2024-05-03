import { Day } from "../Day";
import { useCalendarContext } from "../CalendarContext/useCalendarContext";
import { getEventsByDate } from "./getEventsByDate"; // TODO [Emi] : take care of the events
import { CalendarDisplayWrap, CalendarHeader } from "./CalendarDisplay.styles";

export const CalendarDisplay = () => {
  const { date, entities, labels, period, view } = useCalendarContext();
  return (
    <CalendarDisplayWrap $view={view}>
      {labels.map((label) => (
        <CalendarHeader key={label}>{label}</CalendarHeader>
      ))}
      {entities.map((d) => (
        <Day key={d.format("YYYY-MM-DD")} isSamePeriod={d.isSame(date, period)}>
          {d.format("DD")}
          {getEventsByDate(d.toDate()).map((event) => (
            <div style={{ backgroundColor: event.color }}>{event.title}</div>
          ))}
        </Day>
      ))}
    </CalendarDisplayWrap>
  );
};
