import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../services/FetchCharacters';

export default function Detail() {
  const [character, setCharacter] = useState();
  const { id } = useParams({});

  useEffect(() => {
    const data = async () => {
      const fetched = await fetchCharacter(id);
      console.log('fetched', fetched);
      setCharacter(fetched);
    };
    data();
  }, []);

  return <div>Detail for</div>;
}
