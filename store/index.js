import { cartReducer } from '@/redux/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const createStore = preloadedState =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
