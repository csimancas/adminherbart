import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {}
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})
export const userState = (state) => state.user.user;
export const {setUser} = userSlice.actions;
export default userSlice.reducer;