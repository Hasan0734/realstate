import { getData } from "../../__lib__/helpers/HttpService";
import { blogsSlice } from "./slice";
const { actions: slice } = blogsSlice;

export const setBlogs = id => (dispatch) => {
    getData('/blogs')
    .then(response => dispatch(slice.setBlogs(response)))
}
