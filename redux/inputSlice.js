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
    addressDetailValue: {},
    inputList: [],
    isEditing: false,
    editedIndex: null,
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
    clearEditing: (state) => {
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
  phoneCodeInputValue,
  codeInputValue,
  addressInputValue,
  addressDetailInputValue,
  addInput,
  editInput, setEditing, clearEditing,deleteInput
} = inputSlice.actions;
export default inputSlice.reducer;
