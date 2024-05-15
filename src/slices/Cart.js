import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  count: 1,
  isAdded: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction(state, action) {
      if (state.cart.find((item) => item.idx === action.payload.idx)) {
        state.cart = state.cart.filter((el) => el.idx !== action.payload.idx);
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    isAddedFc(state) {
      state.isAdded = true;
    },
    deleteCart(state, action) {
      state.cart.splice(action.payload, 1);
    },
  },
});
export const { increment, isAddedFc, addToCartAction, deleteCart } =
  CartSlice.actions;
export default CartSlice.reducer;
