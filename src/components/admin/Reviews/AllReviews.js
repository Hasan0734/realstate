import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { setReviews } from "../../../../store/reviews/actions";
import ReviewCard from "./ReviewCard";

const AllReviews = () => {
  const dispatch = useDispatch();
  const {reviews} = useSelector(state => state);
  const {reviewList} = reviews;
  useEffect(() => {
    dispatch(setReviews())
  }, []);

  return (
    <secttion>
      <div className="row">
        {reviewList?.length > 0 ? (
          reviewList?.map((cont, i) => <ReviewCard key={i} data={cont} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
            <GridLoader color={"#27d37f"} loading={true} size={8} />
            </div>
          </div>
        )}
      </div>
    </secttion>
  );
};

export default AllReviews;
