import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const { id, name, image, types, height, weight, stats, evolvesTo } = pokemon;

  return (
    <div key={id} className="pokemon-card">
      <img src={image} alt={name.en} />
      <h3>{name.en}</h3>
      <p>Type: {types.map(typeId => <span key={typeId}>{typeId} </span>)}</p>
      <p>Height: {height} m</p>
      <p>Weight: {weight} kg</p>
      <p>Stats:</p>
      <ul>
        {Object.entries(stats).map(([stat, value]) => (
          <li key={stat}>{stat}: {value}</li>
        ))}
      </ul>
      <p>Evolves To:</p>
      <ul>
        {Object.entries(evolvesTo).map(([evolutionId, condition]) => (
          <li key={evolutionId}>{evolutionId}: {condition}</li>
        ))}
      </ul>
    </div>
  );
};

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
