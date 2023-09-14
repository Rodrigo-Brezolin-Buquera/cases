import { configureStore } from "@reduxjs/toolkit";
import selectedUser from "./reducers/selectedUser";
import users from "./reducers/users";

const store = configureStore({
    reducer:{
        users: users,
        selectedUser : selectedUser
    }
})

export default store