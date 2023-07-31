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
    addressValue: '',
  },
  reducers: {
    phoneCodeInputValue: (state, action) => {
      state.value = action.payload;
    },

    codeInputValue: (state, action) => {
      const { name, value } = action.payload;
      state.inputValues[name] = value;
    },

    addressInputValue: (state, action) => {
      state.addressValue = action.payload;
    },
  },
});

export const { phoneCodeInputValue, codeInputValue ,addressInputValue } = inputSlice.actions;
export default inputSlice.reducer;
