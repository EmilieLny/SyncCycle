import { useMemo } from "react";
import { Day } from "./Day";
import dayjs from "dayjs";

export const Calendar = ({ date }: { date: Date }) => {
  const arr = useMemo(() => {
    const startMonth = dayjs(date).startOf("month");
    const startDayInWeek = startMonth.day();
    const render = [];
    const startIndex = -startDayInWeek + 1;
    const endIndex = 35 - startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
      const dateDay = startMonth.add(i, "days");
      render.push({ dateDay, isSameMonth: dateDay.isSame(startMonth, "month") });
    }
    return render;
  }, [date]);

  return (
    <div className="grid grid-cols-7 grid-rows-5 gap-4">
      {arr.map((a) => (
        <Day key={a.dateDay.format("YYYY-MM-DD")} isSameMonth={a.isSameMonth}>
          {a.dateDay.format("dddd-DD")}
        </Day>
      ))}
    </div>
  );
};
