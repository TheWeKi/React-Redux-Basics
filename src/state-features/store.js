import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../state-features/slices/loginSlice"
export const store = configureStore({
    reducer: {
        user : userReducer,
    }
})