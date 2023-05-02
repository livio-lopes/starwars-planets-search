import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from  '../../cypress/mocks/testData'
import PlanetProvider from '../context/PlanetProvider'
import userEvent from '@testing-library/user-event';



beforeEach(()=>(
  global.fetch = jest.fn(async () => ({
    json: async () => testData
  }))
))


describe('Testa Star Wars Search', ()=>{
  it('Testa se tabela está sendo exibida',async()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    const columnHeader = screen.getByRole('columnheader', {  name: /name/i})
    const rows= await screen.findAllByRole('cell')
    expect(columnHeader).toBeInTheDocument()
    expect(rows).toHaveLength(130)
  })
  it('Testa se filtro por nome está funcionando',async()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    const filterName = screen.getByTestId('name-filter')
    userEvent.type(filterName, 'Tat');
    const returnFilter = await screen.findByRole('cell', {  name: /tatooine/i})
    expect(returnFilter).toBeInTheDocument();
    userEvent.type(returnFilter, '{backspace}')
    const listReturned = await screen.findAllByRole('cell')
    expect(listReturned).toHaveLength(13)
  })
  it('Testa filtros numericos 2 filtros', async()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    const columnFilter = screen.getByTestId('column-filter')
    const comparasionFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const btnToFilter =screen.getByTestId('button-filter')
    userEvent.selectOptions(columnFilter,['diameter'])
    userEvent.selectOptions(comparasionFilter,['menor que'])
    userEvent.type(valueFilter, '10000')
    userEvent.click(btnToFilter)
    userEvent.selectOptions(columnFilter,['rotation_period'])
    userEvent.selectOptions(comparasionFilter,['menor que'])
    userEvent.type(valueFilter, '20')
    userEvent.click(btnToFilter)
    const endor = await screen.findByRole('cell', {  name: /endor/i})
    expect(endor).toBeInTheDocument()
  })
  it('Testa filtros numericos 3 filtros', async()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    const columnFilter = screen.getByTestId('column-filter')
    const comparasionFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const btnToFilter =screen.getByTestId('button-filter')
    userEvent.selectOptions(columnFilter,['rotation_period'])
    userEvent.selectOptions(comparasionFilter,['maior que'])
    userEvent.type(valueFilter, '20')
    userEvent.click(btnToFilter)
    userEvent.selectOptions(columnFilter,['orbital_period'])
    userEvent.selectOptions(comparasionFilter,['menor que'])
    userEvent.type(valueFilter, '400')
    userEvent.click(btnToFilter)
    userEvent.selectOptions(columnFilter,['surface_water'])
    userEvent.selectOptions(comparasionFilter,['igual a'])
    userEvent.type(valueFilter, '1')
    userEvent.click(btnToFilter)
    const tatooine = await screen.findByRole('cell', {  name: /tatooine/i})
    expect(tatooine).toBeInTheDocument()
  })
  it('Testa se residents não é carregado na tela',()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    waitFor(()=>{
      const residents = screen.queryByRole('columnheader', {  name: /residents/i})
      expect(residents).toBeNull()
    })
  })
  it('Testa se o botão de deletar está na tela',()=>{
    render(<PlanetProvider><App/></PlanetProvider>)
    const columnFilter = screen.getByTestId('column-filter')
    const comparasionFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const btnToFilter =screen.getByTestId('button-filter')
    userEvent.selectOptions(columnFilter,['diameter'])
    userEvent.selectOptions(comparasionFilter,['menor que'])
    userEvent.type(valueFilter, '10000')
    userEvent.click(btnToFilter)
    const deleteFilter = screen.getByTestId('filter')
    expect(deleteFilter).toBeInTheDocument()
  })
  })
