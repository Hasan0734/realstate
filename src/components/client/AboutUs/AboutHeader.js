import Link from "next/link";
import React from "react";

const AboutHeader = () => {
  return (
    <>
      <section className="container mb-5 pb-lg-5">
        <div className="row align-items-center justify-content-lg-start justify-content-center flex-lg-nowrap gy-4">
          <div className="col-lg-8" style={{ overflow: "hidden" }}>
            <img
              className="rounded-3"
              src="img/rokye-website/02.jpg"
              alt="Hero image"
            />
          </div>
          <div className="col-lg-4 ms-lg-n5 col-sm-9 text-lg-start text-center">
            <div className="ms-lg-n5 pe-xl-5">
              <h1 className="mb-lg-4 text-dark">About us</h1>
              <p className="mb-4 pb-lg-3 fs-lg text-dark opacity-80">
                We believe that renting a home should be straight-forward and
                enjoyable, not time-consuming, complicated or stressful. Rent a
                home without paying any brokerage and you can avail our services
                without any advance payment, We believe in service first and pay
                later policy.
              </p>
             <Link href='/'>
             <a
                className="btn btn-lg btn-primary w-sm-auto w-100"
                
              >
                <i className="fi-search me-2" />
                Search home
              </a>
             </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
