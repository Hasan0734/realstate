import Link from "next/link";
import React from "react";

const SellingCondition = () => {
  return (
    <>
      <section className="container mb-5 pb-lg-5 pb-2 pb-sm-3">
        <div className="row gy-4 align-items-lg-center">
          <div className="col-lg-5 col-md-6 order-md-1 order-2 text-md-start text-center">
            <h2 className="mb-md-4 text-dark">Verification</h2>
            <p className="mb-4 pb-md-3 text-dark opacity-70">
              We are the first company to introduce the concept of extra layer
              of background verification: we do verify all the basic details of
              tenants and make sure that your journey of renting a home will
              most straight-forward and enjoyable.
            </p>
           <Link href='/add-property'>
           
           <a
              className="btn btn-primary w-sm-auto w-100"
              
            >
              <i className="fi-plus me-2" />
              Add property
            </a>
           </Link>
          </div>
          <div className="col-md-6 offset-lg-1 order-md-2 order-1">
            <img
              className="rounded-3"
              src="img/rokye-website/01.jpg"
              alt="Attractive selling conditions"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SellingCondition;
