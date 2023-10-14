export interface Direction {
  id: string;
  locality: string;
  name: string;
}

export function searchDirections(
  startingLetters: string,
  directions: Direction[],
  from: string,
) {
  if (startingLetters.trim() === "") {
    return [];
  }
  const results = directions.filter((direction) => {
    const name = direction.name.toUpperCase();
    const input = startingLetters.toUpperCase();
    return name.includes(input);
  });

  const indexOfFrom = results.findIndex(
    (direction) => direction.locality === from,
  );

  if (indexOfFrom !== -1) {
    results.splice(indexOfFrom, 1);
  }

  return results.slice(0, 5);
}
