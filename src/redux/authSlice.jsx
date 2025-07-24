import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name:'auth',
    initialState:{
       user: userFromStorage || null,
    },
    reducers : {
        loginSuccess: (state, action) =>{
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) =>{
            state.user = null
            localStorage.removeItem('user')
        },
    },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer;