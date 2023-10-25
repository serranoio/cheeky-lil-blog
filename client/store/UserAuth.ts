// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  isAuth: boolean;
  user: any;
  error: string;
};
const initialState: InitialState = {
  isAuth: false,
  error: "",
  user: {},
};

const userAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUserLogin(state, action: PayloadAction<any>) {
      state.error = "";
      state.user = action.payload;
      state.isAuth = true;
    },

    authUserLogout(state) {
      state.error = "";
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { authUserLogin, authUserLogout } = userAuth.actions;

export default userAuth.reducer;
