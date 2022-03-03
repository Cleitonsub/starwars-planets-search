async function fetchPlanetsApi() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((results) => results.json())
    .then((data) => data)
    .catch((error) => error);
}

export default fetchPlanetsApi;
