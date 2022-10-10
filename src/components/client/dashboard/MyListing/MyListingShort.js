import React from 'react';

const MyListingShort = () => {
    return (
        <>
             <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
          <h1 className="h3 mb-md-0" style={{ color: "grey" }}>
            My Listings
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
        </>
    );
};

export default MyListingShort;