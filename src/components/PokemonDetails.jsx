export default function PokemonDetails({ onClose }) {
  return (
    <div className="modal-container">
    <div className="modal">
      <div>Pokemon</div>
      <button onClick={onClose}>Close</button>
    </div>
    </div>
  );
}