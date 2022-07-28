import React from "react";
import { useState } from "react";
import { searchPoke } from "./Api";


const SearchBar = () => {
    const [search,setSearch] = useState('');
    const [pokemon,setPokemon] = useState();

    const onChange = (e) =>{
        setSearch(e.target.value);
    }

    const onClick =async(e) =>{
        const data = await searchPoke(search);
        setPokemon(data);
    }

    return (
        <div className="searchBar-container">
            <div className="searchBar">
                <input 
                placeholder="Buscar pokemon.."
                onChange={onChange}
                />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>
           
        </div>
    )
};

export default SearchBar;