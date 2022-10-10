import React, { useState } from "react";
import { postData } from "../../../../../__lib__/helpers/HttpService";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const ContactForm = () => {
  const [disable, setDisable] = useState();
  const [isValid, setIsValid] = useState(false);
  const { users } = useSelector(state => state);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.role === "true") {
      setDisable(false);
      setIsValid(true);
    } else {
      setDisable(true);
      const newData = {
        name: users.user?.name,
        email: users.user?.email,
        phone: users.user?.phone,
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
      <form
        className="modal-body needs-validation"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <label className="form-label" htmlFor="c-subject">
            I am<span className="text-danger">*</span>
          </label>
          <select
            {...register("role", {
              required: true,
            })}
            className={`form-select form-select-lg mb-3 ${watch().role === "true" && isValid && 'border-danger'}`}
            id="c-subject"
          >
            <option value selected disabled>
              Choose
            </option>
            <option value="OWNER">Owner</option>
            <option value="TENANT">Tenant</option>
          </select>
        </div>

        <div className="mb-4">
          <textarea
            {...register("message", { required: true })}
            className="form-control"
            rows={6}
            placeholder="Type your message here"
            defaultValue={""}
          />
          <div className={`invalid-feedback ${errors.message && "d-blok"}`}>
            Please type your message before sending.
          </div>
        </div>
        {!disable ? (
          <button className="btn btn-primary mb-2" type="submit">
            <i className="fi-send me-2" />
            Send message
          </button>
        ) : (
          <button disabled className="btn btn-primary mb-2">
            <ClipLoader color={"black"} loading={true} size={20} />
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
