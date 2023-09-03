import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenState {
  screenID: number;
}

const initialState: ScreenState = {
  screenID: Number(localStorage.getItem("screenID")) || 1,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreenID: (state, action: PayloadAction<number>) => {
      state.screenID = action.payload;
      localStorage.setItem("screenID", action.payload.toString());
    },
  },
});

export const { setScreenID } = screenSlice.actions;
export default screenSlice.reducer;
