import { createSlice } from '@reduxjs/toolkit';

const buttonSlice = createSlice({
  name: 'button',
  initialState: false,
  reducers: {
    setButtonClick: (state, action) => {
      return action.payload;
    },
  },
});

export const { setButtonClick } = buttonSlice.actions;
export default buttonSlice.reducer;