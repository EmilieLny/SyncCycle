import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { CalendarState } from "./CalendarState.type";
import "dayjs/locale/en";
import weekday from "dayjs/plugin/weekday";
import updateLocale from "dayjs/plugin/updateLocale";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekStart: 1,
});

export type View = "monthly" | "weekly";

export const weeklyView: CalendarState = {
  increment: (date) => date.add(1, "week"),
  decrement: (date) => date.subtract(1, "week"),
  now: () => dayjs(),
  getEntities: (date) => {
    // dayjs().locale("en").format();
    const start = dayjs(date).weekday(0);
    return Array.from({ length: 7 }).map((_, index) => start.weekday(index));
  },
  getLabels: () => {
    const start = dayjs().weekday(0);
    return Array.from({ length: 7 }).map((_, index) => start.weekday(index).format("ddd"));
  },
  period: "week",
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
  getLabels: () => {
    const start = dayjs().weekday(0);
    return Array.from({ length: 7 }).map((_, index) => start.weekday(index).format("ddd"));
  },
  period: "month",
};

export const useCalendar = (initialView: View = "monthly") => {
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
  const labels = useMemo(() => viewStrategy.getLabels(), [viewStrategy]);

  const { period } = viewStrategy;

  return { date, increment, decrement, now, entities, setView, labels, period, view };
};
