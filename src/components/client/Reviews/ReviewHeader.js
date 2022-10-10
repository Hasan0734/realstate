import Link from "next/link";
import React from "react";

const ReviewHeader = () => {
  return (
    <>
      <nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link href='/'>
          <a>Home</a>
          </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Reviews
          </li>
        </ol>
      </nav>
    </>
  );
};

export default ReviewHeader;
