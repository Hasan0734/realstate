import { adminSlice } from "./slice";
const { actions: slice } = adminSlice;

export const adminLogin = (token) => (dispatch) => {
  dispatch(slice.adminLogin(token))
}

export const adminLogout = () => (dispatch) => {
  dispatch(slice.adminLogout())
}
