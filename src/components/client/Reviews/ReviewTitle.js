import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ReviewTitle = () => {
  const { reviews } = useSelector((state) => state);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4 pb-2">
        <h1 className="h2 text-center text-sm-start mb-0">
          Reviews ({reviews.reviewList?.length})
        </h1>
        <Link href='/properties'>
          <a className="btn btn-link btn-sm px-0">
            <i className="fi-arrow-left fs-xs mt-0 me-2" />
            Back to Offers
          </a>
        </Link>
      </div>
    </>
  );
};

export default ReviewTitle;
