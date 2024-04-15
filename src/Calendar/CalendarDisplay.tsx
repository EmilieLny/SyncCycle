import { twMerge } from "tailwind-merge";
import { Day } from "./Day";
import { useCalendarContext } from "./CalendarContext/useCalendarContext";

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
        <Day key={d.format("YYYY-MM-DD")} isSameMonth={d.isSame(date, period)}>
          {d.format("DD")}
        </Day>
      ))}
    </div>
  );
};
