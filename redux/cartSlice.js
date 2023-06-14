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

    calculateTotal: state => {
      // state.totalPrice = state.items.reduce((total, item) => total + item.price, 0);
      state.totalDiscount = state.items.reduce((total, item) => total + item.discount || 0, 0);
    }

  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions;
