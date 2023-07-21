import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '',
    inputValues: {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    },
  },
  reducers: {
    phoneCodeInputValue: (state, action) => {
      state.value = action.payload;
    },

    codeInputValue: (state, action) => {
      const { name, value } = action.payload;
      state.inputValues[name] = value;
    },
  },
});

export const { phoneCodeInputValue, codeInputValue } = inputSlice.actions;
export default inputSlice.reducer;
