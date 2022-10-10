import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import Layout from "../src/components/client/layout";
import { postData } from "../__lib__/helpers/HttpService";

export default function SignUp() {
  const [disable, setDisable] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    if (data.role === "true") {
      setDisable(false);
      setIsValid(true);
    } else {
      setDisable(true);
      const newData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        role: data.role,
      };
      postData("/user/register", newData, setDisable).then((res) => {
        if (res?.success) {
          toast.success(`${res.message}`);
          setDisable(false);
          // reset();
          router.push({
            pathname: "/dashboard",
          });
        } else {
          console.log(res)
          toast.error(res.error);
          setDisable(false);
        }
      });
    }
  };

  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sign up
            </li>
          </ol>
        </nav>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="signin"
            role="tabpanel"
          >
            <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2"></div>
            <div className="row mx-0 align-items-center">
              <div
                className="col-md-5 border-end-md p-4 p-sm-5"
              // style={{ marginLeft: "120px" }}
              >
                <h2 className="h3 mb-4 mb-sm-5">
                  Welcome to
                  <br />
                  No Brokerage property site!
                </h2>
                <ul className="list-unstyled mb-4 mb-sm-5">
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2" />
                    <span>No Brokerage</span>
                  </li>
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2" />
                    <span>No Advance Payment</span>
                  </li>
                  <li className="d-flex mb-0">
                    <i className="fi-check-circle text-primary mt-1 me-2" />
                    <span>All listings physically verified</span>
                  </li>
                </ul>
                <img
                  className="d-block mx-auto"
                  src="img/signin-modal/signup.svg"
                  width={344}
                  alt="Illustartion"
                />
                <div className="mt-4 mt-sm-5">
                  Already have an account?{" "}
                  <Link href="/signin">
                    <a>Sign in</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                <h3 className="h3 mb-4 text-primary">Sign up</h3>
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-4">
                    <label className="form-label" htmlFor="role">
                      I am <span className="text-danger">*</span>
                      <span className="text-danger" />
                    </label>
                    <select
                      name="role"
                      {...register("role", { required: true })}
                      className="form-select form-select-lg"
                      id="role"
                    >
                      <option value disabled selected>
                        Choose
                      </option>
                      <option value="OWNER">Owner</option>
                      <option value="TENANT">Tenant </option>
                    </select>
                    {watch().role === "true" && isValid && (
                      <span className="text-danger">Role is required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="signup-name">
                      Full name <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      className="form-control"
                      type="text"
                      id="signup-name"
                      placeholder="Enter name"
                  
                    />
                    {errors.name && (
                      <span className="text-danger">Name is required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="phone">
                      Phone number<span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("phone", {
                        required: true,
                        maxLength: 10,
                        minLength: 10
                      })}
                      maxLength="10"
                      className="form-control"
                      type="number"
                      id="phone"
                      placeholder="Enter phone"
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
                  <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                      className="form-control"
                      type="text"
                      id="email"
                      placeholder="Enter email"
                      autoComplete="off"
                    />
                    {errors?.email?.type === "required" && (
                      <span className="text-danger">Email is required.</span>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <span className="text-danger">Invalid email</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="password">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="password-toggle">
                      <input
                        {...register("password", {
                          required: true,
                        })}
                        className="form-control"
                        type={showPass ? "text" : "password"}
                        id="password"
                        placeholder="Enter password"
                        autoComplete="off"
                      />
                      {errors?.password?.type === "required" && (
                        <span className="text-danger">
                          Password is required.
                        </span>
                      )}

                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                      >
                        <input
                          onClick={() => setShowPass(!showPass)}
                          className="password-toggle-check"
                          type="checkbox"
                        />
                        <span className="password-toggle-indicator" />
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      {...register("isAgree", {
                        required: true,
                      })}
                      className={`form-check-input ${errors.isAgree ? "border-danger" : ""
                        }`}
                      type="checkbox"
                      id="agree-to-terms"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="agree-to-terms"
                    >
                      I agree to the <a href="#">Terms of use</a> and{" "}
                      <a href="#">Privacy policy</a>
                    </label>
                  </div>
                  {disable ? (
                    <button disabled className="btn btn-primary btn-lg w-100">
                      <ClipLoader color={"black"} loading={true} size={15} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-lg w-100"
                      type="submit"
                    >
                      Sign up
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
