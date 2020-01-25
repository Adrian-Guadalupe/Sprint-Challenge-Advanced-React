import React from 'react';
import './App.css';
import FetchedData from './components/FetchedData';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FetchedData />
    </div>
  );
}

export default App;
