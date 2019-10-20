import React from 'react';
import Reader from './Components/Reader';
import publications from './Data/publications.json';
import './App.css';

console.log(publications);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reader items={publications} />
      </header>
    </div>
  );
}

export default App;
