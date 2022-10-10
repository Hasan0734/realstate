import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
const AccountHeader = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const { users } = useSelector((state) => state);

  const handleLogOut = () => {
    cookies.remove("_info", { path: "/" });
    if (!cookies.get("_info")) {
      toast.success("Logout success");
      router.push(router.pathname);
    }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between pb-4 mb-2">
        <div className="d-flex align-items-center">
          <div className="position-relative flex-shrink-0">
            <img
              className="rounded-circle border border-white"
              src="img/rokye-website/avtar.png"
              width={100}
              alt="Annette Black"
            />
            <button
              className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0"
              type="button"
              data-bs-toggle="tooltip"
              title="Change image"
            >
              <i className="fi-pencil fs-xs" />
            </button>
          </div>
          <div className="ps-3 ps-sm-4">
            <h3 className="h4 mb-2 text-capitalize">{users.user?.name}</h3>
            <span className="star-rating">
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
            </span>
          </div>
        </div>
        <a
          onClick={() => handleLogOut()}
          type="button"
          className="nav-link p-0 d-none d-md-block"
          href="#"
        >
          <i className="fi-logout mt-n1 me-2" />
          Sign out
        </a>
      </div>
    </>
  );
};

export default AccountHeader;
