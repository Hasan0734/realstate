import Link from "next/link";
import React from "react";

const AboutPersonalized = () => {
  return (
    <>
      <section className="container mb-5 pb-lg-5 pb-2 pb-sm-3">
        <div className="row gy-4 align-items-lg-center">
          <div className="col-md-6">
            <img
              className="rounded-3"
              src="img/rokye-website/5.jpg"
              alt="Personalized search"
            />
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-6 text-md-start text-center">
            <h2 className="mb-md-4 text-dark">Personalized search</h2>
            <p className="mb-4 pb-md-3 text-dark opacity-70">
              We are the first company to introduce the concept of having all
              the listings physically verified: we take extra layer of quality
              check and have accureate details of home condition, society,
              locality and all the other important features that tenants desire.
            </p>
            <Link href='/'>
            <a
              className="btn btn-primary w-sm-auto w-100"
           
            >
              <i className="fi-search me-2" />
              Search home
            </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPersonalized;
