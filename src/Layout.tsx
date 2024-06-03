import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <StyledLayout>{children}</StyledLayout>
);
