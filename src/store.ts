import { configureStore, createReducer } from "@reduxjs/toolkit";
import rootReducer from "@/root.reducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
