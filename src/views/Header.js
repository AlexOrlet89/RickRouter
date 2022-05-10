import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import styles from './Header.css';

export default function Header() {
  const { setFilter, setPage } = useCharacterContext();

  const handleFilter = (e) => {
    // console.log(e.target.className);
    setFilter(e.target.className);
    setPage(1);
  };

  console.log(location.pathname);

  return (
    <>
      <h1>Pick your own Rick and Morty</h1>
      <Link to="/">
        <h3>Back to Splash</h3>
      </Link>
      <Link to={{ pathname: '/profile', state: { from: location.pathname } }}>
        <h3>Profile</h3>
      </Link>
      <div className={styles.filter}>
        <h5 className="All" onClick={(e) => handleFilter(e)}>
          All
        </h5>
        <h5 className="Rick" onClick={(e) => handleFilter(e)}>
          Ricks
        </h5>
        <h5 className="Morty" onClick={(e) => handleFilter(e)}>
          Morties
        </h5>
      </div>
    </>
  );
}
