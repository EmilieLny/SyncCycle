import { Center } from "@/components/ui/Center/Center";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import styled from "styled-components";

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: inline-block;
  border-radius: 9999px;
  background-color: #f3f4f6;
`;

export const CenterJustified = styled(Center)`
  justify-content: space-between;
`;

export const CalendarActionsWrap = styled.div`
  padding: 16px;
`;

export const NavigationWrap = styled(Center)`
  gap: 16px;
`;

export const DateMonth = styled.h1`
  display: inline-block;
  font-size: 2.25rem /* 36px */;
  line-height: 2.5rem /* 40px */;
  font-weight: bold;
`;

export const DateYear = styled.h1`
  display: inline-block;
  font-size: 2.25rem /* 36px */;
  line-height: 2.5rem /* 40px */;
  font-weight: bold;
  color: #ff8f9e;
`;
