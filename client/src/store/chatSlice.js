import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: []
}

export const chatSlice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    setMessage: (state, action) => {
        // console.log("DISPATCH")
        state.messages.push(action.payload)
    }
  },
})

export const { setMessage } = chatSlice.actions

export default chatSlice.reducer