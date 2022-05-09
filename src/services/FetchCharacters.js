export async function fetchCharacters(filter) {
  if (filter === 'All') {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const results = await res.json();
    // console.log(results);
    return results.results;
  } else {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    const results = await res.json();
    // console.log(results);
    return results.results;
  }
}

export async function fetchCharacter(id) {
  console.log(id);
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const results = await res.json();
  console.log(results);
  return results;
}
