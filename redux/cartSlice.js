import foodMenuData from '@/db/foodMenuData';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: foodMenuData,
    favorites: [],
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const itemIndex = state.cart.indexOf(item => {
            if (item.id === action.payload.id) return item;
          });
          state.cart.splice(itemIndex, 1);
        }
      }
    },

    deleteOneItemFromCart(state, action) {
      const updatedItems = state.cart.filter(
        item => item.id !== action.payload.id
      );
      return { ...state, cart: updatedItems };
    },

    toggleFavorite(state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex === -1) return;

      const item = state.items[itemIndex];
      const isFavorite = state.favorites.includes(id);

      if (isFavorite) {
        state.favorites.splice(state.favorites.indexOf(id), 1);
      } else {
        state.favorites.push(id);
      }

      state.items[itemIndex] = { ...item, fav: true, isFavorite: !isFavorite };
    },

    clearList(state) {
      state.cart = [];
      state.favorites = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  deleteOneItemFromCart,
  toggleFavorite,
  clearList,
} = cartSlice.actions;
