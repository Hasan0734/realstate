import { getData } from "../../__lib__/helpers/HttpService";
import { blogSlice } from "./slice";
const { actions: slice } = blogSlice;

export const setBlog = id => (dispatch) => {
    getData(`/blog/${id}`)
    .then(response => dispatch(slice.setBlog(response)))
}
