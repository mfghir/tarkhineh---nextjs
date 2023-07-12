import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    favorites: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const itemIndex = state.items.indexOf(item => {
            if (item.id === action.payload.id) return item;
          });
          state.items.splice(itemIndex, 1);
        }
      }
    },

    deleteOneItemFromCart(state, action) {
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return { ...state, items: updatedItems };
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

      state.items[itemIndex] = { ...item, isFavorite: !isFavorite };


      // if (!state.favorites.find((item) => item.id === id)) {
      //   state.favorites.push({
      //     ...action.payload
      //   });
      //   console.log("state.favorites" ,  state.favorites);
      // }
      // return {
      //   ...state,
      //   favorites: [...state.favorites],
    
      // };

   
    },

    clearList(state) {
      state.items = [];
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


