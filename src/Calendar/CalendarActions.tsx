import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, ButtonGhost } from "@/components/ui/Button/Button";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { View } from "./useCalendar";
import { useCalendarContext } from "./CalendarContext/useCalendarContext";
import React from "react";
import { StyledComponentPropsWithAs } from "src/type";

type ButtonProps = React.ComponentProps<typeof Button & typeof ButtonGhost>;

type StyledButtonProps = StyledComponentPropsWithAs<ButtonProps>;

type ToggleGroupItemProps = {
  val: "monthly" | "weekly";
  selectedValue: "monthly" | "weekly";
} & StyledButtonProps;

const ToggleGroupItem = ({ val, selectedValue, ...props }: ToggleGroupItemProps) => {
  if (val === selectedValue) return <Button {...props} />;
  return <ButtonGhost {...props} />;
};

export const CalendarActions = () => {
  const { view, setView, date, increment, decrement, now } = useCalendarContext();
  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <ToggleGroup.Root
          type="single"
          value={view}
          defaultValue={view}
          onValueChange={(view) => {
            if (view) setView(view as View);
          }}
          className="inline-block rounded-full bg-gray-100"
        >
          <ToggleGroupItem as={ToggleGroup.Item} value="monthly" val="monthly" selectedValue={view}>
            Month
          </ToggleGroupItem>
          <ToggleGroupItem as={ToggleGroup.Item} value="weekly" val="weekly" selectedValue={view}>
            Week
          </ToggleGroupItem>
        </ToggleGroup.Root>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="inline-block text-4xl font-bold">{date.format("MMMM,")}</h1> &#160;
          <h1 className="inline-block text-4xl font-bold text-primary">{date.format("YYYY")}</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-4">
          <ChevronLeft size={28} strokeWidth={1} onClick={decrement} />
          <Button className="rounded-full" onClick={now}>
            Today
          </Button>
          <ChevronRight size={28} strokeWidth={1} onClick={increment} />
        </div>
      </div>
    </div>
  );
};
