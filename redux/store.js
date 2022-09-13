import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './car.slice';
import { cartReducer } from './cart.slice';
import { chargerReducer } from './chargers.slice';
import { progressReducer } from './progress.slice';

const reducer = {
  cart: cartReducer,
  car: carReducer,
  progress: progressReducer,
  chargers: chargerReducer,
};

const store = configureStore({
  reducer,
});

export default store;