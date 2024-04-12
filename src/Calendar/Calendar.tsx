import { CalendarActions } from "./CalendarActions";
import { CalendarDisplay } from "./CalendarDisplay";
import { useCalendar } from "./useCalendar";

export const Calendar = () => {
  const { date, increment, decrement, now, entities, labels, period, setView, view } =
    useCalendar("monthly");

  return (
    <>
      <CalendarActions
        now={now}
        increment={increment}
        decrement={decrement}
        view={view}
        setView={setView}
        date={date}
      />
      <CalendarDisplay
        date={date}
        entities={entities}
        labels={labels}
        period={period}
        view={view}
      />
    </>
  );
};
