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
        className="flex flex-row gap-1 rounded-full bg-gray-100"
      >
        <ToggleGroup.Item
          value="monthly"
          className="rounded-full bg-white p-2 text-black data-[state=on]:bg-black data-[state=on]:text-white"
        >
          Month
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="weekly"
          className="rounded-full bg-white p-2 text-black data-[state=on]:bg-black data-[state=on]:text-white"
        >
          Week
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
