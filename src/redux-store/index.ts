// src/redux-store/index.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { KEYS } from "@/helpers/constants.helper";

// Store Reducers
import authReducer from "./slices/auth.slice";
import profileReducer from "./slices/profileSlices";
import paymentFormReducer from "./slices/paymentFormSlice";
import themeReducer from './slices/themeSlice';

// Define RootState type
const rootReducer = combineReducers({
  authStore: authReducer,
  profileStore: profileReducer,
  paymentFormSlice: paymentFormReducer,
  themeStore: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: KEYS.REDUX_STORE,
  storage: storageSession,
  whitelist: [
    "authStore",
    "profileStore",
    "paymentFormSlice",
    "themeStore",
  ], // Ensure this matches your slice names
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
