// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import Menu from "./components/Menu.jsx";
import SearchBar from "./components/SearchBar";

import "./App.css";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokedex-api.3rgo.tech/api/pokemon"
        );
        console.log("response :", response);
        setPokemonData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="nav-menu">
        <Menu />
        {/* <div className="search-bar"> */}
        <SearchBar pokemonNames={pokemonNames} />
        {/* </div> */}
      </div>
      <center>
        <img src="Pokedex_logo.png" alt="Pokedex logo"></img>
      </center>
      <div className="pokemon-container">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
