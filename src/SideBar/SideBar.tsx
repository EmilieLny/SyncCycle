import { CalendarHeart, CalendarPlus, SquareCheckBig } from "lucide-react";
import styled from "styled-components";

const StyledSideBar = styled.div`
  height: 100%;
  background: rgb(255, 143, 158);
  background: linear-gradient(354deg, rgba(255, 143, 158, 1) 33%, rgba(255, 165, 0, 1) 100%);
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  justify-content: start;
  gap: 12px;
`;

const CycleSetting = styled(CalendarHeart)`
  color: #fff;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

const AddEvents = styled(CalendarPlus)`
  color: #fff;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

const UpcomingTasks = styled(SquareCheckBig)`
  color: #fff;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const SideBar = () => (
  <StyledSideBar>
    <CycleSetting />
    <AddEvents />
    <UpcomingTasks />
  </StyledSideBar>
);
