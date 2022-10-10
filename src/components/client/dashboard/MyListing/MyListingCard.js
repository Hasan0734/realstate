import React from "react";

const MyListingCard = ({ item }) => {
  const {
    bedrooms,
    propertyType,
    monthlyRent,
    furnishedStatus,
    areaName,
    city,
    state,
    pinCode,
  } = item;
  return (
    <>
      <div className="col pt-2">
        <div className="position-relative">
          <div className="position-relative mb-3">
            <button
              className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Add to wishlist"
            >
              <i className="fi-heart" />
            </button>
            <img
              style={{ height: "240px", width: "100%" }}
              className="rounded-3 border"
              src="img/rokye-website/catalog/07.jpg"
              alt="Article img"
            />
          </div>
          <h3 className="mb-2 fs-lg">
            <a className="nav-link stretched-link" href="#">
              {bedrooms} {propertyType}| ₹ {monthlyRent}
            </a>
          </h3>
          <ul className="list-inline mb-0 fs-xs">
            <li className="list-inline-item pe-1">
              <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
              {areaName} {city} {state}
            </li>
            <li className="list-inline-item pe-1">
              <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
              {furnishedStatus}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyListingCard;
