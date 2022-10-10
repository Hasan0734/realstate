import { getData } from '../../__lib__/helpers/HttpService';
import { categorySlice } from "./slice";
const { actions: slice } = categorySlice;

export const setCategories = () => (dispatch) => {
  getData('/categories')
    .then(response => dispatch(slice.setCategories(response)))
}
