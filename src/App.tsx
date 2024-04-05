import { Calendar } from "./Calendar/Calendar";

function App() {
  return (
    <>
      <p className="rotate-45 text-lime-400 text-center">NIR</p>
      <Calendar date={new Date("02-01-2024")} />
    </>
  );
}

export default App;
