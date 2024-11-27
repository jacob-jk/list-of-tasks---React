import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: teal;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  color: #d5d2d2;

  &.active {
    color: #e2e1e1;
    font-weight: bold;
  }
`;
