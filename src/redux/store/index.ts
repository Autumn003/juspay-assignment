import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice.ts";
import navigationSlice from "../slices/navigation-slice.ts";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    navigation: navigationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
