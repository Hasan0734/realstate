import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { setReviews } from "../../../../../store/reviews/actions";
import { postData } from "../../../../../__lib__/helpers/HttpService";

const ReviewForm = () => {
  const [disable, setDisable] = useState(false);
  const [rating, setRating] = useState(false);
  const dispatch= useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
 

  const onSubmit = (data) => {
    if (data.rating === "true") {
      setRating(true);
    } else {
      setDisable(true);
      postData("/review", data, setDisable).then((res) => {
        if (res.success) {
          toast.success(res.message);
          setDisable(false);
            dispatch(setReviews())
          reset()
        }
      });
    }
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="review-name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            className="form-control"
            type="text"
            id="review-name"
            placeholder="Your name"
          />
          <div className={`invalid-feedback ${errors.name && "d-block"}`}>
            Please let us know your name.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="review-email">
            Email <span className="text-danger">*</span>
          </label>
          <input
            {...register("email", { required: true })}
            className="form-control"
            type="text"
            id="review-email"
            placeholder="Your email address"
          />
          <div className={`invalid-feedback ${errors.email && "d-block"}`}>
            Please provide a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="review-rating">
            Rating <span className="text-danger">*</span>
          </label>
          <select
            {...register("rating", { required: true })}
            className="form-select"
            id="review-rating"
          >
            <option value selected disabled>
              Choose rating
            </option>
            <option value={5}>5 stars</option>
            <option value={4}>4 stars</option>
            <option value={3}>3 stars</option>
            <option value={2}>2 stars</option>
            <option value={1}>1 star</option>
          </select>
          <div className={`invalid-feedback ${rating && "d-block"}`}>
            Please rate the property.
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="review-text">
            Review <span className="text-danger">*</span>
          </label>
          <textarea
            {...register("body", { required: true })}
            className="form-control"
            id="review-text"
            rows={5}
            placeholder="Your review message"
            defaultValue={""}
          />
          <div className={`invalid-feedback ${errors.body && "d-block"}`}>
            Please write your review.
          </div>
        </div>
        {!disable ? (
          <button className="btn btn-primary d-block w-100 mb-4" type="submit">
            Submit a review
          </button>
        ) : (
          <button disabled className="btn btn-primary d-block w-100 mb-4">
            <ClipLoader color={"black"} loading={true} size={20} />
          </button>
        )}
      </form>
    </>
  );
};

export default ReviewForm;
