import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [infoPlanets, setInfoPlanets] = useState([]);
  const [namePlanet, setNamePlanet] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [fullOptions, setFullOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const deleteResidents = (list) => {
    setInfoPlanets(list.map((planet) => {
      delete planet.residents;
      return planet;
    }));
  };

  useEffect(() => {
    const reqInfoPlanets = async () => {
      fetch('https://swapi.dev/api/planets')
        .then((response) => response.json())
        .then((data) => deleteResidents(data.results));
    };
    reqInfoPlanets();
  }, []);
  const globalState = {
    infoPlanets,
    namePlanet,
    setNamePlanet,
    setInfoPlanets,
    deleteResidents,
    numericFilter,
    setNumericFilter,
    fullOptions,
    setFullOptions,
  };
  return (
    <PlanetContext.Provider value={ globalState }>
      <div>
        {children}
      </div>
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetProvider;
