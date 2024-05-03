import { CalendarActions } from "./CalendarActions/CalendarActions";
import { CalendarContext } from "./CalendarContext/CalendarContext";
import { CalendarDisplay } from "./CalendarDisplay";
import { useCalendar } from "./useCalendar";

export const Calendar = () => {
  const calendar = useCalendar();

  return (
    <CalendarContext.Provider value={calendar}>
      <CalendarActions />
      <CalendarDisplay />
    </CalendarContext.Provider>
  );
};
