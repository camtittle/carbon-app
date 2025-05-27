import styled from "styled-components";

type CardProps = { children: React.ReactNode, label: string }

export const Card = ({ children, label }: CardProps) => {
  return <StyledCard aria-label={label}>{children}</StyledCard>;
}

export const StyledCard = styled.article`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 200px;
  min-height: 200px;
`