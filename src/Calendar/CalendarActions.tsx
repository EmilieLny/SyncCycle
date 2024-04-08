import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button/button";

export const CalendarActions = ({
  increment,
  decrement,
  now,
}: {
  increment: () => void;
  decrement: () => void;
  now: () => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-4">
      <ChevronLeft size={28} strokeWidth={1} onClick={decrement} />
      <Button className="rounded-full" onClick={now}>
        Today
      </Button>
      <ChevronRight size={28} strokeWidth={1} onClick={increment} />
    </div>
  );
};
