import React from "react";
import Cookies from 'universal-cookie'
import { updateData } from "../../../../__lib__/helpers/HttpService";
import {toast} from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { userLogin } from "../../../../store/users/actions";

const TitlePlusSharing = ({property}) => {
const cookies = new Cookies()
const dispatch = useDispatch()
const router = useRouter()
const {users} = useSelector(state => state)


  const addWishlist = async (propertyId) => {
    const user = await cookies.get("_info");
    if (user?.token) {
      const res = await updateData(
        `/user/wishlist/${propertyId}`,
        {},
        user.token
      );
      if (res.success) {
        toast.success(res.message);
        dispatch(userLogin({success: res.success, token: res.token, user: res.update}));
      } else {
        toast.error(res.error);
      }
    } else {
      router.push("/signin");
    }
  };
  return (
    <>
      <div
        className="d-sm-flex align-items-end align-items-md-center justify-content-between position-relative mb-4"
        style={{ zIndex: 1025 }}
      >
        <div className="me-3">
          <h2 className="h6 text-dark pt-4 mt-3 text-capitalize">
            {property.bedrooms} BHK {property.propertyType} in {property.areaName} {property.city}, {property.state}
          </h2>
          <div className="d-md-none">
            <div className="d-flex align-items-center mb-3"></div>
          </div>
        </div>
        <div className="text-nowrap pt-3 pt-sm-0">
          <button
         onClick={() => addWishlist(property._id)}
            className={`${users.user?.wishlists.some(pr => pr._id === property._id) ? 'active' : ''}  btn btn-icon btn-translucent-dark btn-xs rounded-circle mb-sm-2`}
            type="button"
            data-bs-toggle="tooltip"
            title="Add to Wishlist"
          >
            <i className="fi-heart" />
          </button>
          <div
            className="dropdown d-inline-block"
            data-bs-toggle="tooltip"
            title="Share"
          >
            <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end my-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitlePlusSharing;
