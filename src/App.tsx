import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "./Calendar/Calendar";
import { Button } from "@/components/ui/Button/button";
import { useCalendar } from "./Calendar/useCalendar";

function App() {
  const { date, increment, decrement, now, entities, labels } = useCalendar("monthly");

  return (
    <>
      <p className="mx-auto w-fit rotate-45 text-center text-lime-400">NIR</p>
      <div className="flex flex-row items-center justify-center gap-x-4">
        <ChevronLeft size={28} strokeWidth={1} onClick={decrement} />
        <Button className="rounded-full" onClick={now}>
          Today
        </Button>
        <ChevronRight size={28} strokeWidth={1} onClick={increment} />
      </div>

      <Calendar date={date} entities={entities} labels={labels} />
    </>
  );
}

export default App;
