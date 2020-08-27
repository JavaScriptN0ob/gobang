import React from 'react';

import './App.css';

import FiveSonCheese from './components';
import ChooseBoardSize from './components/ChooseBoardSize';

function App() {
  return (
    <div className="App">
      <ChooseBoardSize />
      <FiveSonCheese />
    </div>
  );
}

export default App;
