import { propertySearchSlice } from "./slice";
const { actions: slice } = propertySearchSlice;

export const setSearch = search => (dispatch) => {
  dispatch(slice.setSearch(search))
}