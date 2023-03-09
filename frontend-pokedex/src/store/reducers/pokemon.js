import { getPokemon } from "@/pages/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getList = createAsyncThunk("get/list", async () => getPokemon());

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  extraReducers: (builder) => {
    builder
    .addCase(getList.fulfilled, (state, {payload}) => {
      // console.log("addcase",state)
      return payload })
    .addCase(getList.pending, (state, {payload}) => "carregando" )
    .addCase(getList.rejected, (state, {payload}) => "falha ao carregar" )


  },
});

export const { setMainList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
