import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteAllUser(state, action) {
      return [];
    }
  }
});
export default UserSlice;
export const { addUser, deleteAllUser, deleteUser } = UserSlice.actions;
