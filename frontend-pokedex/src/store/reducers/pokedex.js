import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { addToPokedex } from "./pokemon";



export const removeFromPokedex = createAsyncThunk("remove/pokedex", (pokemon) => pokemon);

const pokedexSlice = createSlice({
    name: "pokedex",
    initialState: [],
    extraReducers: (builder) => {
        builder
        .addCase(addToPokedex.fulfilled, (state, { payload }) => {
            state.push(payload)
        })
        .addCase(removeFromPokedex.fulfilled, (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload.id); 
            state.splice(index, 1)
        })
    }
})

export const { addToPokedexSuccess } = pokedexSlice.actions;

export default pokedexSlice.reducer