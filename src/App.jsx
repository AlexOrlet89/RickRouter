import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import Profile from './views/Profile';
import Welcome from './views/Welcome';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/character">
          <Header />
          <Home />
        </Route>
      </Switch>
    </>
  );
}
