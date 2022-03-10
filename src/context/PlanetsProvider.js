import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputPlanetName, setInputPlanetName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '0',
  }]);
  const [columnOptions, setColumnOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  // Essa função pega os valores dos filtros que estão selecionados e os salvam no filterByNumericValues
  const handleNumericFilter = ({ target: { name, value } }) => {
    const currencyValues = filterByNumericValues.map((filter, index) => {
      const values = { ...filter };
      if (index === 0) values[name] = value;
      return values;
    });
    setFilterByNumericValues(currencyValues);
  };

  // Essa função executa os filtros ao clicar no botão de filtrar
  const handleSubmit = (event) => {
    event.preventDefault();
    let filtered = filterData;
    let options = columnOptions;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filtered = filtered.filter((planet) => Number(planet[column]) > value);
      }
      if (comparison === 'menor que') {
        filtered = filtered.filter((planet) => Number(planet[column]) < value);
      }
      if (comparison === 'igual a') {
        filtered = filtered.filter((planet) => planet[column] === value);
      }
      options = options.filter((item) => item !== column);
    });
    setFilterData(filtered);
    setColumnOptions(options);
    setFilterByNumericValues(filterByNumericValues);
  };

  // Esse useEffect será executado na montagem do componente
  useEffect(() => {
    async function handlePlanets() {
      const { results } = await fetchPlanetsApi();
      setData(results);
      setFilterData(results);
    }
    handlePlanets();
  }, []);

  // Esse useEffect é atualizado a partir do momento que 'name' é alterado
  // Ele filtra os dados de 'data' e substitui os dados em 'filterData'
  useEffect(() => {
    setFilterData(data.filter((planet) => (
      ((planet.name).toLowerCase()).includes(inputPlanetName.toLowerCase())
    )));
  }, [inputPlanetName, data]);

  const value = {
    data,
    filterData,
    columnOptions,
    filterByName: { inputPlanetName },
    functions: { setInputPlanetName, handleNumericFilter, handleSubmit },
  };

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
