import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  &.active {
    font-weight: bold;
  }

  color: white;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid white;
  }
`;
