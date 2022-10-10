import React from 'react';

const PlanCard2 = () => {
    return (
        <>
            <div className="col-sm-6 col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <img
                className="d-block mx-auto mt-2 mb-4"
                src="img/rokye-website/icon-2.svg"
                width={72}
                alt="Icon"
              />
              <div className="d-flex align-items-end justify-content-center mb-4">
                <div className="text-primary h3 mb-0">Tenants plan</div>
              </div>
              <div className="d-flex align-items-end justify-content-center mb-4">
                <div className="h2 mb-0">₹ 7999</div>
                <div className="pb-1 ps-2">Inc. GST</div>
              </div>
              <ul
                className="list-unstyled d-block mb-0 mx-auto"
                style={{ maxWidth: "16rem" }}
              >
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>No advance payment</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>All verified listings</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Soon available for rent</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Owner verification</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Rent Negotiation</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Relationship manager</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Assistance by phone</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Personal field assistance</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Rental agreement</span>
                </li>
              </ul>
            </div>
            <div className="card-footer py-2 border-0">
              <div className="border-top text-center pt-4 pb-3" />
            </div>
          </div>
        </div>
        </>
    );
};

export default PlanCard2;