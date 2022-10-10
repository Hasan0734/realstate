import Link from "next/link";
import React from "react";
import queryString from "query-string";
import slugify from "slugify";
const SingleImage = ({ property }) => {
  const query = queryString.stringify(
    {
      bedrooms: property.bedrooms + " " + "bed",
      propertyType: property.propertyType,
      areaName: property.areaName , 
      city: property.city,
      state:  property.state,
      id: property._id,
    },
    { sort: false }
  );
  return (
    <>
      <div
        className="card-img-top position-relative"
        style={{ backgroundImage: `url(${property?.images[0]})` }}
      >
        <Link href={`property?${query}`}>
          <a className="stretched-link" href="" />
        </Link>
        <div className="position-absolute start-0 top-0 pt-3 ps-3">
          <span className="d-table badge bg-success mb-1">Verified</span>
        </div>
        <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
          <button
            className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to Wishlist"
          >
            <i className="fi-heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
