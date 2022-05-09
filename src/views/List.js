import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/FetchCharacters';
import Detail from './Detail';

export default function List() {
  const { filter, characters, setCharacters } = useCharacterContext();

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
    console.log('characters', characters);
  }, [filter]);

  return (
    <>
      <h3>{filter} Characters</h3>
      <div>
        <ul>
          {characters.map((character) => (
            <Link key={character.name} to={`/character/${character.id}`}>
              <li>{character.name}</li>
            </Link>
          ))}
        </ul>
        <Route path={`/character/:id`}>
          <Detail />
        </Route>
      </div>
    </>
  );
}
