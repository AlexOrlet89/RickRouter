import React, { useEffect } from 'react';

export default function List() {
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const results = await res.json();
      console.log(results);
    };
    fetchCharacters();
  }, []);

  return <div>List</div>;
}
