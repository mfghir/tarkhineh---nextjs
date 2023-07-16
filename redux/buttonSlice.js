import { createSlice } from '@reduxjs/toolkit';

const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    buttonClicked: false,
    userLoginClicked: false,
  },

  reducers: {
    setButtonClick: (state, action) => {
      state.buttonClicked = action.payload;
    },
    setUserLoginClick: (state, action) => {
      state.userLoginClicked = action.payload;
    },
  },
});

export const { setButtonClick, setUserLoginClick } = buttonSlice.actions;
export default buttonSlice.reducer;
