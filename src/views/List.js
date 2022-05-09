import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/FetchCharacters';
import Detail from './Detail';

export default function List() {
  const [page, setPage] = useState(1);
  const { filter, characters, setCharacters } = useCharacterContext();

  useEffect(() => {
    // console.log(filter);
    const data = async () => {
      const fetched = await fetchCharacters(filter, page);
      //   console.log(fetched);
      setCharacters(fetched);
      //   console.log(characters);
    };
    data();
    // console.log('characters on load', characters);
  }, []);

  useEffect(async () => {
    const data = await fetchCharacters(filter, page);
    setCharacters(data);
  }, [filter, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
  };

  return (
    <>
      <h3>{filter} Characters</h3>
      <div>
        <ul>
          <li onClick={handleNextPage}>NextPage</li>
          {characters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <li>{character.name}</li>
            </Link>
          ))}
          <li onClick={handlePrevPage}>PrevPage</li>
        </ul>
        <Route path={`/character/:id`}>
          <Detail />
        </Route>
      </div>
    </>
  );
}
