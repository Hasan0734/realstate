import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { postData } from "../../../../__lib__/helpers/HttpService";
const Subcriber = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDisable(true)
    postData('/subscriber', {email: data.email}, setDisable)
    .then(res => {
      if (res.success) {
        toast.success(res.message)
        setDisable(false)
        reset()
      }else{
        setDisable(false)
      }
    })
  };
  return (
    <>
      <div className="card card-flush mb-4">
        <div className="card-body">
          <h4 className="h5 mb-3">Stay Informed</h4>
          <p className="fs-sm mb-3">
            Subscribe to our newsletter and be the first to see the latest posts
            and tips.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`form-group ${
                errors.email?.type === "required" && "border-danger"
              }`}
            >
              <div className="input-group input-group-sm">
                <span className="input-group-text text-muted">
                  <i className="fi-mail" />
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                />
              </div>
              {disable ? (
                <button disabled className="btn btn-primary btn-sm" type="button">
                  <ClipLoader color={"black"} loading={true} size={15} />
                </button>
              ) : (
                <button className="btn btn-primary btn-sm" type="submit">
                  Subcribe
                </button>
              )}
            </div>
            {errors.email?.type === "pattern" && (
              <span className="text-danger p-1">Please valid email</span>
            )}
            <div className="form-check pt-3">
              <input
                className={`form-check-input ${
                  errors.isAgree && "border-danger"
                }`}
                id="form-submit"
                type="checkbox"
                {...register("isAgree", { required: true })}
              />
              <label className="form-check-label" htmlFor="agree-to-terms">
                I agree to the <a href="#">Terms of use</a> and{" "}
                <a href="#">Privacy policy</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subcriber;
