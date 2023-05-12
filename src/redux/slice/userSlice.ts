import { createSlice } from "@reduxjs/toolkit";

const UserState = {
  userName: null,
  userEmail: null,
  isSignedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: UserState,
  reducers: {
    setUserActive: (state, action) => {
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      state.isSignedIn = true;
    },
    setUserInActive: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.isSignedIn = false;
    },
  },
});

export const { actions: userAction } = userSlice;
export { userSlice };
