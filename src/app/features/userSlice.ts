import { createSlice } from "@reduxjs/toolkit";

const initialState: { user: any } = {
  user: 2,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    // login: (state, { payload }) => {},
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
