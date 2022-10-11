import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [
  ],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        //Later, Card, Paypal
        state.push({ ...action.payload, quantity: 1, payType: 'Later' });
      }
    },
    addCar: (state, action) => {
      state.length = 0
      state.push({ ...action.payload })
    },
    changePayTypee: (state, action) => {
      state[1].payType = action.payload
    },
    addData: (state, action) => {
      state.push({ ...action.payload })
    },
    /*
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      item.quantity++;
    }, */
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item._id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  changePayTypee,
  addCar,
  addData,
} = cartSlice.actions;