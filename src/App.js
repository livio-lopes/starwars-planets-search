import React from 'react';
import './App.css';
import Filters from './components/Filters';
import TableWars from './components/TableWars';

function App() {
  return (
    <div>
      <h1>Star Wars Planest</h1>
      <Filters />
      <TableWars />
    </div>
  );
}

export default App;
