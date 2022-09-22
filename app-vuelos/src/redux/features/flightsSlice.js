import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseData: [""]
};

export const flightsSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    handleState: (state, action) => {
      state.chooseData = action.payload;
    }
  }
});

export const { handleState } = flightsSlice.actions;

export default flightsSlice.reducer;
