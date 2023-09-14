import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user : ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName : (state, action)=>{
            state.user = action.payload;
        }
    }
})

export const {setName}= userSlice.actions

export default userSlice.reducer
