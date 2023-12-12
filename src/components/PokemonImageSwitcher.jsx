import React, { useState } from 'react';

const PokemonImageSwitcher = ({pokemon})=> {
    const { image, image_shiny } = pokemon;
    const [isShiny, setIsShiny] = useState(false);

    const toggleImage = () => {
        setIsShiny(!isShiny);
      };

    return (
        <div>
          {image && image_shiny && (
            <div className="image-toggle-container">
              <img className="modal-img" src={isShiny ? image_shiny : image} alt="Pokemon" />
              <button onClick={toggleImage}>
                {isShiny ? 'Regular' : 'Shiny'}
              </button>
            </div>
          )}
        </div>
      );

}

export default PokemonImageSwitcher;