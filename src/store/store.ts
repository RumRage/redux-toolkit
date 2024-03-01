import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { postApi } from "@/services/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    [postApi.reducerPath]: postApi.reducer,
    userData: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
