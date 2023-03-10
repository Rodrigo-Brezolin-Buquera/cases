import { getPokemonDetail, toModelPokemonDetails } from "@/pages/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk("get/details", async (name) => getPokemonDetail(name));


const selectedPokemonSlice = createSlice({
    name: "selectedPokemon",
    initialState: {},
    extraReducers: (builder) => {
        builder
          .addCase(getDetails.fulfilled, (state, { payload }) => toModelPokemonDetails(payload))
          .addCase(getDetails.pending, (state, { payload }) => "carregando")
          .addCase(getDetails.rejected, (state, { payload }) => "falha ao carregar")
    }
})

export default selectedPokemonSlice.reducer