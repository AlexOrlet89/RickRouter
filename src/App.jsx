import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
