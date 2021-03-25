import {
  NavigationHeader,
  NavigationLogo,
  NavigationItems,
  NavigationUl,
  NavigationListItem,
} from "./styles";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <NavigationHeader>
      <NavigationLogo>
        <h1>GraphQL Event Planner</h1>
      </NavigationLogo>
      <NavigationItems>
        <NavigationUl>
          <NavigationListItem>
            <NavLink to="/auth">Auth</NavLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavLink to="/events">Events</NavLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavLink to="/bookings">Bookings</NavLink>
          </NavigationListItem>
        </NavigationUl>
      </NavigationItems>
    </NavigationHeader>
  );
}

export default Navigation;

