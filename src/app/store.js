import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./sclices/userSclice"

const store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export default store

