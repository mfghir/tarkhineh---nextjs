import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const itemIndex = state.indexOf(item => {
            if (item.id === action.payload.id) return item;
          });
          state.splice(itemIndex, 1);
        }
      }
    },

    deleteOneItemFromCart: (state, action) => {  // XXX didn't work
      console.log('Deleting item:', action.payload);
      return (state = state.filter(item => item !== action.payload));
    },


    clearList: () => {
      return [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, deleteOneItemFromCart, clearList  } =
  cartSlice.actions;
