// src/redux-store/slices/profileSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  profile_picture_url: string | null;
}

const initialState: ProfileState = {
  profile_picture_url: null,
};

const profileStore = createSlice({
  name: 'profileStore',
  initialState,
  reducers: {
    updateProfileImage: (state, action: PayloadAction<string | null>) => {
      console.log("Updating profile image:", action.payload); // Log to check
      state.profile_picture_url = action.payload;
    },
  },
});

export const { updateProfileImage } = profileStore.actions;
export default profileStore.reducer;
