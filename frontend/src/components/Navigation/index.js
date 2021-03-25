import React, { useContext } from "react";
import {
  NavigationHeader,
  NavigationLogo,
  NavigationItems,
  NavigationUl,
  NavigationListItem,
} from "./styles";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import AuthContext from "../../context/auth-context";

function Navigation() {
  const contextAuth = useContext(AuthContext);

  return (
    <NavigationHeader>
      <NavigationLogo>GraphQL Event Planner</NavigationLogo>
      <NavigationItems>
        <NavigationUl>
          {!contextAuth.token && (
            <NavigationListItem>
              <NavLink to="/auth">Auth</NavLink>
            </NavigationListItem>
          )}
          <NavigationListItem>
            <NavLink to="/events">Events</NavLink>
          </NavigationListItem>
          {contextAuth.token && (
            <React.Fragment>
              <NavigationListItem>
                <NavLink to="/bookings">Bookings</NavLink>
              </NavigationListItem>
              <Button btnText="Log Out" onClick={contextAuth.logout} />
            </React.Fragment>
          )}
        </NavigationUl>
      </NavigationItems>
    </NavigationHeader>
  );
}

export default Navigation;
