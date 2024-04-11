import type { Dayjs, OpUnitType } from "dayjs";

export interface CalendarState {
  increment: (date: Dayjs) => Dayjs;
  decrement: (date: Dayjs) => Dayjs;
  now: () => Dayjs;
  getEntities: (date: Dayjs) => Dayjs[];
  getLabels: () => string[];
  period: OpUnitType;
}
