import { getData } from "../../__lib__/helpers/HttpService";
import { propertiesSlice } from "./slice";
const { actions: slice } = propertiesSlice;

export const setProperties = id => (dispatch) => {
    getData('/properties')
    .then(response => dispatch(slice.setProperties(response)))
}
