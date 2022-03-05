import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const catPicturesSlice = createSlice({
  name: "pictures",
  initialState: initialData,
  reducers: {
    setCatPics(state, action) {
      const perPage = action.payload.perPage;
      const response = action.payload.response;
      return perPage === 1 ? response : [...state, ...response];
    },
  },
});

export const catPicActions = catPicturesSlice.actions;
export default catPicturesSlice.reducer;
