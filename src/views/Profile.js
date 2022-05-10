import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import styles from './Profile.css';

export default function Profile() {
  const { rick, morty } = useCharacterContext();
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };
  console.log(from);

  const handleBack = () => {
    history.replace(from);
  };

  return (
    <>
      <div>
        <h1>Your Personal Rick and Morty</h1>
        <div className={styles.rickandmorty}>
          <div>
            <h2>{rick.name}</h2>
            <img src={rick.image}></img>
            <h3>{rick.status}</h3>
            <h3>{rick.species}</h3>
          </div>
          <div>
            <h2>{morty.name}</h2>
            <img src={morty.image}></img>
            <h3>{morty.status}</h3>
            <h3>{morty.species}</h3>
          </div>
        </div>
        <button onClick={handleBack}>Back to Characters</button>
      </div>
    </>
  );
}
