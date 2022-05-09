import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';

export default function Header() {
  const { filter, setFilter } = useCharacterContext();

  const handleFilter = (e) => {
    // console.log(e.target.className);
    setFilter(e.target.className);
  };

  return (
    <>
      <div>Header</div>
      <h5 className="All" onClick={(e) => handleFilter(e)}>
        All
      </h5>
      <h5 className="Rick" onClick={(e) => handleFilter(e)}>
        Ricks
      </h5>
      <h5 className="Morty" onClick={(e) => handleFilter(e)}>
        Morties
      </h5>
    </>
  );
}
