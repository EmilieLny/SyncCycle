import { Day } from "./Day";
import type { Dayjs, OpUnitType } from "dayjs";

export const CalendarDisplay = ({
  date,
  entities,
  labels,
  period,
}: {
  date: Dayjs;
  entities: Dayjs[];
  labels: string[];
  period: OpUnitType;
}) => {
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-[40px_repeat(5,1fr)] gap-[1px]	">
      {labels.map((l) => (
        <div key={l} className="grid place-items-center text-xs uppercase">
          {l}
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
