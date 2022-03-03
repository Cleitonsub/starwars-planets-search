import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    filterByName: { name },
    functions: { setName },
  } = useContext(MyContext);

  return (
    <section>
      <label htmlFor="name-filter">
        Projeto StarWars - Trybe
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Filter by name"
          value={ name }
        />
      </label>
    </section>
  );
}

export default Filters;
