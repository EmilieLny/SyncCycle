import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff8f9e;
  border-radius: 9999px;
  border: none;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
`;

export const ButtonGhost = styled(Button)`
  background-color: #f3f4f6;
  color: #000;
`;
