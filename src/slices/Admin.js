import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItems: {
    name: "",
    image: "",
    price: "",
    description: "",
  },
};
const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addItemsActon(state, action) {
      state.addItems = {
        ...state.addItems,
        [action.payload.target.name]: action.payload.target.value,
      };
    },
    clearInputs(state) {
      state.addItems = {
        name: "",
        image: "",
        price: "",
        description: "",
      };
    },
  },
});
export const { addItemsActon, clearInputs } = AdminSlice.actions;
export default AdminSlice.reducer;
