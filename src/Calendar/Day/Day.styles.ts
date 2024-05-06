import styled from "styled-components";

export const DayWrap = styled.div<{ $isSamePeriod: boolean }>`
  padding: 0.25rem;
  text-align: center;
  font-size: 0.75rem;
  outline: 1px solid #e5e7eb;
  font-weight: ${({ $isSamePeriod }) => ($isSamePeriod ? "normal" : "100")};
`;
