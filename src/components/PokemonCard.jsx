import Portal from './Portal';

const PokemonCard = ({ pokemon }) => {

  // const { i18n, t } = useTranslation();
  const { id, name, image, types, generation } = pokemon;

  // const [selectedLanguage, setSelectedLanguage] = useState('en')
  // const handleLanguage=(e)=>{
  //   setSelectedLanguage(e.target.value)
  //   console.log(selectedLanguage)
  // }


  return (
    <div key={id} className="card pokemon-card bg-yellow">
      {/* <div>
        <p onClick={handleLanguage(e)}>fr</p>
        <p onClick={handleLanguage(e)}>en</p>
      </div> */}
      <img src={image} alt={name.en} className="card-img-top" />
      <div className="card-body">
        <div className='name-gen-container'>
        <h5 className="card-title">{name.en}</h5>
        <p className="card-text gen">{generation} </p>
        </div>
        <p className="card-text">Type : {types.map(typeId => <span key={typeId}>{typeId} </span>)}</p>
        {/* <p className="card-text">{i18n.t('height')} : {height} m</p>
        <p className="card-text">{i18n.t('weight')} : {weight} kg</p>
        */}
        <div>
          <Portal key={pokemon.id} pokemon={pokemon} />
        </div>
    </div>
      </div>
  );
};

export default PokemonCard;


