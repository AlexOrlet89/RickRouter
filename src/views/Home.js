import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Detail from './Detail';
import List from './List';

export default function Home() {
  return (
    <>
      <h2>Pick your own Rick and Morty</h2>
      <Switch>
        <Route path={`/`}>
          <List />
        </Route>
        <Route path={`/character/:id`}>
          <Detail />
        </Route>
      </Switch>
    </>
  );
}
