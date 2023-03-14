import { configureStore } from '@reduxjs/toolkit';
import pokemon from './reducers/pokemon';
import pokedex from './reducers/pokedex';
import selectedPokemon from './reducers/selectedPokemon';



const store = configureStore({
    reducer:{
        pokemon: pokemon,
        pokedex: pokedex,
        selectedPokemon : selectedPokemon
    }
})

export default store