import React from 'react';
import './App.css';
import HomeWars from './pages/HomeWars';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <HomeWars />
    </PlanetsProvider>
  );
}

export default App;
