import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: ["somethind is hare"],
    loading: false,
    error: "",
    todo: []
}

export const getUserData = createAsyncThunk(
    'user/getUsers',
    async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    }
)

export const postTodo = createAsyncThunk(
    'todo/createTodo',
    async(todo) => {
        try {
            const res = await fetch("http://localhost:8000/createtodo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({todo})
            })
            return res
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    }
)




const userSclice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(postTodo.fulfilled, (state, action)=>{
            console.log(action);
        })
    }
})

export default userSclice.reducer