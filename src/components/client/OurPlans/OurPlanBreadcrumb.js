import Link from "next/link";
import React from "react";

const OurPlanBreadcrumb = () => {
  return (
    <>
      <nav className="mb-3 pt-md-3" aria-label="Breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
            <a >Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Our plans
          </li>
        </ol>
      </nav>
    </>
  );
};

export default OurPlanBreadcrumb;
