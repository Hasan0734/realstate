import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../../../../__lib__/helpers/HttpService";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
const ContactForm = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.role === "true") {
      setDisable(false);
    }
    if ((data.isAgree && data.role === "OWNER") || "TENANT") {
      setDisable(true);
      const newData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        message: data.message,
      };
      postData("/contact", newData, setDisable).then((res) => {
        if (res?.success) {
          toast.success(`${res.message}`);
          setDisable(false);
          reset();
        } else {
        }
      });
    }
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="role">
            I am
            <span className="text-danger" />
          </label>
          <select
            {...register("role", { required: true })}
            className={`form-select form-select-lg ${
              watch().role === "true" && "border-danger"
            }`}
            id="role"
          >
            <option value disabled selected>
              Choose
            </option>
            <option value="OWNER">Owner</option>
            <option value="TENANT">Tenant </option>
          </select>
        </div>
        <div className="mb-3">
          <input
            {...register("name", { required: true })}
            className={`form-control ${errors.name && "border-danger"}`}
            type="text"
            placeholder="Name*"
          />
        </div>
        <div className="mb-3">
          <input
             {...register("phone", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}

            className={`form-control ${errors.phone && "border-danger"}`}
            type="number"
            placeholder="Phone*"
          />
          {errors.phone && errors.phone.type === "required" && (
              <span className="text-danger">Phone is required</span>
            )}
            {errors.phone && errors.phone.type === "maxLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
            {errors.phone && errors.phone.type === "minLength" && (
              <span className="text-danger">Phone number must be 10 digit</span>
            )}
        </div>
        <input
          {...register("email", { required: true })}
          className={`form-control mb-3 ${errors.email && "border-danger"}`}
          type="text"
          placeholder="Email*"
        />
        <textarea
          {...register("message", { required: false })}
          className={`form-control mb-3 ${errors.message && "border-danger"}`}
          rows={3}
          placeholder="Message (Optional)"
          style={{ resize: "none" }}
          defaultValue={""}
        />
        <div className="form-check mb-4">
          <input
            {...register("isAgree", { required: true })}
            className={`form-check-input ${errors.isAgree && "border-danger"}`}
            id="form-submit"
            type="checkbox"
          />
          <label className="isAgree" htmlFor="agree-to-terms">
            I agree to the <a href="#">Terms of use</a> and{" "}
            <a href="#">Privacy policy</a>
          </label>
        </div>
       {!disable ?  <button className="btn btn-lg btn-primary d-block w-100" type="submit">
          Send request
        </button>: 
         <button disabled className="btn btn-lg btn-primary d-block w-100" type="button">
         <ClipLoader color={'black'} loading={true}  size={25} />
       </button>
        }
      </form>
    </>
  );
};

export default ContactForm;
