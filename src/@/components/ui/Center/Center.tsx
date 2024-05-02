import styled from "styled-components";

const StyledCenter = styled.div<{ align: Align }>`
  display: flex;
  justify-content: ${({ align }) =>
    align === "both" || align === "horizontal" ? "center" : "initial"};
  align-items: ${({ align }) => (align === "both" || align === "vertical" ? "center" : "initial")};
`;

type Align = "both" | "horizontal" | "vertical";

export const Center = ({
  children,
  align = "both",
}: {
  children: React.ReactNode;
  align: Align;
}) => {
  return <StyledCenter align={align}>{children}</StyledCenter>;
};
