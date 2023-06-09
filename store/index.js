import { configureStore } from '@reduxjs/toolkit';

const createStore = preloadedState =>
  configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV === 'development',
    ...(!!preloadedState && { preloadedState: preloadedState }),
  });

export default createStore;
