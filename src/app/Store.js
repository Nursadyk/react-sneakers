import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/Cart";
import Menu from "../slices/Menu";
import Admin from "../slices/Admin";
const combineValues = combineReducers({
  cart: CartSlice,
  menu: Menu,
  admin: Admin,
});
const setupStore = () => {
  return configureStore({
    reducer: combineValues,
  });
};
export default setupStore;
