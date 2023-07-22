import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/redux/cartSlice';
import inputReducer from '@/redux/inputSlice';

import buttonReducer from '@/redux/buttonSlice';
import phoneVerificationReducer from '@/redux/phoneVerificationSlice';
import searchTermReducer from '@/redux/searchTermSlice';

import modalReducer from '@/redux/modalSlice';

const createStore = preloadedState =>
  configureStore({
    reducer: {
      cart: cartReducer,
      input: inputReducer,
      button: buttonReducer,

      phoneVerification: phoneVerificationReducer,
      searchTerm: searchTermReducer,
      modal: modalReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
