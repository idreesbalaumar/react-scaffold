import { ROUTES } from "@/routes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";

interface UserProfile {
  profile_picture_url: string;
  // Add other fields as necessary, for example:
  // name: string;
  // email: string;
}


const initialState = {
  user_profile: {
    profile_picture_url: "", // Add this field to your user profile
  } as UserProfile,

  login_form: {
    usernameOrEmail: "",
    password: "",
  } as UserLogin,
};

const authStore = createSlice({
  name: "auth-store",
  initialState,
  reducers: {
    update_login_form: (state, action: PayloadAction<Partial<UserLogin>>) => {
      state.login_form = { ...state.login_form, ...action.payload };
    },
    set_user_profile: (state, action: PayloadAction<UserProfile>) => {
      state.user_profile = action.payload;
    },
    reset_login_form: (state) => {
      state.login_form = initialState.login_form;
    },
    reset_auth_store: () => {
      return initialState;
    },
    // New action to update profile picture URL
    updateProfilePicture: (state, action: PayloadAction<string>) => {
      state.user_profile.profile_picture_url = action.payload;
    },
    initiate_logout: () => {
      (async () => {
        await localforage.clear();
        sessionStorage.clear();
        location.replace(`${ROUTES.AUTH}/${ROUTES.LOGIN}`);
      })();
    },
  },
});

export const {
  update_login_form,
  reset_login_form,
  set_user_profile,
  reset_auth_store,
  updateProfilePicture, // Export the new action
  initiate_logout,
} = authStore.actions;
export default authStore.reducer;
