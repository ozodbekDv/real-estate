import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

interface UserState {
  name: string;
}

export interface RootState {
  user: UserState;
  // other slices of state
}
