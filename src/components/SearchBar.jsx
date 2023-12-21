import React from "react";

const SearchBar = ({ pokemonNames }) => {
    const [search, setSearch] = React.useState("");
  
    const filteredList = pokemonNames.filter((item) => {
        if(search === "") {
            return false;
        }
      return item.toLowerCase().includes(search.toLowerCase());
    });
  
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search your pokemon" onChange={(e) => setSearch(e.target.value)} />
        <div className="list-container">
        {
          filteredList.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
        </div>
      </div>
    );
  };
  
  export default SearchBar;
