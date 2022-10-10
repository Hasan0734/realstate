import React from 'react';

const PlanCard = () => {
    return (
        <>
            <div className="col-sm-6 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <img
                className="d-block mx-auto mt-2 mb-4"
                src="img/rokye-website/icon-1.svg"
                width={72}
                alt="Icon"
              />
              <div className="d-flex align-items-end justify-content-center mb-4">
                <div className="text-primary h3 mb-0">Owners plan</div>
              </div>
              <div className="d-flex align-items-end justify-content-center mb-4">
                <div className="h2 mb-0">₹ 8999</div>
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
                  <span>Photoshoot of your property</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Property promotion on site</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Privacy of your details</span>
                </li>
                <li className="d-flex">
                  <i className="fi-check text-primary fs-sm mt-1 me-2" />
                  <span>Tenant verification</span>
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
                  <span>Showing house on your behalf</span>
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

export default PlanCard;