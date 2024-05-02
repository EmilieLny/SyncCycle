import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  background-color: #ff8f9e;
  color: #fff;
  border-radius: 9999px;
`;

export const ButtonGhost = styled(Button)`
  color: #000;
  background-color: #f3f4f6;
`;
