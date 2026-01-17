import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice.ts";
import navigationSlice from "../slices/navigation-slice.ts";
import orderSlice from "../slices/order-slice.ts";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    navigation: navigationSlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
