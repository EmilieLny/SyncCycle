import { ReactNode } from "react";

import { DayWrap } from "./Day.styles";

export const Day = ({ children, isSamePeriod }: { children: ReactNode; isSamePeriod: boolean }) => {
  return <DayWrap $isSamePeriod={isSamePeriod}>{children}</DayWrap>;
};
