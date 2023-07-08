import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/redux/cartSlice';
import inputReducer from '@/redux/inputSlice';

import buttonReducer from '@/redux/buttonSlice';
import phoneVerificationReducer from '@/redux/phoneVerificationSlice';
import searchTermReducer from '@/redux/searchTermSlice';

// import {orderReducer}  from '@/redux/orderSlice';
// import signupReducer from '@/redux/signupSlice';

const createStore = preloadedState =>
  configureStore({
    reducer: {
      cart: cartReducer,
      input: inputReducer,
      button: buttonReducer,
      
      phoneVerification: phoneVerificationReducer,
      searchTerm: searchTermReducer,

      // signup: signupReducer,
      // order: orderReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
