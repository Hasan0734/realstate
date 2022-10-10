import React from "react";

const FAQHeader = () => {
  return (
    <>
      <section className="container mb-4 pb-lg-5">
        <h1
          className="mx-auto mb-4 pb-2 text-center"
          style={{ maxWidth: "856px", color: "grey" }}
        >
          Hi, how can we help?
        </h1>
        {/* Search form*/}
        <form className="form-group mb-4">
          <div className="input-group input-group-lg">
            <input
              className="form-control"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
          <button className="btn btn-primary btn-lg px-sm-4 px-3" type="submit">
            <i className="fi-search me-sm-2" />
            <span className="d-sm-inline d-none">Search</span>
          </button>
        </form>
        <div className="d-flex flex-md-row flex-column align-items-md-center"></div>
      </section>
    </>
  );
};

export default FAQHeader;
