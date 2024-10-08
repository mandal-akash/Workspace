import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Slice/UserSlice'
import workSlice from '../Slice/Workslice'


export const store = configureStore({
    reducer: {
        user: userSlice,
        workSpace : workSlice,
    },
  })
  