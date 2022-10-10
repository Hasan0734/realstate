import Link from "next/link";
import React from "react";

const AboutBreadcrumb = () => {
  return (
    <>
      <div className="container mt-5 mb-md-4 py-5">
        {/* Title + Breadcrumb*/}
        <nav className="mb-3 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                
                <Link href="/">
                <a >Home</a>
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About us
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default AboutBreadcrumb;
