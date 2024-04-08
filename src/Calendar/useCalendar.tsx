import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { CalendarState } from "./CalendarState.type";

export const weeklyView: CalendarState = {
  increment: (date) => date.add(1, "week"),
  decrement: (date) => date.subtract(1, "week"),
  now: () => dayjs(),
  getEntities: (date) => {
    const start = date.startOf("week");
    return Array.from({ length: 7 }).map((_, index) => start.add(index, "day"));
  },
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export const monthlyView: CalendarState = {
  increment: (date) => date.add(1, "month"),
  decrement: (date) => date.subtract(1, "month"),
  now: () => dayjs(),
  getEntities: (date) => {
    const startMonth = date.startOf("month");
    const startDayInWeek = startMonth.day();
    const entities = [];
    const startIndex = -startDayInWeek + 1;
    const endIndex = 35 + startIndex;
    for (let i = startIndex; i < endIndex; i++) {
      const date = startMonth.add(i, "days");
      entities.push(date);
    }
    return entities;
  },
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export const useCalendar = (initialView = "monthly") => {
  const [date, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState(initialView);

  const viewStrategy = useMemo(() => {
    switch (view) {
      case "weekly":
        return weeklyView;
      case "monthly":
        return monthlyView;
      default:
        throw new Error(`Unsupported view type: ${view}`);
    }
  }, [view]);

  const increment = useCallback(
    () => setCurrentDate((current) => viewStrategy.increment(current)),
    [viewStrategy],
  );
  const decrement = useCallback(
    () => setCurrentDate((current) => viewStrategy.decrement(current)),
    [viewStrategy],
  );
  const now = useCallback(() => setCurrentDate(viewStrategy.now()), [viewStrategy]);
  const entities = useMemo(() => viewStrategy.getEntities(date), [viewStrategy, date]);

  return { date, increment, decrement, now, entities, setView, labels: viewStrategy.labels };
};
