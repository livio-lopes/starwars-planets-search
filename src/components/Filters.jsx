import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import NumericFilters from './NumericFilters';
import SortingFilter from './SortingFilter';

export default function Filters() {
  const { namePlanet, setNamePlanet } = useContext(PlanetContext);

  return (
    <div>
      <label htmlFor="namePlanet">
        <input
          type="text"
          name="namePlanet"
          placeholder="Procure pelo Nome"
          value={ namePlanet }
          onChange={ ({ target: { value } }) => setNamePlanet(value) }
          data-testid="name-filter"
        />
        <button type="button">Search</button>
      </label>
      <NumericFilters />
      <SortingFilter />
    </div>
  );
}
