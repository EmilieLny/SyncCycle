import { useContext } from "react";
import { CalendarContext } from "./CalendarContext";

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("Calendar context is not defined!");
  return context;
};
