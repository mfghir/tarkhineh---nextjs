import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  inputValues: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  },
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    phoneCodeInputValue: (state, action) => {
      state.value = action.payload;
    },


    codeInputValue: (state, action) => {
      const { field, value } = action.payload;
      state.inputValues[field] = value;
    },
  },
});

export const { phoneCodeInputValue ,codeInputValue } = inputSlice.actions;
export default inputSlice.reducer;
