import React from 'react';
import { useCharacterContext } from '../context/CharacterContext';

export default function Header() {
  const { setFilter, setPage } = useCharacterContext();

  const handleFilter = (e) => {
    // console.log(e.target.className);
    setFilter(e.target.className);
    setPage(1);
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
