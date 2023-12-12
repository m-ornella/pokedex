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
            <>
              <img src={isShiny ? image_shiny : image} alt="Pokemon" />
              <button onClick={toggleImage}>
                {isShiny ? 'Show Regular' : 'Show Shiny'}
              </button>
            </>
          )}
        </div>
      );

}

export default PokemonImageSwitcher;