import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacter } from '../services/FetchCharacters';

export default function Detail() {
  const { setRick, setMorty } = useCharacterContext();
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

  let trueRick = String(character.name).includes('Rick');
  let trueMorty = String(character.name).includes('Morty');

  const handleRick = () => {
    setRick(character);
    window.alert('Rick Set!');
  };
  const handleMorty = () => {
    setMorty(character);
    window.alert('Morty Set!');
  };

  return (
    <>
      <h2>Character Preview</h2>
      <h3>{character.name}</h3>
      <img src={character.image}></img>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      {trueRick && <button onClick={handleRick}>Add Rick</button>}
      {trueMorty && <button onClick={handleMorty}>Add Morty</button>}
    </>
  );
}
