import { getPokemon } from "@/pages/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeFromPokedex } from "./pokedex";


export const getList = createAsyncThunk("get/list", async () => getPokemon());
export const addToPokedex = createAsyncThunk("add/pokedex", (pokemon) => pokemon);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, { payload }) => payload)
      .addCase(getList.pending, (state, { payload }) => "carregando")
      .addCase(getList.rejected, (state, { payload }) => "falha ao carregar")
      .addCase(addToPokedex.fulfilled, (state, { payload }) => {
        const index = state.findIndex(item => item.id === payload.id); 
        state.splice(index, 1)
      })
      .addCase(removeFromPokedex.fulfilled, (state, { payload }) => {
        state.push(payload)
    })
    
  },
});



export default pokemonSlice.reducer;
