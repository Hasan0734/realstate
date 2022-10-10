import { propertySortSlice } from "./slice";
const { actions: slice } = propertySortSlice;

export const setSortProperty = sortType => (dispatch) => {
  dispatch(slice.setSortProperty(sortType))
}