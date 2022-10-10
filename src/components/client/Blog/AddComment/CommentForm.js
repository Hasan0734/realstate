import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getData, postData } from "../../../../../__lib__/helpers/HttpService";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { setBlog } from "../../../../../store/blog/actions";

const CommentForm = () => {
  const [disable, setDisable] = useState();
  const dispatch = useDispatch()
  const { query } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDisable(true);
    postData(`/blog/${query.id}`, {...data, _time: new Date()}, setDisable).then((res) => {
      if (res.success) {
        dispatch(setBlog(query.id))
        setDisable(false);
        toast.success(res.message);
        reset()
      } else setDisable(false);
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation row gy-md-4 gy-3 pb-sm-2"
      >
        <div className="col-sm-6">
          <label className="form-label" htmlFor="comment-name">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className="form-control form-control-lg"
            type="text"
            id="comment-name"
            placeholder="Enter your name"
          />
          <div className={`invalid-feedback ${errors.name && "d-block"}`}>
            Please enter your name.
          </div>
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor="comment-email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="form-control form-control-lg"
            type="text"
            id="comment-email"
            placeholder="Enter your email"
          />
          <div className={`invalid-feedback ${errors.name && "d-block"}`}>
            Please provide a valid email address.
          </div>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="comment-text">
            Comment
          </label>
          <textarea
            {...register("comment", { required: true })}
            className="form-control form-control-lg"
            id="comment-text"
            rows={4}
            placeholder="Type comment here"
            defaultValue={""}
          />
          <div className={`invalid-feedback ${errors.name && "d-block"}`}>
            Please type your comment.
          </div>
        </div>
        <div className="col-12 text-center pt-2">
          {!disable ? (
            <button className="btn btn-lg btn-primary" type="submit">
              Post comment
            </button>
          ) : (
            <button disabled className="btn btn-lg btn-primary">
              <ClipLoader color={"black"} loading={true} size={20} />
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default CommentForm;
