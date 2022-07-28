import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


const AllPoke= (props) => {
    const {pokemons, page, setPage,total} = props;

    const lastPage =()=> {
        const nextPage =Math.max(page - 1 ,0);
        setPage(nextPage)
    }

    const nextPage =() =>{
        const nextPage = Math.min(page - 1 ,total);
        setPage(nextPage)
    }
    
    return(
        <div>
            <div className="header">
                <h1>Pokemons</h1>
                <Pagination 
                page ={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />
            </div>
            <div className="poke-grid">
                {pokemons.map((pokemon, idx) => {
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
        </div>
    )
}
export default AllPoke;