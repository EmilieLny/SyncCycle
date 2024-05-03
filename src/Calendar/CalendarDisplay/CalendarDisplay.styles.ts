import styled from "styled-components";
import { View } from "../useCalendar";
import { Center } from "@/components/ui/Center/Center";

export const CalendarDisplayWrap = styled.div<{ $view: View }>`
  display: grid;
  flex: 1 1 0%;
  gap: 1px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: ${({ $view }) => ($view === "monthly" ? "40px repeat(5, 1fr)" : "40px 1fr")};
`;
export const CalendarHeader = styled(Center)`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  text-transform: uppercase;
`;
