import React from "react";

const Feature = ({property}) => {
  return (
    <>
      <div className="border-bottom mb-2">
        <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
          <li className="col fw-normal">
            <i className="fi-bed mt-n1 me-2 fs-lg align-middle" />
            {property.furnishedStatus}
          </li>
          <li className="col fw-normal">
            <i className="fi-users mt-n1 me-2 fs-lg align-middle" />
            {property.tenantsPreferred}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Feature;
