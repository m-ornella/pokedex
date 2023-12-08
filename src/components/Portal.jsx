import { useState } from 'react';
import { createPortal } from 'react-dom';
import PokemonDetails from './PokemonDetails';

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Voir plus
      </button>
      {showModal && createPortal(
        <PokemonDetails onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}