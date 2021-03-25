import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { AppContainer } from "./styles";
import Auth from "./containers/Auth";
import Events from "./containers/Events";
import Bookings from "./containers/Bookings";
import Navigation from "./components/Navigation";
import AuthContext from "./context/auth-context";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider
          value={{ token: token, userId: userId, login: login, logout: logout }}
        >
          <Navigation />
          <AppContainer>
            <Switch>
              {token && <Redirect from="/" to="/events" exact />}
              {token && <Redirect from="/auth" to="/events" exact />}
              {!token && <Route path="/auth" component={Auth} />}
              <Route path="/events" component={Events} />
              {token && <Route path="/bookings" component={Bookings} />}
              {!token && <Redirect to="/auth" exact />}
            </Switch>
          </AppContainer>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
