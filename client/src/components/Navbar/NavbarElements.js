import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  z-index: 12;
`;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// padding: 0 1rem;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:visited,
  &:link {
    color: #edf5e1;
    text-decoration: none;
  }

  &:hover,
  &:active,
  &.active {
    color: #000000;
  }
`;
// &:visited,
// &:link {
//   color: #ffffff;
//   text-decoration: none;
// }
// &:hover,
// &:link,
// &:focus,
// &:active {
//   color: #000000;
// }

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavTitle = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 1.5rem;
//   height: 100%;
//   cursor: pointer;
//   text-decoration: none;
// `;

// display: flex;
// align-items: center;
// margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
// @media screen and (max-width: 768px) {
//   display: none;
// }

// font-size: 1.9rem;
// color: black;
// text-align: center;
// display: flex;
