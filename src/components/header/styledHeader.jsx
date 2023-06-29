import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
    padding-left: 15px;
    padding-right: 15px;
    text-decoration: none;
    color: #606060;
  &.active {
    color: #000000;
  }
  &:hover {
    color: #009cf6;}
`;
export const StyledNav = styled.div`
width: 1400px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;