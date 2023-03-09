import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const loginSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialState
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialState
        },
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer;