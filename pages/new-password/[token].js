import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import * as Yup from "yup";
import Layout from "../../src/components/client/layout";
import { userLogin } from "../../store/users/actions";
import { postData } from "../../__lib__/helpers/HttpService";
import jwt from "jsonwebtoken";

export default function NewPassword() {
  const [showPass, setShowPass] = useState(false);
  const [conPass, setConPass] = useState(false);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);


  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),

    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const cookies = new Cookies();
  const router = useRouter();





  const onSubmit = (data) => {
    setDisable(true);

    jwt.verify(router.query.token,process.env.NEXT_PUBLIC_JWT_SECRET , (err, decode) => {
   
      if (err) {
        toast.error(err.message);
      }
      if (decode) {
        postData(
          "/user/password/reset",
          { password: data.password,token: router.query.token },
          setDisable
        ).then((res) => {
          if (res?.success) {
            setDisable(false)
            router.push({ pathname: "/signin" });
            toast.success(res.message);
            reset()
          } else {
            setDisable(false)
            toast.error(res.error);
            console.log(res)
          }
        });
      }
    });
   
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
              New Password
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
                  Hey there!
                  <br />
                  Welcome back.
                </h2>
                <img
                  className="d-block mx-auto"
                  src="/img/rokye-website/signin.svg"
                  width={344}
                  alt="Illustartion"
                />
                <div className="mt-4 mt-sm-5">
                  Don&apos;t have an account?{" "}
                  <Link href="/signin">
                    <a>Sign in</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                <h3 className="h3 mb-4 text-primary">Set New Password</h3>
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <label
                        className="form-label mb-0"
                        htmlFor="signin-password"
                      >
                        New Password
                      </label>
                    </div>
                    <div className="password-toggle">
                      <input
                        {...register("password", {
                          required: true,
                        })}
                        className="form-control"
                        type={`${showPass ? "text" : "password"}`}
                        id="new-password"
                        placeholder="Enter password"
                      />

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
                    {/* show error */}
                    <span className="text-danger">
                      {errors.password?.message}
                    </span>
                  </div>

                  {/* confirm password */}

                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <label
                        className="form-label mb-0"
                        htmlFor="signin-password"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <div className="password-toggle">
                      <input
                        {...register("confirm_password", {
                          required: true,
                        })}
                        className="form-control"
                        type={`${conPass ? "text" : "password"}`}
                        id="confirm-password"
                        placeholder="Enter password"
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                      >
                        <input
                          onClick={() => setConPass(!conPass)}
                          className="password-toggle-check"
                          type="checkbox"
                        />
                        <span className="password-toggle-indicator" />
                      </label>
                    </div>

                    {/* show error */}

                    <span className="text-danger">
                      {errors.confirm_password?.message}
                    </span>
                  </div>

                  <button
                    disabled={disable}
                    className="btn btn-primary btn-lg w-100"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
