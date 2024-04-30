import { twMerge } from "tailwind-merge";
import { Day } from "./Day";
import { useCalendarContext } from "./CalendarContext/useCalendarContext";
import Events from "../MockData/Events.json";
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

const getEventsByDate = (date: Date) => {
  const dateFormatted = dayjs(date).format("YYYY-MM-DD");
  return eventsByDate[dateFormatted] || [];
};

export const CalendarDisplay = () => {
  const { date, entities, labels, period, view } = useCalendarContext();
  return (
    <div
      className={twMerge(
        "grid flex-1 grid-cols-7 gap-[1px] ",
        view === "monthly" && "grid-rows-[40px_repeat(5,1fr)]",
        view === "weekly" && "grid-rows-[40px_1fr]",
      )}
    >
      {labels.map((label) => (
        <div key={label} className="grid place-items-center text-xs uppercase">
          {label}
        </div>
      ))}
      {entities.map((d) => (
        <Day key={d.format("YYYY-MM-DD")} isSamePeriod={d.isSame(date, period)}>
          {d.format("DD")}
          {getEventsByDate(d.toDate()).map((event) => (
            <div style={{ backgroundColor: event.color }}>{event.title}</div>
          ))}
        </Day>
      ))}
    </div>
  );
};
