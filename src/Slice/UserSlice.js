
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,      // Holds the user data
  };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        myUser: (state, action) => {
            state.user = action.payload;
          },
    }
})

export const { myUser} = userSlice.actions;


export default userSlice.reducer;
