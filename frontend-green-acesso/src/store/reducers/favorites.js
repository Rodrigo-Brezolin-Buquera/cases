import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { addToFavorites } from "./characters";


 
export const removeFromFavorites = createAsyncThunk("remove/favorites", (character) => character);

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToFavorites.fulfilled, (state, {payload}) => {
                const character = state.find(item => item.id === payload.id); 
                if(!character){
                    const newChar =   {...payload, favorite: true} 
                    state.push(newChar)
                }
         
            })
            .addCase(removeFromFavorites.fulfilled, (state, {payload}) => {
                const index = state.findIndex(item => item.id === payload.id); 
                state.splice(index, 1)
            })
    }
})


export default favoritesSlice.reducer