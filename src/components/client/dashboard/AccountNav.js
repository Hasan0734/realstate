import React from "react";

const AccountNav = () => {
  return (
    <>
      <div className="mt-md-n3 mb-4">
        <a
          className="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none"
          href="#account-nav"
          data-bs-toggle="collapse"
        >
          <i className="fi-align-justify me-2" />
          Account Menu
        </a>
        <div className="collapse d-md-block" id="account-nav">
          <ul className="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
            <li className="nav-item mb-md-0 me-md-2 pe-md-1">
              <a
                className="nav-link d-flex align-items-center active"
                href="#personalinfo"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="fi-user mt-n1 me-2 fs-base" />
                Personal Info
              </a>
            </li>
            <li className="nav-item mb-md-0 me-md-2 pe-md-1">
              <a
                className="nav-link d-flex align-items-center"
                href="#mylistings"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="fi-list mt-n1 me-2 fs-base" />
                My listings
              </a>
            </li>
            <li className="nav-item mb-md-0 me-md-2 pe-md-1">
              <a
                className="nav-link d-flex align-items-center"
                href="#wishlist"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="fi-heart mt-n1 me-2 fs-base" />
                Wishlist
              </a>
            </li>
            {/* <li className="nav-item mb-md-0 me-md-2 pe-md-1">
              <a
                className="nav-link d-flex align-items-center"
                href="#addblog"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="fi-plus mt-n1 me-2 fs-base" />
                Add Blog
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountNav;
