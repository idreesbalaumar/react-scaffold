import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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
import userReducer from "./slices/userSlice";
import authReducer from "./slices/auth.slice";
import { KEYS } from "@/helpers/constants.helper";

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Persist configuration
const persistConfig = {
  key: KEYS.REDUX_STORE,
  storage: storageSession,
  whitelist: ["authStore"], // Only persist authStore
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  authStore: authReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Setup hooks for dispatch and selector
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
