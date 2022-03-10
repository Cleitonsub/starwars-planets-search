import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByName() {
  const {
    filterByName: { inputPlanetName },
    functions: { setInputPlanetName },
  } = useContext(MyContext);

  return (
    <section>
      <label htmlFor="name-filter">
        Projeto StarWars - Trybe
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => setInputPlanetName(target.value) }
          placeholder="Filter by name"
          value={ inputPlanetName }
        />
      </label>
    </section>
  );
}

export default FilterByName;
