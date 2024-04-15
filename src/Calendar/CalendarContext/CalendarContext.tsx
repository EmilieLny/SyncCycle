import { createContext } from "react";
import { useCalendar } from "../useCalendar";

type ContextType = ReturnType<typeof useCalendar>;

export const CalendarContext = createContext<ContextType | undefined>(undefined);
