import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: "",
  search: "",
  openCart: false,
};
export const fetchData = createAsyncThunk("menu/fetchData", async () => {
  const { data } = await axios(
    "https://6639fa2f1ae792804bed8616.mockapi.io/items"
  );
  return data;
});
const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    awaitItems(state) {
      state.loading = true;
    },
    setItems(state, action) {
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.loading = false;
    },
    readyItems(state, action) {
      state.filteredItems = action.payload;
      state.loading = false;
    },
    errorItems(state, action) {
      state.error = action.payload;
    },
    searchFc(state, action) {
      state.search = action.payload;
    },
    openCartFc(state, action) {
      state.openCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { awaitItems, readyItems, errorItems, searchFc, openCartFc } =
  MenuSlice.actions;
export default MenuSlice.reducer;
