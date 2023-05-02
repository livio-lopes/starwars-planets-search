import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function SortingFilter() {
  const [sortingFilter, setSortingFilter] = useState({
    colunn: 'population',
    sort: 'ASC',
  });
  const { fullOptions } = useContext(PlanetContext);
  return (
    <div>
      <label htmlFor="colunnFilter">
        Coluna:
        <select
          data-testid="column-sort"
          name="colunnFilter"
          value={ sortingFilter.colunn }
          onChange={ ({ target }) => {
            setSortingFilter({ ...sortingFilter, colunn: target.value });
          } }
        >
          {fullOptions
            .map((option, i) => (<option key={ i } value={ option }>{option}</option>))}
        </select>
      </label>
      <label htmlFor="sort">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          checked={ sortingFilter.sort === 'ASC' }
          value="ASC"
          onChange={ () => setSortingFilter({ ...sortingFilter, sort: 'ASC' }) }
        />
        Descendente
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
          checked={ sortingFilter.sort !== 'ASC' }
          value="DESC"
          onChange={ () => setSortingFilter({ ...sortingFilter, sort: 'DESC' }) }
        />
      </label>
      <button type="button">Ordernar</button>
    </div>
  );
}
