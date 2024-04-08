import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "./Calendar/Calendar";
import { useState } from "react";
import dayjs from "dayjs";
import { Button } from "@/components/ui/Button/button";

function App() {
  const [date, setDate] = useState(new Date());
  const onNextPeriod = () => {
    setDate(dayjs(date).add(1, "month").toDate());
  };
  const onNowPeriod = () => {
    setDate(new Date());
  };
  const onBackPeriod = () => {
    setDate(dayjs(date).subtract(1, "month").toDate());
  };
  return (
    <>
      <p className="rotate-45 text-lime-400 text-center w-fit mx-auto">NIR</p>
      <div className="flex flex-row justify-center items-center gap-x-4">
        <ChevronLeft size={28} strokeWidth={1} onClick={onBackPeriod} />
        <Button className="rounded-full" onClick={onNowPeriod}>
          Today
        </Button>
        <ChevronRight size={28} strokeWidth={1} onClick={onNextPeriod} />
      </div>

      <Calendar date={date} />
    </>
  );
}

export default App;
