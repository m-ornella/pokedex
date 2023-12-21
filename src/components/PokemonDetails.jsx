import PokemonImageSwitcher from "./PokemonImageSwitcher";

const PokemonDetails = ({ onClose, pokemon }) => {
  const { id, name, types, height, weight, stats, evolvesTo } = pokemon;
  return (
    <div className="modal-container">
    <div key={id} className="modal-card">
    <PokemonImageSwitcher
            key={pokemon.id} pokemon={pokemon}
          />
      <div className="card-body">
        <div className="close-btn container">
      <button className="close-btn" onClick={onClose}>x</button>
      </div>
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

      
    </div>
    </div>
    </div>
  );
};

export default PokemonDetails;