import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserDataProps } from "@/typescript/interfaces/user.interface";

export const userInitialState: UserDataProps = {
  id: "",
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  },
  phone: "",
  website: "",
};

export const UserSlice = createSlice({
  name: "userData",
  initialState: userInitialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataProps>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = UserSlice.actions;
export const userState = (state: RootState) => state.userData;
export default UserSlice.reducer;
