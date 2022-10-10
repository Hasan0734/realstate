import { getData } from "../../__lib__/helpers/HttpService";
import { singlePropertySlice } from "./slice";
const { actions: slice } = singlePropertySlice;

export const setSingleProperty = id => (dispatch) => {
    getData(`/property/${id}`)
    .then(response => dispatch(slice.setSingleProperty(response)))
}
