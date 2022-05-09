import React, { useEffect, useState } from 'react';
import { useCharacterContext } from '../context/CharacterContext';

export default function List() {
  const { filter, setFilter } = useCharacterContext();

  useEffect(() => {
    const fetchCharacters = async () => {
      if (filter === 'All') {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const results = await res.json();
        console.log(results);
      } else {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filter}`
        );
        const results = await res.json();
        console.log(results);
      }
    };
    fetchCharacters();
  }, [filter]);

  return (
    <>
      <h3>Characters</h3>
    </>
  );
}
