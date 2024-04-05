import { CircleChevronLeft, CircleChevronRight, CircleChevronDown } from "lucide-react";
import { Calendar } from "./Calendar/Calendar";
import { useState } from "react";
import dayjs from "dayjs";

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
      <div className="flex flex-row justify-center">
        <CircleChevronLeft size={28} strokeWidth={0.75} onClick={onBackPeriod} />
        <CircleChevronDown size={28} strokeWidth={0.75} onClick={onNowPeriod} />
        <CircleChevronRight size={28} strokeWidth={0.75} onClick={onNextPeriod} />
      </div>

      <Calendar date={date} />
    </>
  );
}

export default App;
