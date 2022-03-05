import { categoryActions } from "../reducers/catCategoriesSlice";

export const getCatCategories = () => {
  return async (dispatch) => {
    const getCatCategoriesData = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/categories ");

      if (!response.ok) {
        throw new Error("Could not fetch category data!");
      }
      const data = await response.json();

      return data;
    };
    const categoryData = await getCatCategoriesData();

    dispatch(categoryActions.setCategoryData(categoryData));
  };
};
