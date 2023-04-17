import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterDetail } from "../../api";

export const getDetails = createAsyncThunk("get/details", async (name, { getState }) => {
    const state = getState();
    const character =  await getCharacterDetail(name)
    const favorited = state.favorites.find(i=> i.id === character.id)
    return favorited ? {...character, favorite: true} : character
});


const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDetails.fulfilled, (state, { payload }) => payload)
            .addCase(getDetails.pending, (state, { payload }) => "loading")
            .addCase(getDetails.rejected, (state, { payload }) => "failed")
    }
})

export default selectedCharacterSlice.reducer