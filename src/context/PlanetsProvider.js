import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [name, setName] = useState('');
  const value = {
    data,
    filterData,
    filterByName: { name },
    functions: { setName },
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
      ((planet.name).toLowerCase()).includes(name.toLowerCase())
    )));
  }, [name]);

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
