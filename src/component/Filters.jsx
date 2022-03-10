import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    columnOptions,
    functions: { handleNumericFilter, handleSubmit },
  } = useContext(MyContext);
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ handleNumericFilter }
        >
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparação
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ handleNumericFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        min="0"
        defaultValue="0"
        onChange={ handleNumericFilter }
      />
      <button type="submit" data-testid="button-filter">Adicionar filtro</button>
    </form>
  );
}

export default Filters;
