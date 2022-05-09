import React, { useEffect, useState } from 'react';

export default function List() {
  const [filteredCharacters, setFilteredCharacters] = useState('All');

  useEffect(() => {
    const fetchCharacters = async () => {
      if (filteredCharacters === 'All') {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const results = await res.json();
        console.log(results.results);
      } else {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filteredCharacters}`
        );
        const results = await res.json();
        console.log(results.results);
      }
    };
    fetchCharacters();
  }, [filteredCharacters]);

  const handleFilter = (e) => {
    // console.log(e.target.className);
    setFilteredCharacters(e.target.className);
    console.log(filteredCharacters);
  };

  return (
    <>
      <h3>Characters</h3>
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
