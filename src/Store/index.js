import UserSlice from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: UserSlice.reducer
  }
});
export default store;
