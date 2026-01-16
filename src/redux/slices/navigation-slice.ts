import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type navState = {
  activeNav: string;
};

const initialState: navState = {
  activeNav: "",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activeNav = action.payload;
    },
    clearActiveNav: (state) => {
      state.activeNav = "";
    },
  },
});

export const { setActiveNav, clearActiveNav } = navigationSlice.actions;

export default navigationSlice.reducer;
