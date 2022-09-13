import { createSlice } from '@reduxjs/toolkit';

const chargerSlice = createSlice({
  name: 'chargers',
  initialState: [
  ],
  reducers: {
    addToChargers: (state, action) => {
        state.length = 0
        state.push({ ...action.payload });
    }
  },
});

export const chargerReducer = chargerSlice.reducer;

export const {
  addToChargers,
} = chargerSlice.actions;