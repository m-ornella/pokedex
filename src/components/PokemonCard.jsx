import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Portal from './Portal';

const PokemonCard = ({ pokemon }) => {
  const { id, name, image, types, height, weight, stats, evolvesTo } = pokemon;

   const [showModal, setShowModal] = useState(false);
  

  return (
    <div key={id} className="card pokemon-card bg-yellow">
      <img src={image} alt={name.en} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name.en}</h5>
        <p className="card-text">Type: {types.map(typeId => <span key={typeId}>{typeId} </span>)}</p>
        <p className="card-text">Height: {height} m</p>
        <p className="card-text">Weight: {weight} kg</p>
        <p className="card-text">Stats:</p>
        <ul className="list-unstyled">
          {Object.entries(stats).map(([stat, value]) => (
            <li key={stat}>{stat}: {value}</li>
          ))}
        </ul>
        <p className="card-text">Evolves To:</p>
        <ul className="list-unstyled">
          {Object.entries(evolvesTo).map(([evolutionId, condition]) => (
            <li key={evolutionId}>{evolutionId}: {condition}</li>
          ))}
        </ul>
        <div>
          <Portal />
        </div>
    </div>
      </div>
  );
};

export default PokemonCard;

