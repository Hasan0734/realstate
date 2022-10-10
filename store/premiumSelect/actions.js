import { getDataWithReq } from "../../__lib__/helpers/HttpService";
import { premiumSelectedSlice } from "./slice";
const { actions: slice } = premiumSelectedSlice;

export const setPremiumSelected = selectedCategory => (dispatch) => {
  dispatch(slice.setPremiumSelected(selectedCategory))
}

export const setPremiumData = (premium) => (dispatch) => {
  getDataWithReq('/properties/c', premium)
    .then(response => dispatch(slice.setPremiumData(response)))
}