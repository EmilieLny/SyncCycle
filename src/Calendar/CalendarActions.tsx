import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { View } from "./useCalendar";

export const CalendarActions = ({
  increment,
  decrement,
  now,
  view,
  setView,
}: {
  increment: () => void;
  decrement: () => void;
  now: () => void;
  view: View;
  setView: (view: View) => void;
}) => {
  return (
    <div>
      <ToggleGroup.Root
        type="single"
        value={view}
        defaultValue={view}
        onValueChange={(view) => {
          if (view) setView(view as View);
        }}
        className="inline-block rounded-full bg-gray-100"
      >
        <ToggleGroup.Item asChild value="monthly">
          <Button
            variant={"ghost"}
            className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Month
          </Button>
        </ToggleGroup.Item>
        <ToggleGroup.Item asChild value="weekly">
          <Button
            variant={"ghost"}
            className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Week
          </Button>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <div className="flex flex-row items-center justify-center gap-x-4">
        <ChevronLeft size={28} strokeWidth={1} onClick={decrement} />
        <Button className="rounded-full" onClick={now}>
          Today
        </Button>
        <ChevronRight size={28} strokeWidth={1} onClick={increment} />
      </div>
    </div>
  );
};
