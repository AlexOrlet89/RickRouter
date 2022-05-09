import { createContext, useContext, useState } from 'react';

export const CharacterContext = createContext();

//things we will put in context
//filteredcharacter state
//handlefilterfunctions

export const CharacterProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [characters, setCharacters] = useState([]);

  return (
    <CharacterContext.Provider
      value={{ filter, setFilter, characters, setCharacters, page, setPage }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new Error('must be used within provider');
  }

  return context;
};
