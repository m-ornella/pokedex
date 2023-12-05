// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard'; // Update the path as needed
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokedex-api.3rgo.tech/api/pokemon');
        setPokemonData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokemon-container">
        {pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
