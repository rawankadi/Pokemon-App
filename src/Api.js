import Pokemon from "./Pokemon";

export const searchPoke = async(poke) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    catch(err){

    }
}

export const getPokemon = async(limit=25, offset=0) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        return data;
    }
    catch(err){

    }

}

export const getPokemonData = async(url) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;

    }catch(err){

    }
}