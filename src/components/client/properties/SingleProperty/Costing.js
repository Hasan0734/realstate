import React from "react";

const Costing = ({property}) => {
  return (
    <>
      <div>
        <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
          <li className="col fw-normal">
            <i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹
            {property.monthlyRent} Rent
          </li>
          <li className="col fw-normal">
            <i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹
            {property.securityAmount} Deposit
          </li>
        </ul>
      </div>
    </>
  );
};

export default Costing;
