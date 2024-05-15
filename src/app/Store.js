import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/Cart";
import Menu from "../slices/Menu";
const combineValues = combineReducers({
  cart: CartSlice,
  menu: Menu,
});
const setupStore = () => {
  return configureStore({
    reducer: combineValues,
  });
};
export default setupStore;
