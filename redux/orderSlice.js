// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   list1: {
//     items: [],
//     totalPrice: 0,
//     discountedPrices: [],
//   },
//   list2: {
//     items: [],
//     totalPrice: 0,
//     discountedPrices: [],
//   },
//   list3: {
//     items: [],
//     totalPrice: 0,
//     discountedPrices: [],
//   },
// };

// const orderSlice = createSlice({
//   name: 'lists',
//   initialState,
//   reducers: {
//     setItems: (state, action) => {
//       const { listType, items } = action.payload;
//       state[listType].items = items;
//     },
//     calculatePrices: (state, action) => {
//       const { listType, discountRate } = action.payload;
//       const items = state[listType].items;
//       const totalPrice = items.reduce(
//         (accumulator, item) => accumulator + item.num * item.price,
//         0
//       );
//       state[listType].totalPrice = totalPrice;
//       const discountedPrices = items.map(
//         item => item.price - (item.price * discountRate / 100)
//       );
//       state[listType].discountedPrices = discountedPrices;
//     },
//   },
// });

// export const { setItems, calculatePrices } = orderSlice.actions;

// export default orderSlice.reducer;