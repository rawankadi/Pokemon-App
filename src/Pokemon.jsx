import React from "react";

const Pokemon = (props) =>{
    const {pokemon} = props;
    return (
        <div className="pokemon-cards">
            <div>
                <img src={pokemon.sprites.front_default} alt="pokemon.name"  className="pokemon-imp"/>
            </div>
            <div className="body-card">
                <div className="top-card">
                    <h5>Name:</h5>
                    <h5>{pokemon.name}</h5>
                    <div><h5>ID: #{pokemon.id}</h5></div>
                </div>
                <div >
                    <div className="pokemon-type">
                        {pokemon.types.map((types, idx) =>{
                        return(
                            <div key={idx} className="pokemon-type-text">{types.type.name}</div>
                        )
                        }  )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;