import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { postData } from "../../../../__lib__/helpers/HttpService";

const ReferAndEarnForm = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDisable(true);
    postData("/refer", data, setDisable).then((res) => {
      if (res?.success) {
        setDisable(false);
        toast.success(`${res.message}`);
        reset();
      }
    });
  };

  return (
    <>
      <div className="col-xl-5 offset-xl-1 col-md-6">
        <h1 className="text-primary mb-md-4 mb-3">Refer &amp; Earn ₹250</h1>
        <p className="mb-4 pb-md-2 fs-lg">
          Earn in your UPI once your referral use our services.
        </p>
        <form
          className="needs-validation row row-cols-sm-2 row-cols-1 gy-sm-4 gy-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col">
            <label className="form-label" htmlFor="c-name">
              Your name<span className="text-danger">*</span>
            </label>
            <input
              {...register("_name", {
                required: "Your name is required.",
              })}
              className="form-control form-control-lg"
              id="c-name"
              type="text"
              placeholder="Enter name"
            />
            {errors._name && (
              <span className="text-danger">{errors._name.message}</span>
            )}
          </div>
          <div className="col">
            <label className="form-label" htmlFor="c-phone">
              Your phone<span className="text-danger">*</span>
            </label>
            <input
              {...register("_phone", {
                required: true,
                maxLength: 10,
                minLength: 10,
              })}
              className="form-control form-control-lg"
              id="c-phone"
              type="number"
              placeholder="XXXXXX"
            />
            {errors._phone && errors._phone.type === "required" && (
              <span className="text-danger">Phone is required</span>
            )}
            {errors._phone && errors._phone.type === "maxLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
            {errors._phone && errors._phone.type === "minLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
          </div>
          <div className="col">
            <label className="form-label" htmlFor="r-name">
              Referral name<span className="text-danger">*</span>
            </label>
            <input
              {...register("name_", {
                required: "Referral name is required.",
              })}
              className="form-control form-control-lg"
              id="r-name"
              type="text"
              placeholder="Enter referral name"
            />
            {errors.name_ && (
              <span className="text-danger">{errors.name_.message}</span>
            )}
            <div className="invalid-tooltip mt-1">Please, enter your name</div>
          </div>
          <div className="col">
            <label className="form-label" htmlFor="r-phone">
              Referral phone
            </label>
            <span className="text-danger">*</span>
            <input
              {...register("phone_", {
                required: true,
                maxLength: 10,
                minLength: 10,
              })}
              className="form-control form-control-lg"
              id="r-phone"
              type="tel"
              placeholder="XXXXXX"
            />
            {errors.phone_ && errors.phone_.type === "required" && (
              <span className="text-danger">Phone is required</span>
            )}
            {errors.phone_ && errors.phone_.type === "maxLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
            {errors.phone_ && errors.phone_.type === "minLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
          </div>
          <div className="col-12 w-100">
            <label className="form-label" htmlFor="c-message">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              {...register("message", {
                required: "Message is required.",
              })}
              className="form-control form-control-lg"
              id="c-message"
              rows={4}
              placeholder="Leave your message"
              defaultValue={""}
            />
            {errors.message && (
              <span className="text-danger">{errors.message.message}</span>
            )}
            <div className="invalid-tooltip mt-1">
              Please, leave your message
            </div>
          </div>
          <div className="form-check w-100" style={{ marginLeft: "15px" }}>
            <input
              {...register("isAgree", {
                required: true,
              })}
              className={`form-check-input ${
                errors.isAgree ? "border-danger" : ""
              }`}
              id="form-submit"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="agree-to-terms">
              I agree to the <a href="#">Terms of use</a> and{" "}
              <a href="#">Privacy policy</a>
            </label>
          </div>
          <div className="col-12 w-100">
            <button
              className="btn btn-lg btn-primary w-sm-auto w-100"
              type="submit"
              disabled={disable}
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReferAndEarnForm;
