import { propertyCategorySlice } from "./slice";
const { actions: slice } = propertyCategorySlice;

export const setSelectedCategory = selectedCategory => (dispatch) => {
  dispatch(slice.setSelectedCategory(selectedCategory))
}