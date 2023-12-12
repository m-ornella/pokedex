import { useState } from 'react';
import { createPortal } from 'react-dom';
import PokemonDetails from './PokemonDetails';

const Portal = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className="see-more-btn"onClick={() => setShowModal(true)}>
        See more
      </button>
      {showModal && createPortal(
        <PokemonDetails key={pokemon.id} pokemon={pokemon} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}


export default Portal;