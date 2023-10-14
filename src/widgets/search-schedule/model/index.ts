const fetchDirections = async () => {
  const apiResponse = await fetch(
    "http://158.160.112.171/api/avibus/directions",
  );

  if (!apiResponse.ok) {
    throw new Error("Fetch not ok");
  }

  return await apiResponse.json();
};

export default fetchDirections;
