import { createContext, useContext, useState } from 'react';

export const CharacterContext = createContext();

//things we will put in context
//filteredcharacter state
//handlefilterfunctions

export const CharacterProvider = ({ children }) => {
  const [filter, setFilter] = useState('All');
  //   const [characters, setCharacters] = useState([]);
  return (
    <CharacterContext.Provider value={{ filter, setFilter }}>
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
