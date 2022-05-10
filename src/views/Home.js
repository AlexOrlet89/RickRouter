import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Detail from './Detail';
import List from './List';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <h2>Pick your own Rick and Morty</h2>
      <Switch>
        <div className={styles.homecontents}>
          <div>
            <Route path={`/`}>
              <List />
            </Route>
          </div>
          <div>
            <Route path={`/character/:id`}>
              <Detail />
            </Route>
          </div>
        </div>
      </Switch>
    </>
  );
}
