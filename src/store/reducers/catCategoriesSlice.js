import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const catCategoriesSlice = createSlice({
  name: "category",
  initialState: initialData,
  reducers: {
    setCategoryData(state, action) {
      return action.payload;
    },
  },
});

export const categoryActions = catCategoriesSlice.actions;
export default catCategoriesSlice.reducer;
