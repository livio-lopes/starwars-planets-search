import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function NumericFilters() {
  const [info, setInfo] = useState('population');
  const [requeriment, setRequeriment] = useState('maior que');
  const [value, setValue] = useState('0');
  const { numericFilter,
    setNumericFilter, fullOptions, setFullOptions,
  } = useContext(PlanetContext);

  const handleClick = () => {
    const selectedFilter = { info, requeriment, value };
    const filterOptions = fullOptions.filter((item) => item !== selectedFilter.info);
    setNumericFilter([...numericFilter, selectedFilter]);
    setFullOptions(filterOptions);
    setInfo(filterOptions[0]);
  };

  const clearFilters = () => {
    const recoveryOptions = numericFilter.map((item) => item.info);
    setFullOptions([...fullOptions, ...recoveryOptions]);
    setNumericFilter([]);
  };

  return (
    <div>
      <label htmlFor="selectType">
        <span>Coluna: </span>
        <select
          data-testid="column-filter"
          name="selectType"
          value={ info }
          onChange={ ({ target }) => setInfo(target.value) }
        >
          {fullOptions.map((item, k) => (
            <option key={ k } value={ item }>{item}</option>))}
        </select>
      </label>
      <label htmlFor="selectRequirement">
        <span>Requisito: </span>
        <select
          data-testid="comparison-filter"
          name="selectRequirement"
          value={ requeriment }
          onChange={ ({ target }) => setRequeriment(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="inputValue">
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Insira um valor"
          name="inputValue"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ clearFilters }
      >
        Remover todas filtragens

      </button>
    </div>
  );
}
