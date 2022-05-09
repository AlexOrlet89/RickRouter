import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/FetchCharacters';
import Detail from './Detail';

export default function List() {
  const [maxPage, setMaxPage] = useState(1);

  const { filter, characters, setCharacters, setPage, page } =
    useCharacterContext();

  useEffect(() => {
    // console.log(filter);
    const data = async () => {
      const fetched = await fetchCharacters(filter, page);
      setMaxPage(fetched.info.pages);
      setCharacters(fetched.results);
      //   console.log(characters);
    };
    data();
    // console.log('characters on load', characters);
  }, []);

  useEffect(async () => {
    const data = await fetchCharacters(filter, page);
    setMaxPage(data.info.pages);
    console.log(data.info.pages);
    setCharacters(data.results);
  }, [filter, page]);

  const handleNextPage = () => {
    if (page === maxPage) {
      return;
    }
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
      <h5>page {page}</h5>
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
