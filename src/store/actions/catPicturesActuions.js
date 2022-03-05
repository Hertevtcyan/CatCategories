import { catPicActions } from "../reducers/catPicturesSlice.";
import axios from "axios";

export const getPicturesData = (payload) => {
  return async (dispatch) => {
    const getPics = async () => {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        payload
      );

      return response.data;
    };
    const data = await getPics();
    dispatch(
      catPicActions.setCatPics({
        response: data,
        perPage: payload.params.perPage,
      })
    );
  };
};
