import styled from "styled-components";
import { plainBlack, plainWhite } from "../../assets/styles/constants";

const NavigationHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5.5rem;
  background: ${plainWhite};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px 1px ${plainBlack};
`;

const NavigationLogo = styled.h1`
  margin: 0;
  font-size: 1rem;
  color: ${plainBlack};
`;

const NavigationItems = styled.nav`
  margin-left: 1.5rem;
`;

const NavigationUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationListItem = styled.li`
  margin: 0 1rem;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: ${plainBlack};
    &:hover,
    &:active,
    &.active {
      color: #ff3400;
    }
  }
`;

export {
  NavigationHeader,
  NavigationLogo,
  NavigationItems,
  NavigationUl,
  NavigationListItem,
};

