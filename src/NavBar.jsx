import React from "react";


const NavBar = () => {
    let imgUrl = 
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img src={imgUrl} alt="poke-logo" className="navbar-image"/>
            </div>
        </nav>
    )
}

export default NavBar;