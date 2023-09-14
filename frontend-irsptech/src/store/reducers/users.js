import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../api";
import { toModelNewUser } from "../../api/model";

export const getList = createAsyncThunk("get/list", async () => getUsers()) 

export const deleteUser = createAsyncThunk("delete/user", async (id, { getState, dispatch }) => {
    const state = getState(); 
    const updatedUsers = state.users.filter(i=> i.id !== id)  
    dispatch(usersSlice.actions.setUsers(updatedUsers));
});


const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        },
        createUser: (state, action) => {
            return [...state, toModelNewUser(action.payload)]
        },
        editUser: (state, action) => {
            const updatedUsers = state.map(user => {
                if (user.id === action.payload.id) {   
                    return {...user, [action.payload.field]: action.payload.value }
                }
                return user;
            });
            return updatedUsers
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getList.fulfilled, (state, { payload }) => payload)
            .addCase(getList.pending, (state, { payload }) => "loading")
            .addCase(getList.rejected, (state, { payload }) => "failed")     
    },
});

export const {createUser, editUser} = usersSlice.actions


export default usersSlice.reducer;
