import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    phoneCodeInputValue: (state, action) => {
        state.value = action.payload;
      },
  
  },
});

export const { phoneCodeInputValue } = inputSlice.actions;
export default inputSlice.reducer;
