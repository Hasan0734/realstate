import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "./WishListItem";


const Wishlists = () => {
  const {users} = useSelector(state => state)
  const {user} = users;
   return (
    <>
      <div className="tab-pane fade" id="wishlist" role="tabpanel">
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
          <h1 className="h3 mb-md-0" style={{ color: "grey" }}>
            My Wishlist
          </h1>
          {/* Sort*/}
          <div className="d-flex align-items-sm-center align-items-end">
            <div className="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
              <label
                className="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap"
                htmlFor="sortby"
              >
                <i className="fi-arrows-sort me-2" />
                Sort by:
              </label>
              <select
                className="form-select form-select-sm"
                id="sortby"
                style={{ minWidth: "180px" }}
              >
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            {/* <a
              className="d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap"
              href="#"
            >
              <i className="fi-x fs-xs me-2 align-middle" />
              Clear all
            </a> */}
          </div>
        </div>
        {/* Favorites grid*/}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4">
          {/* Item*/}
          {user?.wishlists?.map((list, i) => <WishListItem property={list} key={list._id} />)}
          <a
            className="d-inline-block py-sm-2 fw-bold text-decoration-none"
            href="#"
          >
            <i className="fi-refresh me-2 align-middle" />
            Load more
          </a>
        </div>
      </div>
    </>
  );
};

export default Wishlists;
