import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDetails } from "../../api";

export const getDetails = createAsyncThunk("get/details", async (id, { getState }) => {
    const state = getState();
    return Array.isArray(state.users) ? state.users.find(i => i.id === id) : await getUserDetails()
});


export const editUserAndList = createAsyncThunk("edit/userAndList", async ({ updatedUser }, { dispatch }) => {
    dispatch(selectedUserSlice.actions.setSelectedUser(updatedUser));
}
);


const selectedUserSlice = createSlice({
    name: "selectedUser",
    initialState: {},
    reducers: {
        setSelectedUser: (state, action) => {
            return action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDetails.fulfilled, (state, { payload }) => payload)
            .addCase(getDetails.pending, (state, { payload }) => "loading")
            .addCase(getDetails.rejected, (state, { payload }) => "failed")
            .addCase(editUserAndList.fulfilled, (state, { payload }) => {
                const index = state.users.findIndex(item => item.id === payload.id); 
                state.users[index] = payload
            })
    }
})

export default selectedUserSlice.reducer