import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
      addCar: (state, action) => {
        state.splice(0, 1);
        state.push({ ...action.payload, type: 'car' });
      },
      removeCar: (state) => {
        state.splice(0, 1);
      },
    },
  });
  
  export const carReducer = carSlice.reducer;
  
  export const {
    addCar,
    removeCar,
  } = carSlice.actions;