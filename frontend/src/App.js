import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AppContainer } from './styles';
import Auth from './containers/Auth';
import Events from './containers/Events';
import Bookings from './containers/Bookings';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <AppContainer>
          <Switch>
            <Redirect from="/" to="/auth" exact/>
            <Route path="/auth" component={Auth}/>
            <Route path="/events" component={Events}/>
            <Route path="/bookings" component={Bookings}/>
          </Switch>
        </AppContainer>
      </>
    </BrowserRouter>
  );
}

export default App;
