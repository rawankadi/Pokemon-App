import './App.css';
import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import AllPoke from './AllPoke';
import { getPokemon, getPokemonData } from './Api';
import Pokemon from './Pokemon';

const {useState,useEffect} = React;

function App() {
  const[pokemons,setPokemons] = useState([]);
  const [page,setPage]=useState(1);
  const [total,setTotal]=useState(0);


  const fetchPokemon =async() => {
    try{
      const data =await getPokemon(25, 25*page);
      const promises= data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal(Math.ceil(data.count / 25))
    }catch(err){

    }
  }

  useEffect(() => {
    fetchPokemon();
  },[page]);
  
  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
        <AllPoke 
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        />
      </div>
    </div>

  );
}

export default App;
