import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function TableWars() {
  const { infoPlanets,
    namePlanet, numericFilter, fullOptions,
    setFullOptions, setNumericFilter } = useContext(PlanetContext);
  const colunn = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const rowsFiltred = (rows = infoPlanets) => {
    const rowsByName = rows.filter((planet) => planet.name.includes(namePlanet));
    const rowsByNFilters = rowsByName.filter((planet) => {
      const appliedFilter = numericFilter.map(({ info, requeriment, value }) => {
        switch (requeriment) {
        case 'maior que':
          return Number(planet[info]) > Number(value);
        case 'menor que':
          return Number(planet[info]) < Number(value);
        case 'igual a':
          return Number(planet[info]) === Number(value);
        default:
          return true;
        }
      });
      return appliedFilter.every((item) => item);
    });
    return rowsByNFilters;
  };

  const deleteFilter = ({ target: { id } }) => {
    setFullOptions([...fullOptions, id]);
    const deletingFilter = numericFilter.filter((item) => item.info !== id);
    setNumericFilter(deletingFilter);
  };

  return (
    <table>
      <caption>
        <h3>Filtros Aplicados</h3>
        {numericFilter.map(({ info, requeriment, value }) => (
          <span
            data-testid="filter"
            key={ value }
          >
            {`${info} ${requeriment} ${value}`}
            <button
              type="button"
              id={ info }
              onClick={ deleteFilter }
            >
              Excluir

            </button>
          </span>
        ))}

      </caption>
      <thead>
        <tr>
          {
            colunn.map((info, i) => <th key={ i }>{info}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {rowsFiltred().map((planet, index) => (
          <tr key={ index }>
            {
              colunn.map((info, newIndex) => (
                <td key={ newIndex }>{planet[info]}</td>
              ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}
