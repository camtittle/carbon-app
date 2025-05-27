import { Link } from "react-router";
import styled from "styled-components";

export const Nav = () => {
  return (
    <NavContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/projects">Projects</NavItem>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background-color: #f8f9fa;
  padding: 8px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

const NavItem = styled(Link)`
  display: block;
  color: black;
`