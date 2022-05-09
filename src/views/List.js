import React, { useEffect } from 'react';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/FetchCharacters';

export default function List() {
  const { filter, characters, setCharacters } = useCharacterContext();
  console.log(characters);
  //   useEffect(() => {
  //     const fetchCharacters = async () => {
  //       if (filter === 'All') {
  //         const res = await fetch(`https://rickandmortyapi.com/api/character`);
  //         const results = await res.json();
  //         console.log(results);
  //       } else {
  //         const res = await fetch(
  //           `https://rickandmortyapi.com/api/character/?name=${filter}`
  //         );
  //         const results = await res.json();
  //         console.log(results);
  //       }
  //     };
  //     fetchCharacters();
  //   }, [filter]);

  useEffect(() => {
    console.log(filter);
    const data = async () => {
      const fetched = await fetchCharacters(filter);
      //   console.log(fetched);
      setCharacters(fetched);
      //   console.log(characters);
    };
    data();
    console.log('characters on load', characters);
  }, []);

  //   useEffect(async () => {
  //     const data = await fetchCharacters(filter);
  //     setCharacters(data);
  //     console.log('characters', characters);
  //   }, [filter]);

  return (
    <>
      <h3>Characters</h3>
    </>
  );
}
