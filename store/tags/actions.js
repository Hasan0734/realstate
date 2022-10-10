import { getData } from '../../__lib__/helpers/HttpService';
import { tagSlice } from "./slice";
const { actions: slice } = tagSlice;

export const setTags = () => (dispatch) => {
  getData('/tags')
    .then(response => dispatch(slice.setTags(response)))
}
