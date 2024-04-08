import { CalendarActions } from "./CalendarActions";
import { CalendarDisplay } from "./CalendarDisplay";
import { useCalendar } from "./useCalendar";

export const Calendar = () => {
  const { date, increment, decrement, now, entities, labels, period } = useCalendar("monthly");

  return (
    <>
      <CalendarActions now={now} increment={increment} decrement={decrement} />
      <CalendarDisplay date={date} entities={entities} labels={labels} period={period} />
    </>
  );
};
