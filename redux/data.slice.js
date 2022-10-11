import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: [{
        name: "",
        email: "",
        street: "",
        city: "",
        postcode: "",
        comments: "",
        car: "",    
        brand: "",
        socket: "",
        mob: "",
        status: "REC",
        password: "",
        charger_id: "",
        verifPass: "",
}],
    reducers: {
      addData: (state, event) => {
        console.log(event.target.name)
      },
      removeData: (state) => {
        state.splice(0, 1);
      },
    },
  });
  
  export const dataReducer = dataSlice.reducer;
  
  export const {
    addCar,
    removeCar,
  } = dataSlice.actions;