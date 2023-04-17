import { configureStore } from "@reduxjs/toolkit";
import characters from "./reducers/characters";
import favorites from "./reducers/favorites";
import selectedCharacter from "./reducers/selectedCharacter";


const store = configureStore({
    reducer:{
        characters: characters,
        favorites: favorites,
        selectedCharacter : selectedCharacter
    }
})



export default store