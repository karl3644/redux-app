import React from 'react';
import NewCounter from './features/counter/newCounter/newCounter';
import './App.css';
import Calculator from './features/ConnectAPI/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NewCounter />
      </header>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
