import styled from "styled-components";
import { plainBlack, plainWhite, blue } from "../../assets/styles/constants";

const NavigationHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5.5rem;
  background: ${blue};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px 1px ${plainBlack};
`;

const NavigationLogo = styled.h1`
  margin: 0;
  color: ${plainWhite};
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
    color: ${plainWhite};
    padding: 2px 10px;
    &:hover,
    &:active,
    &.active {
      color: ${plainBlack};
      background-color: ${plainWhite};
      border-radius: 4px;
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

