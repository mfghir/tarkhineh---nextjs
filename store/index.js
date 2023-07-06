import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/redux/cartSlice';
import inputReducer from '@/redux/inputSlice';

// import {orderReducer}  from '@/redux/orderSlice';
import buttonReducer from '@/redux/buttonSlice';
import phoneVerificationReducer from '@/redux/phoneVerificationSlice';
// import signupReducer from '@/redux/signupSlice';

const createStore = preloadedState =>
  configureStore({
    reducer: {
      cart: cartReducer,
      input: inputReducer,
      button: buttonReducer,
      phoneVerification: phoneVerificationReducer,

      // signup: signupReducer,
      // order: orderReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
