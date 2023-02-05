import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import FilterList from './components/filterlist/FilterList';
import MovieList from './components/movielist/MovieList';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <main className="main">
                    <FilterList />
                    <MovieList />
                </main>
            </div>
        </div>
    );
}

export default App;
