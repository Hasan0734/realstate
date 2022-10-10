import React from "react";

const FAQBreadcrumb = () => {
  return (
    <>
      <div className="container mt-5 mb-md-4 pt-5">
        <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="real-estate-home.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              FAQs
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default FAQBreadcrumb;
