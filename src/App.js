import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
