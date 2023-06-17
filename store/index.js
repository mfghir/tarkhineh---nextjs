import { cartReducer } from '@/redux/cartSlice';
import inputReducer  from '@/redux/inputSlice';
import { configureStore } from '@reduxjs/toolkit';

import buttonReducer from '@/redux/buttonSlice';

const createStore = preloadedState =>
  configureStore({
    reducer: {
      cart: cartReducer,
      input: inputReducer,
      button: buttonReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
