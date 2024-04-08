import type { Dayjs } from "dayjs";

export interface CalendarState {
  increment: (currentDate: Dayjs) => Dayjs;
  decrement: (currentDate: Dayjs) => Dayjs;
  now: () => Dayjs;
  getEntities: (currentDate: Dayjs) => Dayjs[];
  labels: string[];
}
