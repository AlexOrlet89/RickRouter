import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/FetchCharacters';

export default function List() {
  const { filter, characters, setCharacters } = useCharacterContext();
  const { url, path } = useRouteMatch();
  console.log(url, path);

  useEffect(() => {
    // console.log(filter);
    const data = async () => {
      const fetched = await fetchCharacters(filter);
      //   console.log(fetched);
      setCharacters(fetched);
      //   console.log(characters);
    };
    data();
    // console.log('characters on load', characters);
  }, []);

  useEffect(async () => {
    const data = await fetchCharacters(filter);
    setCharacters(data);
    // console.log('characters', characters);
  }, [filter]);

  return (
    <>
      <h3>{filter} Characters</h3>
      <ul>
        {characters.map((character) => (
          //   <Link to={url}>
          <li key={character.name}>{character.name}</li>
          //   </Link>
        ))}
      </ul>
    </>
  );
}
