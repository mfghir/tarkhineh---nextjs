import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: '',
  isVerified: false,
};

const phoneVerificationSlice = createSlice({
  name: 'phoneVerification',
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    }
  },
});

export const { setPhoneNumber, verifyPhoneNumber } = phoneVerificationSlice.actions;

export default phoneVerificationSlice.reducer;