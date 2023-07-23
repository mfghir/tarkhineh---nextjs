import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/redux/cartSlice';
import inputReducer from '@/redux/inputSlice';

import buttonReducer from '@/redux/buttonSlice';
import phoneVerificationReducer from '@/redux/phoneVerificationSlice';
import searchTermReducer from '@/redux/searchTermSlice';

import modalReducer from '@/redux/modalSlice';
import persistedAuthReducer from '@/redux/authSlice';
import { persistStore } from 'redux-persist';

const rootReducer = {
  cart: cartReducer,
  input: inputReducer,
  button: buttonReducer,

  phoneVerification: phoneVerificationReducer,
  searchTerm: searchTermReducer,
  modal: modalReducer,

  auth: persistedAuthReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
