import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  sidebarOpen: boolean;
  rightbarOpen: boolean;
  searchboxOpen: boolean;
};

const initialState: UiState = {
  sidebarOpen: false,
  rightbarOpen: false,
  searchboxOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },

    toggleRightbar: (state) => {
      state.rightbarOpen = !state.rightbarOpen;
    },
    openRightbar: (state) => {
      state.rightbarOpen = true;
    },
    closeRightbar: (state) => {
      state.rightbarOpen = false;
    },

    toggleSearchbox: (state) => {
      state.searchboxOpen = !state.searchboxOpen;
    },
    openSearchbox: (state) => {
      state.searchboxOpen = true;
    },
    closeSearchbox: (state) => {
      state.searchboxOpen = false;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  toggleRightbar,
  openRightbar,
  closeRightbar,
  openSearchbox,
  closeSearchbox,
  toggleSearchbox,
} = uiSlice.actions;

export default uiSlice.reducer;
