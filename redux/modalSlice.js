import { createSlice } from '@reduxjs/toolkit';


const modalSlice = createSlice({
  name: 'modal',
  initialState :{},
  reducers: {
    openModal: (state, action) => {
      const { id } = action.payload;
      state[id] = { isOpen: !state[id]?.isOpen };
    },
    closeModal: (state, action) => {
      const { id } = action.payload;
      state[id] = { isOpen: false };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;