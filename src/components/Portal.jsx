import { useState } from 'react';
import { createPortal } from 'react-dom';
import PokemonDetails from './PokemonDetails';
import i18n from '../i18n';

const Portal = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
     <button className="see-more-btn" onClick={() => setShowModal(true)}>
  {i18n.t('see_more')}
</button>
      {showModal && createPortal(
        <PokemonDetails key={pokemon.id} pokemon={pokemon} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}


export default Portal;