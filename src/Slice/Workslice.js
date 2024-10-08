import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "workSpace",
  initialState: {
    workRoom: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.workRoom = action.payload.workRoom;
    },
  },
});

export const { enterRoom } = workSlice.actions;
export const selectRoom = (state) => state.workSpace.workRoom;

export default workSlice.reducer;
