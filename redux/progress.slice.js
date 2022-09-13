import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
    name: 'progress',
    initialState: [
        {
            step: 1,
            selected: '',
        }
    ],
    reducers: {
      addStep: (state) => {
        state[0].step++
      },
      removeStep: (state) => {
        state[0].step--
      },
      setSelected: (state, action) => {
        state[0].selected = action.payload
      },
      removeSelected: (state) => {
        state[0].selected = ''
      },
      setStep: (state, action) => {
        state[0].step = action.payload
      },
    },
  });
  
  export const progressReducer = progressSlice.reducer;
  
  export const {
    addStep,
    removeStep,
    setStep,
    setSelected,
    removeSelected
  } = progressSlice.actions;