import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { setToken } = authSlice.actions;
export default persistedAuthReducer;