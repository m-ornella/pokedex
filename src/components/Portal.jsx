import { useState } from 'react';
import { createPortal } from 'react-dom';
import PokemonDetails from './PokemonDetails';

const Portal = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Voir plus
      </button>
      {showModal && createPortal(
        <PokemonDetails key={pokemon.id} pokemon={pokemon} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}


export default Portal;