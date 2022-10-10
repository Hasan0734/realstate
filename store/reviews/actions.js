import { getData } from '../../__lib__/helpers/HttpService';
import { reviewsSlice } from "./slice";
const { actions: slice } = reviewsSlice;

export const setReviews = () => (dispatch) => {
  getData('/reviews')
    .then(response => dispatch(slice.setReviews(response)))
}
