import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    phoneValue: '',
    codeInputValues: {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    },
    addressValue: '',
    addressDetailValue: {},
    inputList: [],
    isEditing: false,
    editedIndex: null,
  },
  reducers: {
    phoneInputValue: (state, action) => {
      state.phoneValue = action.payload;
    },

    codeInputValue: (state, action) => {
      const { name, value } = action.payload;
      state.codeInputValues[name] = value;
    },

    addressInputValue: (state, action) => {
      state.addressValue = action.payload;
    },

    addressDetailInputValue: (state, action) => {
      state.addressDetailValue = action.payload;
    },

    addInput: (state, action) => {
      state.inputList.push(action.payload);
    },

    editInput: (state, action) => {
      const { index, inputValues } = action.payload;
      state.inputList[index] = inputValues;
    },

    setEditing: (state, action) => {
      const index = action.payload;
      state.isEditing = true;
      state.editedIndex = index;
    },

    clearEditing: state => {
      state.isEditing = false;
      state.editedIndex = null;
    },

    deleteInput: (state, action) => {
      const index = action.payload;
      state.inputList.splice(index, 1);
      // const itemIdToDelete = action.payload;
      // state.inputList = state.inputList.filter((item) => item.id !== itemIdToDelete);
    },
  },
});

export const {
  phoneInputValue,
  codeInputValue,
  addressInputValue,
  addressDetailInputValue,
  addInput,
  editInput,
  setEditing,
  clearEditing,
  deleteInput,
} = inputSlice.actions;
export default inputSlice.reducer;
