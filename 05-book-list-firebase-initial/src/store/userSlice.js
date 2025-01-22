import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
  },
  reducers: {
    addUser: (users, action) => {
      users.currentUser = action.payload;
    },
  },
});

export const { addUser } = usersSlice.actions;
export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
