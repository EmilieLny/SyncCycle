import styled from "styled-components";
import { CalendarActions } from "./CalendarActions/CalendarActions";
import { CalendarContext } from "./CalendarContext/CalendarContext";
import { CalendarDisplay } from "./CalendarDisplay/CalendarDisplay";
import { useCalendar } from "./useCalendar";

const CalendarLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const Calendar = () => {
  const calendar = useCalendar();

  return (
    <CalendarContext.Provider value={calendar}>
      <CalendarLayout>
        <CalendarActions />
        <CalendarDisplay />
      </CalendarLayout>
    </CalendarContext.Provider>
  );
};
