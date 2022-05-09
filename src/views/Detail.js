import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../services/FetchCharacters';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const fetched = await fetchCharacter(id);
      //   console.log('fetched', fetched);
      setCharacter(fetched);
    };
    data();
  }, [id]);

  return (
    <>
      <h2>Character Preview</h2>
      <h3>{character.name}</h3>
      <img src={character.image}></img>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
    </>
  );
}
