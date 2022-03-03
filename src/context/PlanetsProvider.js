import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  async function handlePlanets() {
    const fetchPlanets = await fetchPlanetsApi();
    setData(fetchPlanets);
  }

  // Esse useEffect será executado na montagem do componente
  useEffect(() => {
    handlePlanets();
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
