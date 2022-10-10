import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Layout from "../src/components/client/layout";
import { userLogin } from "../store/users/actions";
import { postData } from "../__lib__/helpers/HttpService";
export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDisable(true);
    postData("/user/login", { email: data.email, password: data.password }, setDisable).then((res) => {
      if (res?.success) {
        cookies.set("_info", JSON.stringify({ token: res.token }), {
          path: "/",
        });
        router.push({ pathname: "/" });
        dispatch(userLogin(res));
        // reset()
      } else {
        toast.error(res.error)
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
              Sign in
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
                  <Link href="/signup">
                    <a>Sign up</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                <h3 className="h3 mb-4 text-primary">Sign in</h3>
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-4">
                    <label className="form-label mb-2" htmlFor="signin-email">
                      Email address
                    </label>
                    <input
                      {...register("email", {
                        required: "Email requird",
                      })}
                      className="form-control"
                      type="email"
                      id="signin-email"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <span className="text-danger">Email is required</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <label
                        className="form-label mb-0"
                        htmlFor="signin-password"
                      >
                        Password
                      </label>
                      <a type="button" onClick={() => router.push('/forget-password')} className="fs-sm">
                        Forgot password?
                      </a>
                    </div>
                    <div className="password-toggle">
                      <input
                        {...register("password", {
                          required: "Password requird",
                        })}
                        className="form-control"
                        type={`${showPass ? "text" : "password"}`}
                        id="signin-password"
                        placeholder="Enter password"
                      />
                      {errors.password && (
                        <span className="text-danger">
                          Password is required
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
                  <button
                    disabled={disable}
                    className="btn btn-primary btn-lg w-100"
                    type="submit"
                  >
                    Sign in
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
