import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeRoom: "",
  peopleJoined: ""
};

export const roomSlice = createSlice({
  name: "activeRoomName",
  initialState,
  reducers: {
    setActiveRoom: (state, action) => {
      state.activeRoom = action.payload;
    },
    setPeopleJoined: (state, action)=>{
      state.peopleJoined = action.payload
    }
  },
});

export const { setActiveRoom , setPeopleJoined} = roomSlice.actions;

export default roomSlice.reducer;
