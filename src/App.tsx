import { Calendar } from "./Calendar/Calendar";

import styled from "styled-components";

const NirWrap = styled.p`
  margin: auto;
  width: fit-content;
  transform: rotate(45deg);
  text-align: center;
  color: limegreen;
`;

function App() {
  return (
    <>
      <NirWrap>NIR</NirWrap>
      <Calendar />
    </>
  );
}

export default App;
