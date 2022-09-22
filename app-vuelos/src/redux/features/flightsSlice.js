import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseCodeIntial: "",
  cityInitialChoose: "",
  chooseCodeFinal: "",
  cityFinalChoose: "",
  fechaViaje: "",
  passengers: ""
};

export const flightsSlice = createSlice({
  name: "globalStateFlights",
  initialState,
  reducers: {
    handleCodeInitial: (state, action) => {
      state.chooseCodeIntial = action.payload;
    },
    handleCityInitial: (state, action) => {
      state.cityInitialChoose = action.payload;
    },
    handleCodeFinal: (state, action) => {
      state.chooseCodeFinal = action.payload;
    },
    handleCityFinal: (state, action) => {
      state.cityFinalChoose = action.payload;
    },
    handlFechaViaje: (state, action) => {
      state.fechaViaje = action.payload;
    },
    handlePassengers: (state, action) => {
      state.passengers = action.payload;
    }
  }
});

export const { handleCodeInitial, handleCityInitial } = flightsSlice.actions;

export default flightsSlice.reducer;
