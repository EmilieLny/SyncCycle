import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, ButtonDefault } from "@/components/ui/Button/Button";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { View } from "../useCalendar";
import { useCalendarContext } from "../CalendarContext/useCalendarContext";
import { Center } from "@/components/ui/Center/Center";
import {
  CalendarActionsWrap,
  ToggleGroupRoot,
  CenterJustified,
  NavigationWrap,
  DateMonth,
  DateYear,
} from "./CalendarActions.styles";
import { ToggleGroupItemProps } from "./CalendarAction.types";

const ToggleGroupItem = ({ val, selectedValue, ...props }: ToggleGroupItemProps) => {
  if (val === selectedValue) return <Button {...props} />;
  return <ButtonDefault {...props} />;
};

export const CalendarActions = () => {
  const { view, setView, date, increment, decrement, now } = useCalendarContext();
  return (
    <CalendarActionsWrap>
      <Center>
        <ToggleGroupRoot
          type="single"
          value={view}
          defaultValue={view}
          onValueChange={(view) => {
            if (view) setView(view as View);
          }}
        >
          <ToggleGroupItem as={ToggleGroup.Item} value="monthly" val="monthly" selectedValue={view}>
            Month
          </ToggleGroupItem>
          <ToggleGroupItem as={ToggleGroup.Item} value="weekly" val="weekly" selectedValue={view}>
            Week
          </ToggleGroupItem>
        </ToggleGroupRoot>
      </Center>

      <CenterJustified align="vertical">
        <div>
          <DateMonth>{date.format("MMMM,")}</DateMonth> &#160;
          <DateYear>{date.format("YYYY")}</DateYear>
        </div>

        <NavigationWrap>
          <ChevronLeft size={28} strokeWidth={1} onClick={decrement} />
          <Button onClick={now}>Today</Button>
          <ChevronRight size={28} strokeWidth={1} onClick={increment} />
        </NavigationWrap>
      </CenterJustified>
    </CalendarActionsWrap>
  );
};
