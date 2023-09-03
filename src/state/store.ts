// store.ts
import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screenSlice";

const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
