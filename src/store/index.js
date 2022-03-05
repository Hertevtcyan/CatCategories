import { configureStore } from "@reduxjs/toolkit";
import catCategoriesReducer from "./reducers/catCategoriesSlice";
import catPicReducer from "./reducers/catPicturesSlice.";

const store = configureStore({
  reducer: {
    category: catCategoriesReducer,
    pictures: catPicReducer,
  },
});

export default store;
