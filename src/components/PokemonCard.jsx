import Portal from './Portal';
import i18n from "../i18n";


const PokemonCard = ({ pokemon }) => {

  // const { i18n, t } = useTranslation();
  const { id, name, image, types, height, weight, generation } = pokemon;

  return (
    <div key={id} className="card pokemon-card bg-yellow">
      <img src={image} alt={name.en} className="card-img-top" />
      <div className="card-body">
        <div className='name-gen-container'>
        <h5 className="card-title">{name.en}</h5>
        <p className="card-text gen">{generation} </p>
        </div>
        <p className="card-text">Type : {types.map(typeId => <span key={typeId}>{typeId} </span>)}</p>
        <p className="card-text">{i18n.t('height')} : {height} m</p>
        <p className="card-text">{i18n.t('weight')} : {weight} kg</p>
       
        <div>
          <Portal key={pokemon.id} pokemon={pokemon} />
        </div>
    </div>
      </div>
  );
};

export default PokemonCard;



// class Translator {
//   constructor(){
//     this.lang = 'en';

//   }
   
//   set(key){
//     this.lang = key;
//   }

//   static get(key){
//     console.log(this.mapEn.get("height"));
//     if(this.lang==='en')
//      return this.mapEn.get(key); 
// else
//      return this.mapFr.get(key);
//   }

//    mapFr ={
//     "height":"hauteur"
//   };
//    mapEn ={
//     "height":"height"
//   };
// }