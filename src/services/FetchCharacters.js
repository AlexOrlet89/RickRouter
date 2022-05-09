export async function fetchCharacters(filter, page) {
  if (filter === 'All') {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const results = await res.json();
    // console.log(results);
    return results;
  } else {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`
    );
    const results = await res.json();
    // console.log(results);
    return results;
  }
}

export async function fetchCharacter(id) {
  // console.log(id);
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const results = await res.json();
  // console.log(results);
  return results;
}
